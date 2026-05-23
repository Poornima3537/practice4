import axiosInstance from "../api/axiosConfig";

const uploadPrescription = (formData) => {

  return axiosInstance.post(
    "/prescriptions/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

const prescriptionService = {
  uploadPrescription,
};

export default prescriptionService;