import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import login_img from "../../assets/login-img.jpg";

const Register = () => {
  const { createUser, updateUserProfile, logOut } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            // Create user entry in the database
            const userInfo = {
              name: data.name,
              email: data.email,
              photo: data.photoURL,
              role: "Normal User", // Default role for new users
              winPercentage: 0,
              bio: "",
              address: "",
            };

            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                reset();
                Swal.fire({
                  icon: "success",
                  title: "Registration Successful!",
                  text: "You have been registered and logged out. Please log in.",
                  showConfirmButton: false,
                  timer: 2000,
                });
                // Firebase token is saved on register, logout to clear it and force login with updated profile
                logOut().then(() => {
                  navigate("/login");
                });
              }
            });
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              icon: "error",
              title: "Profile Update Failed",
              text: error.message,
            });
          });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message || "Error creating user",
        });
      });
  };

  return (
    <div className="hero bg-primary-light dark:bg-primary-dark min-h-screen">
      <Helmet>
        <title>Crazy Contest | Register</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row">
        <div className="card bg-card-light text-primary-dark dark:text-primary-light dark:bg-card-dark w-full max-w-sm shrink-0 shadow-2xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body text-primary-dark dark:text-primary-light"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered bg-secondary-o/30 dark:bg-primary-dark/50"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="mt-1 text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered bg-secondary-o/30 dark:bg-primary-dark/50"
                {...register("photoURL", { required: true })}
              />
              {errors.photoURL && (
                <span className="mt-1 text-red-600">Photo URL is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
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
                placeholder="Password"
                className="input input-bordered bg-secondary-o/30 dark:bg-primary-dark/50"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="mt-1 text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="mt-1 text-red-600">
                  Password must be 6 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="mt-1 text-red-600">
                  Password must have one uppercase, one lowercase, one number
                  and one special character.
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-secondary-o border-none">
                Register
              </button>
            </div>
          </form>
          <p className="px-8 pb-4 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary hover:text-secondary-c font-bold hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
        <div className="hidden text-center lg:block lg:text-left">
          <img
            src={login_img}
            alt="log_in_frog"
            className="max-h-[500px] rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
