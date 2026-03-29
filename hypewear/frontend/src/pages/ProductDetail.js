import API_URL from "../config/apiConfig";
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

const ProductDetail = ({ addToCart, user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [review, setReview] = useState({ rating: 5, comment: '' });
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetchProduct();
    loadWishlist();
  }, [id]);

  const loadWishlist = () => {
    const saved = localStorage.getItem('wishlist');
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  };

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/products/${id}`);
      setProduct(response.data);
      if (response.data.sizes.length > 0) setSelectedSize(response.data.sizes[0]);
      if (response.data.colors.length > 0) setSelectedColor(response.data.colors[0]);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    addToCart(product, quantity, selectedSize, selectedColor);
    alert('Added to cart!');
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    // Add to cart first
    addToCart(product, quantity, selectedSize, selectedColor);
    // Then navigate to checkout
    navigate('/checkout');
  };

  const toggleWishlist = () => {
    let updatedWishlist;
    const isInWishlist = wishlist.some(item => item._id === product._id);
    
    if (isInWishlist) {
      updatedWishlist = wishlist.filter(item => item._id !== product._id);
      alert('Removed from wishlist');
    } else {
      updatedWishlist = [...wishlist, product];
      alert('Added to wishlist!');
    }
    
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const isInWishlist = wishlist.some(item => item._id === product?._id);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please login to submit a review');
      navigate('/login');
      return;
    }

    try {
      await axios.post(`${API_URL}/api/products/${id}/reviews`, {
        rating: review.rating,
        comment: review.comment,
        userId: user._id,
        userName: user.name
      });
      setReview({ rating: 5, comment: '' });
      setShowReviewForm(false);
      fetchProduct();
      alert('Review submitted successfully!');
    } catch (error) {
      alert(error.response?.data?.message || 'Error submitting review');
    }
  };

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: url
      });
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!product) return <div className="error">Product not found</div>;

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-detail">
          <div className="product-images">
            <img src={product.image} alt={product.name} className="main-image" />
          </div>

          <div className="product-details">
            <h1 className="product-title">{product.name}</h1>
            
            <div className="product-meta">
              <span className="category-badge">{product.category}</span>
              <span className="style-badge">{product.style}</span>
              <span className="subcategory-badge">{product.subCategory}</span>
            </div>

            <div className="product-rating">
              <span className="stars">
                {'★'.repeat(Math.round(product.rating))}
                {'☆'.repeat(5 - Math.round(product.rating))}
              </span>
              <span className="rating-text">
                {product.rating} ({product.numReviews} reviews)
              </span>
            </div>

            <div className="product-price">₹{product.price.toLocaleString('en-IN')}</div>

            <p className="product-description">{product.description}</p>

            <div className="product-options">
              <div className="option-group">
                <label>Size:</label>
                <div className="size-options">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="option-group">
                <label>Color:</label>
                <div className="color-options">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="option-group">
                <label>Quantity:</label>
                <div className="quantity-selector">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                  />
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
            </div>

            <div className="product-actions">
              <button 
                className="add-to-cart-btn"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
              
              <button 
                className="buy-now-btn"
                onClick={handleBuyNow}
                disabled={product.stock === 0}
              >
                Buy Now
              </button>
              
              <button 
                className={`wishlist-btn ${isInWishlist ? 'active' : ''}`}
                onClick={toggleWishlist}
              >
                {isInWishlist ? '❤️' : '🤍'}
              </button>
              
              <button className="share-btn" onClick={handleShare}>
                Share
              </button>
            </div>

            <div className="stock-info">
              {product.stock > 0 ? (
                <span className="in-stock">In Stock ({product.stock} available)</span>
              ) : (
                <span className="out-of-stock">Out of Stock</span>
              )}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="reviews-section">
          <div className="reviews-header">
            <h2>Customer Reviews</h2>
            <button 
              className="write-review-btn"
              onClick={() => setShowReviewForm(!showReviewForm)}
            >
              Write a Review
            </button>
          </div>

          {showReviewForm && (
            <form className="review-form" onSubmit={handleSubmitReview}>
              <div className="form-group">
                <label>Rating:</label>
                <select 
                  value={review.rating}
                  onChange={(e) => setReview({...review, rating: parseInt(e.target.value)})}
                >
                  {[5, 4, 3, 2, 1].map(num => (
                    <option key={num} value={num}>{num} Stars</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Comment:</label>
                <textarea
                  value={review.comment}
                  onChange={(e) => setReview({...review, comment: e.target.value})}
                  required
                  rows="4"
                  placeholder="Share your experience..."
                />
              </div>
              <button type="submit" className="submit-review-btn">Submit Review</button>
            </form>
          )}

          <div className="reviews-list">
            {product.reviews.length === 0 ? (
              <p className="no-reviews">No reviews yet. Be the first to review!</p>
            ) : (
              product.reviews.map((review, index) => (
                <div key={index} className="review-item">
                  <div className="review-header">
                    <span className="review-author">{review.name}</span>
                    <span className="review-date">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="review-rating">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;