import axiosInstance from "../api/axiosConfig";

const getAllMedicines = () => {

  return axiosInstance.get("/medicines");
};

const getMedicineById = (id) => {

  return axiosInstance.get(`/medicines/${id}`);
};

const medicineService = {
  getAllMedicines,
  getMedicineById,
};

export default medicineService;