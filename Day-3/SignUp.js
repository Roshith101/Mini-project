    import React, { useState, useEffect } from 'react';
    import './SignUp.css';

    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

    const SignUp = () => {
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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
        console.log('Sign Up form submitted');
        console.log(formData);
        setFormData({
          firstName: '',
          lastName: '',
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
        <div className="signup-container">
          <div className="slideshow" style={{ backgroundImage: `url('${images[currentImageIndex]}')` }} />
          <div className="signup-form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <br></br>
            <h>First Name</h>
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <br></br>
              <h>Last Name</h>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <br></br>
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
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      );
    };

    export default SignUp;
