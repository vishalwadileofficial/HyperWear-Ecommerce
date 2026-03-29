import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import ShippingInfo from './pages/ShippingInfo';
import Returns from './pages/Returns';
import FAQ from './pages/FAQ';
import SizeGuide from './pages/SizeGuide';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Careers from './pages/Careers';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    // Load user from localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1, size, color) => {
    const existingItem = cart.find(
      item => item._id === product._id && item.size === size && item.color === color
    );

    if (existingItem) {
      setCart(cart.map(item =>
        item._id === product._id && item.size === size && item.color === color
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity, size, color }]);
    }
  };

  const removeFromCart = (productId, size, color) => {
    setCart(cart.filter(item => 
      !(item._id === productId && item.size === size && item.color === color)
    ));
  };

  const updateQuantity = (productId, size, color, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
    } else {
      setCart(cart.map(item =>
        item._id === productId && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar 
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
          user={user}
          onLogout={handleLogout}
        />
        <div className="main-content">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={
                <ProductDetail 
                  addToCart={addToCart} 
                  user={user}
                />
              } />
              <Route path="/cart" element={
                <Cart 
                  cart={cart}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              } />
              <Route path="/checkout" element={
                <Checkout 
                  cart={cart}
                  user={user}
                  clearCart={clearCart}
                />
              } />
              <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register onRegister={handleLogin} />} />
              <Route path="/profile" element={
                <Profile user={user} onUpdateUser={handleLogin} />
              } />
              <Route path="/wishlist" element={
                <Wishlist addToCart={addToCart} />
              } />
              
              {/* Footer Pages */}
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/shipping" element={<ShippingInfo />} />
              <Route path="/returns" element={<Returns />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/size-guide" element={<SizeGuide />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="/careers" element={<Careers />} />
            </Routes>
          </PageTransition>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;