import React from 'react';
import './About.css'; // Ensure you create this CSS file
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.jpg'; // Adjust the path if necessary
import ceoImage from '../assets/my pic.jpg'; // Adjust the path if necessary

function About() {
  return (
    <div className="about-container">
      <div className="logo">
        <img src={logo} alt="Knight Saver Mall Logo" />
     
      <h2>About  <span style={{ color: 'orange' }}>ABSO</span><span style={{ color: 'red' }}>LUTE</span></h2>
      </div>
      {/* Vision Section */}
      <div className="vision-container">
        <h3 className="vision-heading">Our Vision</h3>
        <div className="vision-item">
          <i className="bi bi-arrow-repeat bi-icon"></i> Promote sustainable living by offering high-quality second-hand items.
        </div>
        <div className="vision-item">
          <i className="bi bi-handshake bi-icon"></i> Build a community of like-minded individuals who value thrift and eco-consciousness.
        </div>
        <div className="vision-item">
          <i className="bi bi-people bi-icon"></i> Empower individuals to find affordable yet stylish options for their everyday needs.
        </div>
      </div>
   
      {/* Knight Saver Second Hand Shop Today Section */}
      <div className="jumia-today-container">
        <h3 className="jumia-heading">Knight Second-Hand Haven Today</h3>
        <div className="jumia-item">
          <i className="bi bi-box bi-icon"></i> <strong>Products:</strong> 5,000,000
        </div>
        <div className="jumia-item">
          <i className="bi bi-globe2 bi-icon"></i> <strong>East African Countries:</strong> 3
        </div>
        <div className="jumia-item">
          <i className="bi bi-shop bi-icon"></i> <strong>International & National Brands:</strong> 820
        </div>
        <div className="jumia-item">
          <i className="bi bi-people bi-icon"></i> <strong>Women Managers:</strong> 50%
        </div>
        <div className="jumia-item">
          <i className="bi bi-person-plus bi-icon"></i> <strong>Subscribers:</strong> 500,000
        </div>
        <div className="jumia-item">
          <i className="bi bi-people bi-icon"></i> <strong>Employees:</strong> 500
        </div>
        <div className="jumia-item">
          <i className="bi bi-eye bi-icon"></i> <strong>Monthly Visitors:</strong> 1,000,000
        </div>
        <div className="jumia-item">
          <i className="bi bi-cart4 bi-icon"></i> <strong>Orders Across Kenya:</strong> 50,000
        </div>
        <div className="jumia-item">
          <strong>Knight Saver Mall</strong> offers the widest assortment at an unbeatable price.
        </div>
      </div>

      {/* CEO Section */}
      <div className="vision-container">
        <h3 className="vision-heading">Meet The CEO</h3>
        <div className="vision-item">
          <div className="image-container">
            <img src={ceoImage} alt="Ezekiel Eric" className="team-member-image" />
          </div>
          <p className="team-member-description">Ezekiel Eric is a seasoned executive with over 5 years of experience in the thrift industry. As CEO of Knight Second-Hand Haven, Eric is responsible for setting the overall direction and strategy of the company. He is committed to ensuring that Knight Second-Hand Haven remains at the forefront of the industry, providing our customers with the best possible products and services.</p>
        </div>
        <div className="jumia-item">
          <i className="bi bi-briefcase bi-icon"></i> <strong>Founder/CEO</strong> 
        </div>
      </div>
    </div>
  );
}

export default About;
