import axiosInstance from "../api/axiosConfig";

const placeOrder = (orderData) => {

  return axiosInstance.post(
    "/orders/place",
    orderData
  );
};

const getAllOrders = () => {

  return axiosInstance.get("/orders");
};

const orderService = {
  placeOrder,
  getAllOrders,
};

export default orderService;