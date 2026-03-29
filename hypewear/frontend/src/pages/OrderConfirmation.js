import API_URL from "../config/apiConfig";
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrder();
  }, [orderId]);

  const fetchOrder = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/orders/${orderId}`);
      setOrder(response.data);
    } catch (error) {
      console.error('Error fetching order:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!order) return <div className="error">Order not found</div>;

  return (
    <div className="order-confirmation-page">
      <div className="container">
        <div className="success-icon">✓</div>
        <h1>Order Placed Successfully!</h1>
        <p className="order-id">Order ID: #{order._id}</p>

        <div className="confirmation-details">
          <div className="detail-section">
            <h2>Order Summary</h2>
            {order.orderItems.map((item, index) => (
              <div key={index} className="order-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity} | Size: {item.size} | Color: {item.color}</p>
                  <p className="item-price">₹{item.price.toLocaleString('en-IN')}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="detail-section">
            <h2>Shipping Address</h2>
            <p>{order.shippingAddress.street}</p>
            <p>{order.shippingAddress.city}, {order.shippingAddress.state}</p>
            <p>{order.shippingAddress.pincode}</p>
            <p>Phone: {order.shippingAddress.phone}</p>
          </div>

          <div className="detail-section">
            <h2>Payment Details</h2>
            <p>Method: {order.paymentMethod}</p>
            <p>Total Amount: ₹{order.totalPrice.toLocaleString('en-IN')}</p>
            <p>Status: {order.isPaid ? 'Paid' : 'Pending'}</p>
          </div>
        </div>

        <div className="confirmation-actions">
          <Link to="/products" className="continue-btn">Continue Shopping</Link>
          <Link to="/profile" className="view-orders-btn">View All Orders</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;