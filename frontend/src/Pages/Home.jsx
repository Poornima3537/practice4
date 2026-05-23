import { Link } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

function Home() {

  const { user } =
    useContext(AuthContext);

  return (
    <div className="container mt-5">

      <div className="row align-items-center">

        <div className="col-md-6">

          <h1 className="display-4 fw-bold mb-3">
            Online Pharmacy System
          </h1>

          <p className="lead mb-4">

            Order medicines online,
            upload prescriptions,
            and manage your orders easily.

          </p>

          <div className="d-flex flex-wrap gap-3">

            <Link
              to="/medicines"
              className="btn btn-primary btn-lg"
            >
              Browse Medicines
            </Link>

            {user ? (

              <Link
                to="/upload-prescription"
                className="btn btn-success btn-lg"
              >
                Upload Prescription
              </Link>

            ) : (

              <>
                <Link
                  to="/login"
                  className="btn btn-outline-dark btn-lg"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="btn btn-outline-success btn-lg"
                >
                  Register
                </Link>
              </>
            )}

          </div>

        </div>

        <div className="col-md-6 text-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
            alt="Pharmacy"
            className="img-fluid"
            style={{
              maxHeight: "400px",
            }}
          />

        </div>

      </div>

      <div className="row mt-5">

        <div className="col-md-4">

          <div className="card shadow h-100 border-0">

            <div className="card-body text-center">

              <h4 className="mb-3">
                Medicines
              </h4>

              <p>
                Browse medicines with price and stock details.
              </p>

            </div>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow h-100 border-0">

            <div className="card-body text-center">

              <h4 className="mb-3">
                Prescription Upload
              </h4>

              <p>
                Upload prescriptions securely for medicine approval.
              </p>

            </div>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow h-100 border-0">

            <div className="card-body text-center">

              <h4 className="mb-3">
                Fast Orders
              </h4>

              <p>
                Add medicines to cart and place orders quickly.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;