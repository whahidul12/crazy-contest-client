import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import login_img from "../../assets/login-img.jpg";

const Login = () => {
  const { signIn, googleSignIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message || "Invalid credentials",
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          role: "Normal User",
        };
        axiosPublic.post("/users", userInfo).then(() => {
          Swal.fire({
            icon: "success",
            title: "Google Login Successful!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="hero bg-primary-light dark:bg-primary-dark min-h-screen">
      <Helmet>
        <title>Crazy Contest | Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-card-light dark:bg-card-dark w-full max-w-sm shrink-0 shadow-2xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body text-primary-dark dark:text-primary-light"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-secondary-o/30 dark:bg-primary-dark/50"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="mt-1 text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-secondary-o/30 dark:bg-primary-dark/50"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="mt-1 text-red-600">Password is required</span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-secondary-o border-none">Login</button>
            </div>
          </form>
          <div className="text-primary-dark dark:text-primary-light px-8 pb-4">
            <p className="mb-2 text-center">Or login with</p>
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-primary-light hover:bg-primary-dark hover:text-primary-light btn-outline dark:text-primary-dark dark:hover:text-primary-light border-primary w-full text-lg"
            >
              <FcGoogle /> Google
            </button>
            <p className="mt-4 text-center">
              New here?{" "}
              <Link
                to="/register"
                className="text-primary hover:text-secondary-c font-bold hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden text-center lg:block lg:text-left">
          <img
            src={login_img}
            alt="log_in_frog"
            className="max-h-[550px] rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
