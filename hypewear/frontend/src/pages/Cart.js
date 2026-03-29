import API_URL from "../config/apiConfig";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-content">
          <h2>Your Cart is Empty</h2>
          <p>Add some products to get started!</p>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.18; // 18% GST
  const shipping = subtotal > 999 ? 0 : 50;
  const total = subtotal + tax + shipping;

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Shopping Cart</h1>

        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="item-meta">
                    Size: {item.size} | Color: {item.color}
                  </p>
                  <p className="item-price">₹{item.price.toLocaleString('en-IN')}</p>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item._id, item.size, item.color, item.quantity - 1)}
                      className="qty-btn"
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item._id, item.size, item.color, item.quantity + 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item._id, item.size, item.color)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>

                <div className="cart-item-total">
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items):</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>

            <div className="summary-row">
              <span>Tax (GST 18%):</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Shipping:</span>
              <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
            </div>

            {subtotal < 999 && (
              <p className="free-shipping-msg">
                Add ₹{(999 - subtotal).toFixed(2)} more for FREE shipping!
              </p>
            )}

            <div className="summary-row total">
              <span>Total:</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>

            <button 
              className="checkout-btn"
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
            </button>

            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;