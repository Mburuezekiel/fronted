import React from 'react';

function Sidebar() {
  return (
    <aside>
          <h5 style={{ backgroundColor: 'orange', padding: '10px', color: 'white' }}>
        <b> <i className="bi bi-cart4 bi-icon"></i> Product Categories</b>
      </h5>
      <ul className="list-unstyled">
        <li><i className="bi bi-house"></i> Home & Office</li>
        <li><i className="bi bi-tv"></i> Electronics</li>
        <li><i className="bi bi-phone"></i> Phones & Accessories</li>
        <li><i className="bi bi-laptop"></i> Computing</li>
        <li><i className="bi bi-speaker"></i> TVs & Audio Systems</li>
        <li><i className="bi bi-headphones"></i> Clothes & Fashion</li>
        <li><i className="bi bi-plug"></i> Appliances</li>
        <li><i className="bi bi-bicycle"></i> Sports</li>
        <li><i className="bi bi-controller"></i> Gaming</li>
        <li><i className="bi bi-basket2"></i> Baby Toys</li>
        <li><i className="bi bi-tree"></i> Garden & Outdoor</li>
        <li><i className="bi bi-spanner"></i> Automotive</li>
      </ul>
    </aside>
  );
}


export default Sidebar;

