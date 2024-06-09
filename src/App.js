import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Sell from './pages/Sell';
import About from './pages/About';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Stats from './components/Sidebar';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/about" element={<About/>} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
