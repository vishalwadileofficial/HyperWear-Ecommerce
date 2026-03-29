import API_URL from "../config/apiConfig";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Profile.css';

const Profile = ({ user, onUpdateUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    pincode: ''
  });
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    setFormData({
      name: user.name || '',
      email: user.email || '',
      phone: user.phone || '',
      street: user.address?.street || '',
      city: user.address?.city || '',
      state: user.address?.state || '',
      pincode: user.address?.pincode || ''
    });

    fetchOrders();
  }, [user, navigate]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/orders/user/${user._id}`);
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode
        }
      };

      const response = await axios.put(`${API_URL}/api/users/${user._id}`, userData);
      onUpdateUser(response.data);
      setMessage('Profile updated successfully!');
    } catch (error) {
      setMessage('Error updating profile');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelOrder = async (orderId) => {
    if (!window.confirm('Are you sure you want to cancel this order?')) {
      return;
    }

    try {
      await axios.put(`${API_URL}/api/orders/${orderId}/status`, {
        status: 'Cancelled'
      });
      setMessage('Order cancelled successfully!');
      fetchOrders(); // Refresh orders
    } catch (error) {
      setMessage('Error cancelling order. Please contact support.');
    }
  };

  if (!user) return null;

  return (
    <div className="profile-page">
      <div className="container">
        <h1>My Profile</h1>

        <div className="profile-layout">
          <div className="profile-form-section">
            <h2>Personal Information</h2>
            
            {message && (
              <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="profile-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>

              <h3>Address</h3>

              <div className="form-group">
                <label>Street</label>
                <input type="text" name="street" value={formData.street} onChange={handleChange} required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input type="text" name="state" value={formData.state} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group">
                <label>Pincode</label>
                <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
              </div>

              <button type="submit" className="update-btn" disabled={loading}>
                {loading ? 'Updating...' : 'Update Profile'}
              </button>
            </form>
          </div>

          <div className="orders-section">
            <h2>My Orders</h2>
            {orders.length === 0 ? (
              <p>No orders yet</p>
            ) : (
              <div className="orders-list">
                {orders.map((order) => (
                  <div key={order._id} className="order-card">
                    <div className="order-header">
                      <span className="order-id">Order #{order._id.slice(-8)}</span>
                      <span className={`order-status ${order.orderStatus.toLowerCase()}`}>
                        {order.orderStatus}
                      </span>
                    </div>
                    <p className="order-date">{new Date(order.createdAt).toLocaleDateString()}</p>
                    <p className="order-total">Total: ₹{order.totalPrice.toLocaleString('en-IN')}</p>
                    <p className="order-items">{order.orderItems.length} items</p>
                    
                    {order.orderStatus === 'Pending' && (
                      <button 
                        className="cancel-order-btn"
                        onClick={() => handleCancelOrder(order._id)}
                      >
                        Cancel Order
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;