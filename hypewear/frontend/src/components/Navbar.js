import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartCount, user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    updateWishlistCount();
    // Listen for localStorage changes
    window.addEventListener('storage', updateWishlistCount);
    return () => window.removeEventListener('storage', updateWishlistCount);
  }, []);

  const updateWishlistCount = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlistCount(wishlist.length);
  };

  const categories = [
    {
      name: 'Men',
      styles: [
        { name: 'Indian', subcategories: ['Kurtas', 'Ethnic Wear', 'Jackets'] },
        { name: 'Western', subcategories: ['Shirts', 'T-Shirts', 'Jeans', 'Pants', 'Jackets'] }
      ]
    },
    {
      name: 'Women',
      styles: [
        { name: 'Indian', subcategories: ['Sarees', 'Kurtas', 'Ethnic Wear', 'Pants'] },
        { name: 'Western', subcategories: ['Dresses', 'Shirts', 'Jeans', 'Pants', 'Jackets'] }
      ]
    },
    {
      name: 'Kids',
      styles: [
        { name: 'Indian', subcategories: ['Kurtas', 'Ethnic Wear', 'Jackets'] },
        { name: 'Western', subcategories: ['T-Shirts', 'Dresses', 'Jeans', 'Pants', 'Jackets'] }
      ]
    }
  ];

  const handleCategoryClick = (category, style, subCategory) => {
    navigate(`/products?category=${category}&style=${style}&subCategory=${subCategory}`);
    setIsCategoryOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">HypeWear</span>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <div 
            className="navbar-item dropdown"
            onMouseEnter={() => setIsCategoryOpen(true)}
            onMouseLeave={() => setIsCategoryOpen(false)}
          >
            <span className="navbar-link">Categories</span>
            {isCategoryOpen && (
              <div className="dropdown-content mega-menu">
                {categories.map((category) => (
                  <div key={category.name} className="mega-menu-column">
                    <h3>{category.name}</h3>
                    {category.styles.map((style) => (
                      <div key={style.name} className="style-group">
                        <h4>{style.name}</h4>
                        <ul>
                          {style.subcategories.map((sub) => (
                            <li key={sub}>
                              <span
                                onClick={() => handleCategoryClick(category.name, style.name, sub)}
                                className="dropdown-link"
                              >
                                {sub}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/products" className="navbar-link">All Products</Link>
          
          {user ? (
            <>
              <Link to="/profile" className="navbar-link">Profile</Link>
              <span onClick={onLogout} className="navbar-link logout-link">Logout</span>
            </>
          ) : (
            <>
              <Link to="/login" className="navbar-link">Login</Link>
              <Link to="/register" className="navbar-link">Register</Link>
            </>
          )}
        </div>

        <div className="navbar-icons">
          <Link to="/wishlist" className="wishlist-icon" title="Wishlist">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            {wishlistCount > 0 && <span className="wishlist-badge">{wishlistCount}</span>}
          </Link>
          
          <Link to="/cart" className="cart-icon" title="Cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 2L7.17 4H3v2h18V4h-4.17L15 2H9zm-2 4h10v14H7V6z"/>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;