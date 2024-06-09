import React from 'react';
import './Home.css'; // Ensure you have a CSS file for custom styling if needed
//import logo from '../assets/logo1.jpg'; // Adjust the path if necessary
import intro from '../assets/intro_img.jpg'; // Adjust the path if necessary
import sell from '../assets/sell.jpeg'; // Adjust the path if necessary
import seller from '../assets/seller.jpeg'; // Adjust the path if necessary

function Home() {
  return (
    <div className="container3">
      <div className="row">
        <div className="box">
          <div className="col-lg-12 text-center">
        
            <div className="about-us">
              <div className="about-us-description">
              <h1>Welcome to
          <span  style={{ color: 'orange' }}> ABSO</span><span style={{ color: 'red' }}>LUTE</span> 
        </h1>
        <br />
        Get More, Spend Less
                <p>Discover unique treasures and embrace the charm of pre-loved goods.</p>
              </div>
              <img src={intro} alt="Second Hand Shop" style={{ maxWidth: '40%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center">Second Hand Shop</h2>
            <hr />
            <div className="zigzag-container">
              <div className="zigzag-item">
                <div className="zigzag-description">
                  <h1>Getting Started</h1>
                  <p>Why settle for new when you can embrace the charm of pre-loved treasures?</p>
                  <a href="shop.php" className="btn btn-get-started">Shop Now</a>
                </div>
                <img src={sell} alt="Sell Item 1" className="zigzag-img" />
              </div>
              <div className="zigzag-item">
                <img src={seller} alt="Sell Item 2" className="zigzag-img" />
                <div className="zigzag-description">
                  <h1>Start Making Money</h1>
                  <p>Sell your pre-loved items effortlessly with Knight Second-Hand Haven.</p>
                  <a href="sellindex.php" className="btn btn-get-started">Start Selling</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content" style={{ backgroundColor: 'yellow', color: 'black' }}>
      <h2 >
        <b> <i className="bi bi-cart4 bi-icon"></i> Find Great Deals on Second-Hand Items</b>
        <p>Explore a wide range of pre-loved goods at affordable prices</p>

      </h2>
    
       
        <div className="slideshow-container" id="slideshow-container">
          {/* Slides will be added dynamically here */}
        </div>
       
       
        <div style={{ textAlign: 'center' }}>
          {/* Dots will be added dynamically here */}
        </div>
        <a href="Products.js" className="btn btn-get-started">Shop Now</a>
      </div>

      <div className="row">
        <div className="box">
          <div className="testimonials">
            <div className="testimonial">
              <hr />
              <h2><b>Testimonials</b></h2>
              <hr />
              <p>"Knight Second-Hand Haven revolutionized my shopping experience. The range of second-hand items available is impressive, and the prices are unbeatable. I've found unique treasures here that I couldn't find anywhere else."</p><br />
              <p className="testimonial-author"><b>Mitchell Muraya</b><br /> Fashion Enthusiast</p>
            </div>
            <div className="testimonial">
              <p>"I've been a loyal customer of Knight Second-Hand Haven for years now. Not only do they offer great deals on second-hand goods, but their commitment to sustainability aligns with my values. It feels good to shop consciously and support local businesses."</p><br />
              <p className="testimonial-author"><b>Zack Smith</b><br />Environmental Advocate</p>
            </div>
            <div className="testimonial">
              <p>"Knight Second-Hand Haven is my go-to destination for affordable, high-quality second-hand items. Whether I'm looking for clothing, electronics, or home decor, I always find something interesting. The ease of browsing and the variety of products keep me coming back for more."</p><br />
              <p className="testimonial-author"><b>Eric Njuguna</b><br />Thrifty Shopper</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center">Contact <strong>Knight Second-Hand Haven</strong></h2>
            <hr />
            <p>Address: <strong>Githunguri, Kiambu</strong></p>
            <p>Phone: <strong>0115 812700</strong> <br />Business Hours: <strong>24/7 services</strong><br /><strong><a href="mailto:knightsavermall%40gmail.com">knightsavermall@gmail.com</a> <br /><a href="about.php">About us</a></strong></p>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
