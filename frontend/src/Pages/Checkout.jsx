import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import cartService from "../services/cartService";
import orderService from "../services/orderService";

import Loader from "../components/Loader";

import { toast } from "react-toastify";

function Checkout() {

  const navigate = useNavigate();

  const [cartItems, setCartItems] =
    useState([]);

  const [customerName, setCustomerName] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [placingOrder, setPlacingOrder] =
    useState(false);

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
        "Failed To Fetch Cart"
      );

    } finally {

      setLoading(false);
    }
  };

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.totalPrice,
    0
  );

  const handlePlaceOrder = async () => {

    if (!customerName) {

      toast.error(
        "Enter Customer Name"
      );

      return;
    }

    const orderData = {
      customerName,
      amount: totalAmount,
    };

    try {

      setPlacingOrder(true);

      await orderService.placeOrder(
        orderData
      );

      toast.success(
        "Order Placed Successfully"
      );

      navigate("/orders");

    } catch (error) {

      toast.error(
        "Failed To Place Order"
      );

    } finally {

      setPlacingOrder(false);
    }
  };

  if (loading) {

    return <Loader />;
  }

  return (
    <div className="container mt-4">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow">

            <div className="card-body">

              <h2 className="text-center mb-4">
                Checkout
              </h2>

              <div className="mb-3">

                <label className="form-label">
                  Customer Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={customerName}
                  onChange={(event) =>
                    setCustomerName(
                      event.target.value
                    )
                  }
                />

              </div>

              <h4 className="mb-4">
                Total Amount: ₹{totalAmount}
              </h4>

              <button
                className="btn btn-success w-100"
                onClick={handlePlaceOrder}
                disabled={placingOrder}
              >

                {placingOrder
                  ? "Placing Order..."
                  : "Place Order"}

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;