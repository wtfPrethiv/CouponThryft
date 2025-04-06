import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './Pages/HomePage';
import AddCoupon from './Pages/AddCoupon';
import Categories from './Pages/Categories';
import Transactions from './Pages/Transactions';
import Profile from './Pages/Profile';
import ProductDetail from './Pages/ProductDetail';
import Products from './components/Products';
import SignUpLogin from './Pages/SignUpLogin';
import Cart from './Pages/Cart';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import TradingPage from './Pages/TradingPage';
import CategoryPage from './Pages/CategoryPage';
import { CartProvider } from './context/CartContext';
import { CouponProvider } from './context/CouponContext';
import ItemsPage from './Pages/ItemsPage';
import ChatBot from './components/ChatBot'; // Import ChatBot component

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatBotOpen, setChatBotOpen] = useState(false); // State to toggle chatbot

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleChatBot = () => {
    setChatBotOpen(!chatBotOpen);
  };

  return (
    <AuthProvider>
      <CouponProvider>
        <CartProvider>
          <Router>
            <div className="app">
              <Navbar toggleSidebar={toggleSidebar} />
              <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/add-coupon" element={<AddCoupon />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/transactions" element={<Transactions />} />
                  <Route path="/Trade" element={<TradingPage />} />
                  <Route path="/items" element={<ItemsPage />} />
                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/categories/:slug" element={<CategoryPage />} />
                  <Route path="/auth" element={<SignUpLogin />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </main>

              {/* Chatbot Button */}
              <div className="chatbot-button" onClick={toggleChatBot}>
                💬
              </div>

              {/* Chatbot Component */}
              {chatBotOpen && <ChatBot />}
            </div>
          </Router>
        </CartProvider>
      </CouponProvider>
    </AuthProvider>
  );
}

export default App;