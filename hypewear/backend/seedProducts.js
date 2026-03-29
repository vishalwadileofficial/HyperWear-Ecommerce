const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

const products = [
  // ================= MEN – INDIAN =================
  {
    name: "Classic Cotton Kurta",
    description: "Traditional cotton kurta perfect for festivals and casual wear",
    price: 1299,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
    category: "Men",
    style: "Indian",
    subCategory: "Kurtas",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Cream", "Blue"],
    stock: 50,
    rating: 4.5,
    numReviews: 23
  },
  {
    name: "Silk Blend Sherwani",
    description: "Elegant sherwani with intricate embroidery for weddings",
    price: 4999,
    image: "https://images.unsplash.com/photo-1610652492348-f8ad98fe0a87?auto=format&fit=crop&w=800&q=80",
    category: "Men",
    style: "Indian",
    subCategory: "Ethnic Wear",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Gold", "Maroon", "Navy"],
    stock: 30,
    rating: 4.8,
    numReviews: 45
  },
  {
    name: "Printed Nehru Jacket",
    description: "Modern printed Nehru jacket for festive occasions",
    price: 2499,
    image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&w=800&q=80",
    category: "Men",
    style: "Indian",
    subCategory: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey", "Beige"],
    stock: 40,
    rating: 4.3,
    numReviews: 18
  },

  // ================= MEN – WESTERN =================
  {
    name: "Cotton Casual Shirt",
    description: "Breathable cotton shirt for everyday comfort",
    price: 899,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    category: "Men",
    style: "Western",
    subCategory: "Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "White", "Grey"],
    stock: 100,
    rating: 4.2,
    numReviews: 67
  },
  {
    name: "Slim Fit Denim Jeans",
    description: "Slim fit blue denim jeans",
    price: 1499,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
    category: "Men",
    style: "Western",
    subCategory: "Jeans",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    stock: 80,
    rating: 4.6,
    numReviews: 89
  },
  {
    name: "Leather Bomber Jacket",
    description: "Premium leather bomber jacket",
    price: 5999,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    category: "Men",
    style: "Western",
    subCategory: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    stock: 35,
    rating: 4.7,
    numReviews: 41
  },

  // ================= WOMEN – INDIAN =================
  {
    name: "Banarasi Silk Saree",
    description: "Traditional Banarasi silk saree with zari work",
    price: 8999,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    category: "Women",
    style: "Indian",
    subCategory: "Sarees",
    sizes: ["Free Size"],
    colors: ["Red", "Green"],
    stock: 25,
    rating: 4.9,
    numReviews: 78
  },
  {
    name: "Designer Lehenga Choli",
    description: "Wedding lehenga with rich embroidery",
    price: 12999,
    image: "https://images.unsplash.com/photo-1583391733981-5abe87d51eab?auto=format&fit=crop&w=800&q=80",
    category: "Women",
    style: "Indian",
    subCategory: "Ethnic Wear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Gold"],
    stock: 15,
    rating: 5.0,
    numReviews: 34
  },

  // ================= WOMEN – WESTERN =================
  {
    name: "Floral Summer Dress",
    description: "Light floral summer dress",
    price: 1299,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    category: "Women",
    style: "Western",
    subCategory: "Dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pink", "White"],
    stock: 60,
    rating: 4.5,
    numReviews: 73
  },

  // ================= KIDS =================
  {
    name: "Kids Cotton Kurta Pajama",
    description: "Traditional kurta pajama for kids",
    price: 799,
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    category: "Kids",
    style: "Indian",
    subCategory: "Kurtas",
    sizes: ["2-3Y", "4-5Y", "6-7Y"],
    colors: ["White", "Blue"],
    stock: 45,
    rating: 4.5,
    numReviews: 29
  }
];

// ===== SEED FUNCTION =====
const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected");

    await Product.deleteMany({});
    console.log("🗑 Products cleared");

    await Product.insertMany(products);
    console.log("🎉 Products seeded successfully");

    process.exit();
  } catch (err) {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  }
};

seedDatabase();
