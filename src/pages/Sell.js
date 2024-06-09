import React from 'react';
import './Sell.css'; 
import { Link } from 'react-router-dom';
import sell from '../assets/sell.jpeg'; // Adjust the path if necessary
import money from '../assets/money.jpg';
import seller from '../assets/seller.jpeg';

function Sell() {
  return (
    <div className="cardbody">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h4>
              <i className="bi bi-person-circle icon"></i>
              <span style={{ color: 'orange' }}> ABSO</span>
              <span style={{ color: 'red' }}>LUTE </span>  Seller
            </h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
          
              <li className="nav-item">
                <Link id="sell-list-link" className="nav-link" to="/fetch-sell-list">|  Sales List</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#total-earnings">Total Earnings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/selllogout">Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
              <div className="container-fluid">
                <span className="navbar-brand">Selling Your Item</span>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </nav>
            <div className="separator"></div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="zigzag-container">
          <div className="zigzag-item">
            <div className="zigzag-description">
              <h3>Getting Started</h3>
              <p>
                Transform your unwanted treasures into cash with Knight Second-Hand Haven. Whether it's clothing, electronics,
                furniture, or more, our platform offers a hassle-free way to sell your pre-loved items. Simply create a listing,
                provide details and photos, set your price, and reach potential buyers across our vast network. With our secure
                transactions and seller protection, you can confidently turn clutter into currency. Join our community of sellers
                today and discover the ease of selling with Knight Saver Mall!
              </p>
            </div>
            <img src={sell} alt="Resume Writing" className="zigzag-img" />
          </div>
          <br />
          <div className="zigzag-item">
            <img src={money} alt="Sell Item 2" className="zigzag-img" />
            <div className="zigzag-description">
              <h3>Start Making Money</h3>
              <p>
                Sell your pre-loved items effortlessly with Knight Second-Hand Haven. Our platform provides a convenient way to
                list and sell your gently used goods to a wide audience of potential buyers. From clothing and accessories to
                electronics and home decor, we make it easy for you to turn your items into cash. Simply create a listing, add
                photos and details, set your price, and connect with interested buyers. With our user-friendly interface and
                secure payment options, selling your items has never been easier. Join our community of sellers today and start
                earning from your unwanted items!
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ borderColor: 'white' }} />
      <hr style={{ borderColor: '#555' }} />

      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <span className="navbar-brand">Sell Now</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="sell-container">
          <div className="sell-form">
            <form action="process_sale.php" method="POST" enctype="multipart/form-data">
              <label htmlFor="item_name">Item Name:</label>
              <input type="text" id="item_name" name="item_name" />

              <label htmlFor="category">Category:</label>
              <select id="category" name="category">
                <option value="Home & Office">Home & Office</option>
                <option value="Electronics">Electronics</option>
                <option value="Phones & Accessories">Phones & Accessories</option>
                <option value="Computing">Computing</option>
                <option value="TVs & Audio Systems">TVs & Audio Systems</option>
                <option value="Clothes & Fashion">Clothes & Fashion</option>
                <option value="Appliances">Appliances</option>
                <option value="Sports">Sports</option>
                <option value="Gaming">Gaming</option>
                <option value="Baby Toys">Baby Toys</option>
                <option value="Garden & Outdoor">Garden & Outdoor</option>
                <option value="Automotive">Automotive</option>
              </select>
              <br />

              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description" rows="4"></textarea>

              <label htmlFor="price">Price(Ksh):<br /><i>no commas</i></label>
              <input type="text" id="price" name="price" />

              <label htmlFor="quantity">Quantity:</label>
              <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />

              <label htmlFor="status">Status:</label>
              <select id="status" name="status">
                <option value="new">New</option>
                <option value="used">Used</option>
              </select>
              <br />

              <label htmlFor="location">Location:</label>
              <input type="text" id="location" name="location" />

              <label htmlFor="contact">Contact Information:</label>
              <input type="text" id="contact" name="contact" />

              <label htmlFor="image">Upload Image(s) (Min 2):</label>
              <input type="file" id="image" name="image[]" multiple accept="image/*" />

              <button type="submit">Sell Now</button>
            </form>
          </div>

          <div className="sell-instructions">
            <h3 className="instruction-heading"><i className="bi bi-info-circle-fill"></i> Selling Instructions</h3>
            <p>Follow the steps below to sell your item on Knight Saver Mall:</p>
            <ol>
              <li>Fill in the details of your item in the form.</li>
              <li>Click the "Submit" button to list your item for sale.</li>
              <li>Your item will be displayed in the appropriate category on Knight Saver online Mall and in your Sales List.</li>
            </ol>
            <hr />
            <img src={seller} style={{ width: '100%' }} alt="Seller" />
          </div>
        </div>
      </div>

      <hr style={{ borderColor: '#555' }} />

      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <div className="copyright">Copyright &copy; Knight Second-Hand Haven 2024</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Sell;
