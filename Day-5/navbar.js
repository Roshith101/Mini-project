import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">Donocare❤️</Link>
        <ul className="nav-links">
          <li><Link to="/" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="/#about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="/#causes" smooth={true} duration={500}>Causes</Link></li>
          <li><Link to="/#donate" smooth={true} duration={500}>Donate</Link></li>
          <li><Link to="/#contact" smooth={true} duration={500}>Contact</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/SignUp">Signup</Link></li>
        </ul> 
      </nav>
    </header>
  );
};

export default Navbar;
