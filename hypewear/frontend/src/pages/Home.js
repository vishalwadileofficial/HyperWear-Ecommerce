import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const featuredCategories = [
    {
      title: "Men's Collection",
      image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800",
      link: "/products?category=Men"
    },
    {
      title: "Women's Collection",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800",
      link: "/products?category=Women"
    },
    {
      title: "Kids Collection",
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800",
      link: "/products?category=Kids"
    }
  ];

  const collections = [
    {
      name: "Indian Ethnic",
      description: "Traditional wear with modern comfort",
      image: "https://images.unsplash.com/photo-1610652492348-f8ad98fe0a87?w=600",
      link: "/products?style=Indian"
    },
    {
      name: "Western Casual",
      description: "Contemporary styles for everyday",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
      link: "/products?style=Western"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to HypeWear</h1>
          <p className="hero-subtitle">Discover the Latest Fashion Trends</p>
          <Link to="/products" className="cta-button">Shop Now</Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-section">
        <h2 className="section-title">Shop by Category</h2>
        <div className="category-grid">
          {featuredCategories.map((category, index) => (
            <div 
              key={index} 
              className="category-card"
              onClick={() => navigate(category.link)}
            >
              <img src={category.image} alt={category.title} />
              <div className="category-overlay">
                <h3>{category.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collections Section */}
      <section className="collections-section">
        <h2 className="section-title">Our Collections</h2>
        <div className="collections-grid">
          {collections.map((collection, index) => (
            <div 
              key={index} 
              className="collection-card"
              onClick={() => navigate(collection.link)}
            >
              <img src={collection.image} alt={collection.name} />
              <div className="collection-info">
                <h3>{collection.name}</h3>
                <p>{collection.description}</p>
                <button className="explore-btn">Explore</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">🚚</div>
            <h3>Free Shipping</h3>
            <p>On orders above ₹999</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💳</div>
            <h3>Secure Payment</h3>
            <p>Multiple payment options</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔄</div>
            <h3>Easy Returns</h3>
            <p>7-day return policy</p>
          </div>
          <div className="feature">
            <div className="feature-icon">⭐</div>
            <h3>Quality Products</h3>
            <p>100% authentic brands</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Subscribe to get special offers and latest updates</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;