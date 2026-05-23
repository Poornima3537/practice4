import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import cartService from "../services/cartService";

import Loader from "../components/Loader";
import CartItem from "../components/CartItem";

import { toast } from "react-toastify";

function Cart() {

  const navigate = useNavigate();

  const [cartItems, setCartItems] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchCartItems();

  }, []);

  const fetchCartItems = async () => {

    try {

      const response =
        await cartService.getCartItems();

      setCartItems(response.data);

    } catch (error) {

      toast.error(
        "Failed To Fetch Cart Items"
      );

    } finally {

      setLoading(false);
    }
  };

  const handleRemove = async (id) => {

    try {

      await cartService.removeCartItem(id);

      toast.success(
        "Item Removed"
      );

      fetchCartItems();

    } catch (error) {

      toast.error(
        "Failed To Remove Item"
      );
    }
  };

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.totalPrice,
    0
  );

  if (loading) {

    return <Loader />;
  }

  return (
    <div className="container mt-4">

      <h2 className="mb-4 text-center">
        Your Cart
      </h2>

      {cartItems.length === 0 ? (

        <h5 className="text-center">
          Cart Is Empty
        </h5>

      ) : (

        <>
          <div className="table-responsive">

            <table className="table table-bordered">

              <thead className="table-dark">

                <tr>

                  <th>Medicine</th>

                  <th>Quantity</th>

                  <th>Price</th>

                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {cartItems.map((item) => (

                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={handleRemove}
                  />

                ))}

              </tbody>

            </table>

          </div>

          <div className="d-flex justify-content-between align-items-center mt-4">

            <h4>
              Total: ₹{totalAmount}
            </h4>

            <button
              className="btn btn-success"
              onClick={() =>
                navigate("/checkout")
              }
            >
              Proceed To Checkout
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;