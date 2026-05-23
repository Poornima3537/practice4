import axiosInstance from "../api/axiosConfig";

const login = (loginData) => {

  return axiosInstance.post(
    "/auth/login",
    loginData
  );
};

const register = (registerData) => {

  return axiosInstance.post(
    "/auth/register",
    registerData
  );
};

const authService = {
  login,
  register,
};

export default authService;