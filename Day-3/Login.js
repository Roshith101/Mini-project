import React, { useState, useEffect } from 'react';
import './Login.css';

// import './components/images/image1.jpg';

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

const Login = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChangeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted');
    console.log(formData);
    setFormData({
      email: '',
      password: ''
    });
  };

  useEffect(() => {
    const interval = setInterval(handleChangeImage, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    
    <div className="login-container">
      <div className="slideshow" style={{ backgroundImage: `url('${images[currentImageIndex]}')` }} />
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <h>Email</h>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <h>Password</h>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
