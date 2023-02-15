import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <NavLink to="/" className="navbar-brand">
  {/* <img src="https://picsum.photos/200/300" alt="" width="50" height="34" class="d-inline-block align-text-top" /> */}
  LOGO
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink to="/" className="nav-link">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/menu" className="nav-link" >Menu</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/travel" className="nav-link" >Travel</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">About Us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
      </li>
    </ul>
  </div>
</nav>
</div>

    );
}

export default Navbar;