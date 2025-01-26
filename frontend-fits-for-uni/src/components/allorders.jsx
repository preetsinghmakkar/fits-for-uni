import React, { useEffect, useState } from "react";
import Axios from '../utils/Axios'; // Ensure Axios instance is correctly imported
import toast from "react-hot-toast";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await Axios.get("/api/order/all-orders"); // Correct API endpoint
        if (response.data.success) {
          setOrders(response.data.orders); // Set orders from response
        } else {
          toast.error("No orders found!");
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch orders!");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="4" className="px-4 py-2 text-center text-gray-500">No orders available.</td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr key={order.orderId} className="border-t">
                <td className="px-4 py-2">{order.orderId}</td>
                <td className="px-4 py-2">{order.username || "Unknown User"}</td> 
                <td className="px-4 py-2">{order.productName || "Unknown Product"}</td> 
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:underline">View</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrders;
