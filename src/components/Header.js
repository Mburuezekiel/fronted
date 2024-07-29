import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileSection from "../pages/ProfileSection";
import logo from "../assets/logo1.jpg"; // Ensure the correct path to your logo
import "./Header.css"; // Import the CSS file
import Notifications from './Notifications'; // Adjust path as needed
import NotificationBell from './NotificationBell';
import useClickOutside from '../hooks/useClickOutside'; // Adjust path as needed

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const notificationCount = 5; // Replace with your actual notification count

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Ref for the sidebar
  const sidebarRef = useClickOutside(() => setSidebarOpen(false));

  return (
    <header className="App-header">
      <div className="header-top">
        <div className="logo-brand">
          <div className="brand-info">
            <strong className="brand-name">
              <h2>
                <span style={{ color: "orange" }}>
                  <img src={logo} alt="Second Hand Shop" className="logo" /> ABSO
                </span>
                <span style={{ color: "red" }} className="logo">LUTE</span>
              </h2>
            </strong>
            <p className="brand-description">Get More, Spend Less</p>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        {/* Burger Button for Small Screens */}
        <button className="burger-btn" onClick={toggleSidebar}>
          <i className="bi bi-list"></i>
        </button>

        {/* Navbar Links */}
        <div className="nav-links">
          <Link to="/" className="nav-link">
            <i className="bi bi-house-door"></i> Home
          </Link>
          <Link to="/marketplace/shop/products" className="nav-link">
            <i className="bi bi-cart4"></i> Shop
          </Link>
          <Link to="/sell/" className="nav-link">
            <i className="bi bi-plus-circle"></i> Sell
          </Link>
          <Link to="/about/" className="nav-link">
            <i className="bi bi-person-lines-fill"></i> About
          </Link>
          <Link to="/blogs/" className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-substack" viewBox="0 0 16 16">
              <path d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z"/>
            </svg>Blogs
          </Link>
          <Link to="/helpcenter/contact/" className="nav-link">
            <i className="bi bi-chat-right-dots"></i> Contact
          </Link>
          <Link to="/help/" className="nav-link">
            <i className="bi bi-question-circle"></i> Help
          </Link>
        </div>

        {/* Right Side Links */}
        <div className="right-links">
          <NotificationBell notificationCount={notificationCount} />
          <ProfileSection />
        </div>
      </div>

      {/* Sidebar for Small Screens */}
      {sidebarOpen && (
        <div className="sidebar" ref={sidebarRef}>
          <nav>
            <Link to="/" onClick={toggleSidebar} className="sidebar-link">
              <i className="bi bi-house-door"></i> Home
            </Link>
            <Link to="/marketplace/shop/products" onClick={toggleSidebar} className="sidebar-link">
              <i className="bi bi-cart4"></i> Shop
            </Link>
            <Link to="/sell" onClick={toggleSidebar} className="sidebar-link">
              <i className="bi bi-plus-circle"></i> Sell
            </Link>
            <Link to="/about" onClick={toggleSidebar} className="sidebar-link">
              <i className="bi bi-person-lines-fill"></i> About
            </Link>
            <Link to="/helpcenter/contact" onClick={toggleSidebar} className="sidebar-link">
              <i className="bi bi-chat-right-dots"></i> Contact
            </Link>
            <Link to="/help" onClick={toggleSidebar} className="sidebar-link">
              <i className="bi bi-question-circle"></i> Help
            </Link>
            <Link to="/blogs/" onClick={toggleSidebar} className="sidebar-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-substack" viewBox="0 0 16 16">
                <path d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z"/>
              </svg>Blogs
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
