import React, { useState } from 'react';
import './InfoPages.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Orders & Payment",
      questions: [
        {
          q: "How do I place an order?",
          a: "Browse our products, select your desired items, choose size and color, add to cart, and proceed to checkout. Fill in your shipping details and select your payment method to complete the order."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept Credit/Debit Cards, UPI payments, and Cash on Delivery (COD). All online payments are secure and encrypted."
        },
        {
          q: "Is it safe to use my credit/debit card?",
          a: "Absolutely! We use industry-standard SSL encryption to protect your payment information. Your card details are never stored on our servers."
        },
        {
          q: "Can I modify or cancel my order?",
          a: "Yes, you can cancel your order before it's shipped from Profile → My Orders. Once shipped, you'll need to follow our return process."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          q: "How long will my order take to arrive?",
          a: "Metro cities: 3-5 business days. Other cities: 5-7 business days. Remote areas: 7-10 business days. Plus 1-2 days for order processing."
        },
        {
          q: "Do you offer free shipping?",
          a: "Yes! We offer FREE shipping on all orders above ₹999. Orders below ₹999 have a flat shipping fee of ₹50."
        },
        {
          q: "How can I track my order?",
          a: "Once shipped, you'll receive a tracking link via email and SMS. You can also track from Profile → My Orders section."
        },
        {
          q: "Do you deliver to my area?",
          a: "We deliver across India. However, some remote locations may take longer. Enter your pincode at checkout to check serviceability."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 7-day return policy from the date of delivery. Items must be unused, with original tags attached, in original packaging."
        },
        {
          q: "How do I return an item?",
          a: "Go to Profile → My Orders → Select item → Click 'Return'. Choose your reason, and we'll arrange a free pickup from your address."
        },
        {
          q: "Can I exchange my order?",
          a: "Yes! You can exchange for a different size or color within 7 days. Subject to availability. Exchange is free of cost."
        },
        {
          q: "When will I get my refund?",
          a: "Refunds are processed within 5-7 business days after we receive and verify the returned item. It may take additional time for your bank to process."
        },
        {
          q: "Which items cannot be returned?",
          a: "Innerwear, accessories, items without original tags, worn/washed items, and final sale items cannot be returned."
        }
      ]
    },
    {
      category: "Products & Sizing",
      questions: [
        {
          q: "How do I choose the right size?",
          a: "Check our Size Guide available on each product page. Measurements are provided in inches and centimeters. If unsure, size up for comfortable fit."
        },
        {
          q: "Are your products genuine?",
          a: "Yes, all products sold on HypeWear are 100% authentic and quality-checked before dispatch."
        },
        {
          q: "Do colors look the same as in pictures?",
          a: "We try our best to display accurate colors. However, slight variations may occur due to lighting and screen settings."
        },
        {
          q: "Are products pre-washed?",
          a: "No, all garments are brand new and unwashed. We recommend washing before first use."
        }
      ]
    },
    {
      category: "Account & Profile",
      questions: [
        {
          q: "Do I need to create an account?",
          a: "While you can browse as a guest, creating an account helps you track orders, save addresses, and checkout faster."
        },
        {
          q: "I forgot my password. What do I do?",
          a: "Click 'Forgot Password' on the login page. Enter your registered email, and we'll send you a password reset link."
        },
        {
          q: "How do I update my profile information?",
          a: "Go to Profile section after logging in. You can update your name, email, phone, and address details."
        },
        {
          q: "Can I have multiple delivery addresses?",
          a: "Yes, you can save multiple addresses in your profile and choose at checkout."
        }
      ]
    },
    {
      category: "Other Questions",
      questions: [
        {
          q: "Do you have a physical store?",
          a: "Currently, HypeWear is an online-only store. This helps us offer better prices and wider selection."
        },
        {
          q: "Can I get a gift wrapped?",
          a: "Gift wrapping service is coming soon! Stay tuned for updates."
        },
        {
          q: "Do you offer bulk/wholesale orders?",
          a: "For bulk orders, please contact us at wholesale@hypewear.com with your requirements."
        },
        {
          q: "How do I contact customer support?",
          a: "Email: support@hypewear.com | Phone: +91 1800-123-4567 | Hours: Mon-Sat, 9 AM - 6 PM IST"
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="info-page">
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <p className="page-intro">
          Find answers to common questions about shopping with HypeWear. 
          Can't find what you're looking for? Contact our support team!
        </p>

        <div className="faq-content">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="faq-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="faq-list">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = `${catIndex}-${qIndex}`;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <div key={qIndex} className={`faq-item ${isOpen ? 'open' : ''}`}>
                      <button 
                        className="faq-question"
                        onClick={() => toggleFAQ(globalIndex)}
                      >
                        <span>{faq.q}</span>
                        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                      </button>
                      {isOpen && (
                        <div className="faq-answer">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <h2>Still have questions?</h2>
          <p>Our customer support team is always ready to help!</p>
          <div className="support-buttons">
            <a href="/contact" className="support-btn primary">Contact Us</a>
            <a href="mailto:support@hypewear.com" className="support-btn">Email Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;