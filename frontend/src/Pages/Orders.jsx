import { useEffect, useState } from "react";

import orderService from "../services/orderService";

import Loader from "../components/Loader";

import { toast } from "react-toastify";

function Orders() {

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders = async () => {

    try {

      const response =
        await orderService.getAllOrders();

      setOrders(response.data);

    } catch (error) {

      toast.error(
        "Failed To Fetch Orders"
      );

    } finally {

      setLoading(false);
    }
  };

  if (loading) {

    return <Loader />;
  }

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Order History
      </h2>

      {orders.length === 0 ? (

        <h5 className="text-center">
          No Orders Found
        </h5>

      ) : (

        <div className="table-responsive">

          <table className="table table-bordered">

            <thead className="table-dark">

              <tr>

                <th>Customer Name</th>

                <th>Amount</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {orders.map((order) => (

                <tr key={order.id}>

                  <td>
                    {order.customerName}
                  </td>

                  <td>
                    ₹{order.amount}
                  </td>

                  <td>
                    {order.status}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}

export default Orders;