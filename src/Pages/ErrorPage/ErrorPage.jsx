import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-primary-dark flex h-screen flex-col items-center justify-center">
      <h1 className="text-secondary-o text-9xl font-bold">404</h1>
      <p className="mt-4 text-2xl">Oops! Page not found.</p>
      <Link to="/" className="btn bg-secondary-o mt-8 border-none">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
