import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-base-100 flex h-screen flex-col items-center justify-center">
      <h1 className="text-primary text-9xl font-bold">404</h1>
      <p className="mt-4 text-2xl">Oops! Page not found.</p>
      <Link to="/" className="btn btn-primary mt-8">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
