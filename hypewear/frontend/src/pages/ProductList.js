import API_URL from "../config/apiConfig";
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    style: searchParams.get('style') || '',
    subCategory: searchParams.get('subCategory') || '',
    sort: ''
  });

  const categories = ['Men', 'Women', 'Kids'];
  const styles = ['Indian', 'Western'];
  const subCategories = {
    Indian: ['Kurtas', 'Ethnic Wear', 'Jackets', 'Sarees', 'Pants'],
    Western: ['Shirts', 'T-Shirts', 'Jeans', 'Pants', 'Jackets', 'Dresses']
  };

  useEffect(() => {
    fetchProducts();
  }, [filters, searchParams]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.category) params.append('category', filters.category);
      if (filters.style) params.append('style', filters.style);
      if (filters.subCategory) params.append('subCategory', filters.subCategory);
      if (filters.sort) params.append('sort', filters.sort);

      const response = await axios.get(`http://localhost:5000/api/products?${params}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    if (filterType === 'style' && value !== filters.style) {
      newFilters.subCategory = '';
    }
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      style: '',
      subCategory: '',
      sort: ''
    });
    setSearchParams({});
  };

  return (
    <div className="product-list-page">
      <div className="container">
        <h1 className="page-title">Our Products</h1>

        <div className="product-layout">
          {/* Filters Sidebar */}
          <aside className="filters-sidebar">
            <div className="filter-header">
              <h2>Filters</h2>
              <button onClick={clearFilters} className="clear-filters">Clear All</button>
            </div>

            <div className="filter-group">
              <h3>Category</h3>
              {categories.map(cat => (
                <label key={cat} className="filter-option">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={filters.category === cat}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>

            <div className="filter-group">
              <h3>Style</h3>
              {styles.map(style => (
                <label key={style} className="filter-option">
                  <input
                    type="radio"
                    name="style"
                    value={style}
                    checked={filters.style === style}
                    onChange={(e) => handleFilterChange('style', e.target.value)}
                  />
                  <span>{style}</span>
                </label>
              ))}
            </div>

            {filters.style && (
              <div className="filter-group">
                <h3>Sub Category</h3>
                {subCategories[filters.style].map(sub => (
                  <label key={sub} className="filter-option">
                    <input
                      type="radio"
                      name="subCategory"
                      value={sub}
                      checked={filters.subCategory === sub}
                      onChange={(e) => handleFilterChange('subCategory', e.target.value)}
                    />
                    <span>{sub}</span>
                  </label>
                ))}
              </div>
            )}

            <div className="filter-group">
              <h3>Sort By</h3>
              <select
                value={filters.sort}
                onChange={(e) => handleFilterChange('sort', e.target.value)}
                className="sort-select"
              >
                <option value="">Select</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="products-container">
            {loading ? (
              <div className="loading">Loading products...</div>
            ) : products.length === 0 ? (
              <div className="no-products">No products found</div>
            ) : (
              <div className="products-grid">
                {products.map(product => (
                  <Link 
                    key={product._id} 
                    to={`/products/${product._id}`}
                    className="product-card"
                  >
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                      {product.stock === 0 && (
                        <div className="out-of-stock-badge">Out of Stock</div>
                      )}
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <div className="product-category">
                        {product.category} • {product.style} • {product.subCategory}
                      </div>
                      <div className="product-rating">
                        <span className="stars">
                          {'★'.repeat(Math.round(product.rating))}
                          {'☆'.repeat(5 - Math.round(product.rating))}
                        </span>
                        <span className="rating-text">
                          {product.rating} ({product.numReviews})
                        </span>
                      </div>
                      <div className="product-price">₹{product.price.toLocaleString('en-IN')}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;