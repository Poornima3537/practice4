import { Link } from "react-router-dom";

function NotFound() {

  return (
    <div className="container mt-5">

      <div className="text-center">

        <h1
          className="display-1 fw-bold text-danger"
        >
          404
        </h1>

        <h2 className="mb-3">
          Page Not Found
        </h2>

        <p className="lead mb-4">

          The page you are looking for does not exist.

        </p>

        <Link
          to="/"
          className="btn btn-primary"
        >
          Go To Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;