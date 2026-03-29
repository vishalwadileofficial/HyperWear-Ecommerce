import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Wishlist.css';

const Wishlist = ({ addToCart }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = () => {
    const saved = localStorage.getItem('wishlist');
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  };

  const removeFromWishlist = (productId) => {
    const updated = wishlist.filter(item => item._id !== productId);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  const handleAddToCart = (product) => {
    // Add with default size and color
    const defaultSize = product.sizes[0];
    const defaultColor = product.colors[0];
    addToCart(product, 1, defaultSize, defaultColor);
    alert('Added to cart!');
  };

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page">
        <div className="container">
          <h1>My Wishlist</h1>
          <div className="empty-wishlist">
            <div className="empty-wishlist-icon">🤍</div>
            <h2>Your Wishlist is Empty</h2>
            <p>Save your favorite items here for later!</p>
            <Link to="/products" className="continue-shopping-btn">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="container">
        <div className="wishlist-header">
          <h1>My Wishlist</h1>
          <span className="wishlist-count">{wishlist.length} items</span>
        </div>

        <div className="wishlist-grid">
          {wishlist.map((product) => (
            <div key={product._id} className="wishlist-card">
              <button 
                className="remove-wishlist"
                onClick={() => removeFromWishlist(product._id)}
                title="Remove from wishlist"
              >
                ✕
              </button>
              
              <Link to={`/products/${product._id}`} className="wishlist-image">
                <img src={product.image} alt={product.name} />
              </Link>

              <div className="wishlist-info">
                <Link to={`/products/${product._id}`}>
                  <h3 className="wishlist-name">{product.name}</h3>
                </Link>
                
                <div className="wishlist-category">
                  {product.category} • {product.style} • {product.subCategory}
                </div>

                <div className="wishlist-rating">
                  <span className="stars">
                    {'★'.repeat(Math.round(product.rating))}
                    {'☆'.repeat(5 - Math.round(product.rating))}
                  </span>
                  <span className="rating-text">
                    {product.rating} ({product.numReviews})
                  </span>
                </div>

                <div className="wishlist-price">
                  ₹{product.price.toLocaleString('en-IN')}
                </div>

                <div className="wishlist-actions">
                  <button 
                    className="add-to-cart-wishlist-btn"
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock === 0}
                  >
                    {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                  </button>
                  <Link 
                    to={`/products/${product._id}`}
                    className="view-details-btn"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;