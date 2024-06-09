// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.jpg'; // Ensure the correct path to your logo
import ThemeSwitcher from './ThemeSwitcher'; // Import ThemeSwitcher

function Header() {
  return (
    <header>
      <div className="header-container">
        <img src={logo} alt="Knight Second-Hand Haven Logo" className="logo" />
        <strong><b>
          <h3>
            <span style={{ color: 'orange' }}>ABSO</span><span style={{ color: 'red' }}>LUTE</span>
          </h3></b>
        </strong>
        <br></br>
        <p className="brand-description"><h6>Get More, Spend Less</h6></p>
      </div>
    
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="btn btn-primary search-button"><i className="bi bi-search"></i></button>
      </div>
      <ThemeSwitcher /> {/* Add ThemeSwitcher */}
      <nav>
        <Link to="/"><i className="bi bi-house"></i> Home</Link>
        <Link to="/products"><i className="bi bi-cart-plus"></i> Shop</Link>
        <Link to="/sell"><i className="bi bi-lightning"></i> Sell</Link>
        <Link to="/about"><i className="bi bi-question-circle"></i> About</Link>
      </nav>
    </header>
  );
}

export default Header;
