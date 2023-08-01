import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

const Login = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [incorrect, setIncorrect] = useState('');
  const navigate = useNavigate();

  const handleChangeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/authenticate', {
        email: formData.email,
        password: formData.password,
      });

      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      setIsAuthenticated(true);
      navigate('/');
    } catch (error) {
      console.error('Error: ', error);
      setIncorrect('*Invalid credentials');
    }
  };

  useEffect(() => {
    const interval = setInterval(handleChangeImage, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isAuthenticated) {
    const userName = "John Doe"; // Replace this with the user's name from your authentication logic

    return (
      <div className="login-container">
        <div className="slideshow" style={{ backgroundImage: `url('${images[currentImageIndex]}')` }} />
        <div className="login-form">
          <h2>Welcome, {userName}!</h2>
          <p>You are logged in!</p>
          <Link to="/">Go to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="slideshow" style={{ backgroundImage: `url('${images[currentImageIndex]}')` }} />
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSignIn}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
        {incorrect && <p className="error-message">{incorrect}</p>}
      </div>
    </div>
  );
};

export default Login;
