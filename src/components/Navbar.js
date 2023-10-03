import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Tech4U
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <FaUser /> My Account
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <FaHeart /> My Wish List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <FaShoppingCart /> My Cart
              </Link>
            </li>
          </ul>
          </div>
          <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <Link to="/search" className="btn btn-primary" role="button">Search</Link>
      </form>
      </div>
    </nav>
  );
}

export default Navbar;
