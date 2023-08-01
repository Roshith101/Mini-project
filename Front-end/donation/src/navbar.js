import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);

  const handleAccountDropdown = () => {
    setAccountDropdownOpen((prevOpen) => !prevOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          Donocare❤️
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-50}
              activeClass="active"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="causes"
              smooth={true}
              duration={500}
              offset={-50}
              activeClass="active"
            >
              Causes
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="donate"
              smooth={true}
              duration={500}
              offset={-50}
              activeClass="active"
            >
              Donate
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-50}
              activeClass="active"
            >
              Contact
            </ScrollLink>
          </li>
          <li>
            <button className="header" onClick={handleAccountDropdown}>
              Account
            </button>
            {isAccountDropdownOpen && (
              <ul className="account-dropdown">
                <li>
                  <Link to="/Login">Login</Link>
                </li>
                <li>
                  <Link to="/SignUp">Signup</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
