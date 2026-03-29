import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_URL from "../config/apiConfig";
import './Checkout.css';

const Checkout = ({ cart, user, clearCart }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [guestInfo, setGuestInfo] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });
  const [shippingInfo, setShippingInfo] = useState({
    street: user?.address?.street || '',
    city: user?.address?.city || '',
    state: user?.address?.state || '',
    pincode: user?.address?.pincode || '',
    phone: user?.phone || ''
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });
  const [upiId, setUpiId] = useState('');
  const [loading, setLoading] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="empty-checkout">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate('/products')}>Continue Shopping</button>
      </div>
    );
  }

  const itemsPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxPrice = itemsPrice * 0.18;
  const shippingPrice = itemsPrice > 999 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const handleGuestInfoChange = (e) => {
    setGuestInfo({
      ...guestInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleShippingChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    
    // Validate guest info if not logged in
    if (!user) {
      if (!guestInfo.name || !guestInfo.email || !guestInfo.phone) {
        alert('Please fill all contact details');
        return;
      }
    }
    
    if (!shippingInfo.street || !shippingInfo.city || !shippingInfo.state || 
        !shippingInfo.pincode || !shippingInfo.phone) {
      alert('Please fill all shipping details');
      return;
    }
    setStep(2);
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    if (paymentMethod === 'Card') {
      if (!cardDetails.cardNumber || !cardDetails.cardName || 
          !cardDetails.expiryDate || !cardDetails.cvv) {
        alert('Please fill all card details');
        return;
      }
    }

    if (paymentMethod === 'UPI' && !upiId) {
      alert('Please enter UPI ID');
      return;
    }

    setLoading(true);

    try {
      const orderData = {
        user: user?._id || null, // null for guest checkout
        guestInfo: user ? null : guestInfo, // guest details if not logged in
        orderItems: cart.map(item => ({
          product: item._id,
          name: item.name,
          quantity: item.quantity,
          image: item.image,
          price: item.price,
          size: item.size,
          color: item.color
        })),
        shippingAddress: shippingInfo,
        paymentMethod: paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
      };

      const response = await axios.post(`${API_URL}/api/orders`, orderData);
      clearCart();
      navigate(`/order-confirmation/${response.data._id}`);
    } catch (error) {
      alert('Error placing order. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Checkout</h1>

        {!user && (
          <div className="guest-notice">
            <p>Checking out as guest. <a href="/login">Login</a> for faster checkout next time!</p>
          </div>
        )}

        <div className="checkout-layout">
          <div className="checkout-steps">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>
              <span className="step-number">1</span>
              <span className="step-title">Shipping</span>
            </div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>
              <span className="step-number">2</span>
              <span className="step-title">Payment</span>
            </div>
          </div>

          <div className="checkout-content">
            {step === 1 && (
              <form className="shipping-form" onSubmit={handleShippingSubmit}>
                {!user && (
                  <>
                    <h2>Contact Information</h2>
                    
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={guestInfo.name}
                        onChange={handleGuestInfoChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={guestInfo.email}
                          onChange={handleGuestInfoChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={guestInfo.phone}
                          onChange={handleGuestInfoChange}
                          required
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                  </>
                )}

                <h2>Shipping Address</h2>
                
                <div className="form-group">
                  <label>Street Address</label>
                  <input
                    type="text"
                    name="street"
                    value={shippingInfo.street}
                    onChange={handleShippingChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <input
                      type="text"
                      name="state"
                      value={shippingInfo.state}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      value={shippingInfo.pincode}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="continue-btn">Continue to Payment</button>
              </form>
            )}

            {step === 2 && (
              <form className="payment-form" onSubmit={handlePaymentSubmit}>
                <h2>Payment Method</h2>

                <div className="payment-methods">
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="payment"
                      value="Card"
                      checked={paymentMethod === 'Card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>Credit/Debit Card</span>
                  </label>

                  {paymentMethod === 'Card' && (
                    <div className="card-form">
                      <div className="form-group">
                        <label>Card Number</label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          value={cardDetails.cardNumber}
                          onChange={(e) => setCardDetails({...cardDetails, cardNumber: e.target.value})}
                          maxLength="16"
                        />
                      </div>
                      <div className="form-group">
                        <label>Cardholder Name</label>
                        <input
                          type="text"
                          placeholder="Name on Card"
                          value={cardDetails.cardName}
                          onChange={(e) => setCardDetails({...cardDetails, cardName: e.target.value})}
                        />
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Expiry Date</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            value={cardDetails.expiryDate}
                            onChange={(e) => setCardDetails({...cardDetails, expiryDate: e.target.value})}
                          />
                        </div>
                        <div className="form-group">
                          <label>CVV</label>
                          <input
                            type="text"
                            placeholder="123"
                            value={cardDetails.cvv}
                            onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                            maxLength="3"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <label className="payment-option">
                    <input
                      type="radio"
                      name="payment"
                      value="UPI"
                      checked={paymentMethod === 'UPI'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>UPI</span>
                  </label>

                  {paymentMethod === 'UPI' && (
                    <div className="upi-form">
                      <div className="form-group">
                        <label>UPI ID</label>
                        <input
                          type="text"
                          placeholder="yourname@upi"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  <label className="payment-option">
                    <input
                      type="radio"
                      name="payment"
                      value="Cash on Delivery"
                      checked={paymentMethod === 'Cash on Delivery'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>Cash on Delivery</span>
                  </label>
                </div>

                <div className="checkout-actions">
                  <button 
                    type="button" 
                    className="back-btn"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>
                  <button 
                    type="submit" 
                    className="place-order-btn"
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Place Order'}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-items">
              {cart.map((item, index) => (
                <div key={index} className="summary-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>Size: {item.size} | Color: {item.color}</p>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <div className="item-price">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>₹{itemsPrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="summary-row">
                <span>Tax (18%):</span>
                <span>₹{taxPrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>{shippingPrice === 0 ? 'FREE' : `₹${shippingPrice}`}</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;