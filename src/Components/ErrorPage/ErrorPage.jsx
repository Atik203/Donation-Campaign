import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div
      id="error-page"
      className="text-4xl font-bold text-center justify-center mt-40"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to="/"
        className="btn btn-secondary text-xl mt-5 bg-gray-500 border-none text-white"
      >
        Go Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
