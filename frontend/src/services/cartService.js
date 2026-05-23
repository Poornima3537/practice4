import axiosInstance from "../api/axiosConfig";

const addToCart = (cartData) => {

  return axiosInstance.post(
    "/cart/add",
    cartData
  );
};

const getCartItems = () => {

  return axiosInstance.get("/cart");
};

const removeCartItem = (id) => {

  return axiosInstance.delete(
    `/cart/remove/${id}`
  );
};

const cartService = {
  addToCart,
  getCartItems,
  removeCartItem,
};

export default cartService;