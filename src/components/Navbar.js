import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Tech4U
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
              <Link to="/" className="nav-link">
                <FaUser /> My Account
              </Link>
            </li> */}
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FaUser />
                My Account
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/">
                  My Profile
                </Link>
                <Link class="dropdown-item" to="/">
                  My Wishlist
                </Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" to="/">
                  Sign in
                </Link>
              </div>
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
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <Link to="/search" className="btn btn-primary" role="button">
            Search
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
