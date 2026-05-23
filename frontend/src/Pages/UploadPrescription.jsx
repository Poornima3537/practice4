import { useState } from "react";

import prescriptionService from "../services/prescriptionService";

import { toast } from "react-toastify";

function UploadPrescription() {

  const [patientName, setPatientName] =
    useState("");

  const [file, setFile] =
    useState(null);

  const [uploading, setUploading] =
    useState(false);

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!file) {

      toast.error(
        "Please Select File"
      );

      return;
    }

    const formData = new FormData();

    formData.append(
      "patientName",
      patientName
    );

    formData.append(
      "file",
      file
    );

    try {

      setUploading(true);

      await prescriptionService.uploadPrescription(
        formData
      );

      toast.success(
        "Prescription Uploaded Successfully"
      );

      setPatientName("");
      setFile(null);

    } catch (error) {

      toast.error(
        "Failed To Upload Prescription"
      );

    } finally {

      setUploading(false);
    }
  };

  return (
    <div className="container mt-4">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow">

            <div className="card-body">

              <h2 className="text-center mb-4">
                Upload Prescription
              </h2>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">

                  <label className="form-label">
                    Patient Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={patientName}
                    onChange={(event) =>
                      setPatientName(
                        event.target.value
                      )
                    }
                    required
                  />

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Upload File
                  </label>

                  <input
                    type="file"
                    className="form-control"
                    onChange={(event) =>
                      setFile(
                        event.target.files[0]
                      )
                    }
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100"
                  disabled={uploading}
                >

                  {uploading
                    ? "Uploading..."
                    : "Upload Prescription"}

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default UploadPrescription;