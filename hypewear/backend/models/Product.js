const mongoose = require('mongoose');

/* =========================
   Review Schema
========================= */
const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    name: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    comment: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

/* =========================
   Product Schema
========================= */
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    image: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true,
      enum: ['Men', 'Women', 'Kids']
    },
    style: {
      type: String,
      required: true,
      enum: ['Indian', 'Western']
    },
    subCategory: {
      type: String,
      required: true,
      enum: [
        'Shirts',
        'Pants',
        'Jackets',
        'Kurtas',
        'Sarees',
        'Dresses',
        'T-Shirts',
        'Jeans',
        'Ethnic Wear'
      ]
    },

    /* ✅ FIXED SIZES FIELD */
    sizes: [
      {
        type: String,
        required: true
      }
    ],

    colors: [
      {
        type: String,
        required: true
      }
    ],
    stock: {
      type: Number,
      required: true,
      default: 0
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      default: 0
    },
    numReviews: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', productSchema);
