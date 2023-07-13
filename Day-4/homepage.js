import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <nav className="navbar">
          <h1 className="logo">Donocare❤️</h1>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#causes">Causes</a></li>
            <li><a href="#donate">Donate</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/SignUp">Signup</Link></li>
            {/* <li>
              <Link to="/login" className="login-btn">
                Login
              </Link>
            </li> */}
          </ul>
        </nav>
      </header>

      <section id="hero" className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Make a Difference</h2>
          <p className="hero-description">Join us in creating a better future for those in need.</p>
          <a href="#donate" className="hero-btn">Donate Now</a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          <p className="section-description">We are a public donation fund dedicated to providing support and resources to various causes. Our mission is to make a positive impact in the lives of those in need.</p>
        </div>
      </section>

      <section id="causes" className="causes">
        <div className="causes-content">
          <h2 className="section-title">Causes</h2>
          <div className="cause-card">
            <div className='cause-image'><img src="./cause1.jpeg" alt="Cause 1"/></div>
            <h3 className="cause-title">Education for All</h3>
            <p className="cause-description">Support access to quality education for children in underserved communities.</p>
            <a href="#donate" className="cause-btn">Donate</a>
          </div>
          <div className="cause-card">
          <div className='cause-image'><img src="./cause2.jpeg" alt="Cause 1"/></div>
            <h3 className="cause-title">Clean Water Initiative</h3>
            <p className="cause-description">Help provide clean and safe drinking water to areas affected by water scarcity.</p>
            <a href="#donate" className="cause-btn">Donate</a>
          </div>
          <div className="cause-card">
          <div className='cause-image'><img src="./cause3.jpeg" alt="Cause 1"/></div>
            <h3 className="cause-title">Food Security Program</h3>
            <p className="cause-description">Support efforts to alleviate hunger and ensure food security for vulnerable populations.</p>
            <a href="#donate" className="cause-btn">Donate</a>
          </div>
        </div>
      </section>

      <section id="donate" className="donate">
        <div className="donate-content">
          <h2 className="section-title">Make a Donation</h2>
          <p className="section-description">Your contribution can make a real difference. Every donation counts.</p>
          <a href="#donate" className="donate-btn">Donate Now</a>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-content">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-description">Have any questions or suggestions? We'd love to hear from you.</p>
          <div className="contact-details">
            <p>Email: Donocare@gmail.com</p>
            <p>Phone: 123456780</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Donocare❤️. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
