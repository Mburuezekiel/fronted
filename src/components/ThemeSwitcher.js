// src/components/ThemeSwitcher.js
import React, { useState, useEffect } from 'react';
import './ThemeSwitcher.css'; // Create a CSS file for theme switcher-specific styles

function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme} className="btn btn-secondary">
        <i className={theme === 'light' ? 'bi bi-moon' : 'bi bi-sun'}></i> {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
