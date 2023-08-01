import React, { useState, useEffect } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { caseSuccess } from './UseSlice';

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

const SignUp = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();

  const handleChangeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(handleChangeImage, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    dispatch(caseSuccess({
      "name" : name,
      "email": email,
      "mobilenumber": mobile,
      "password": password,
    }));

    try {
      const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/register', {
        name: name,
        email: email,
        mobilenumber: mobile,
        password: password,
      });

      if (response.status === 200) {
        setPopupMessage('Registered Successfully');
        navigate('/');
        setName('');
        setEmail('');
        setMobile('');
        setPassword('');
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="slideshow" style={{ backgroundImage: `url('${images[currentImageIndex]}')` }} />
      <div className="signup-form">
        <h1>SignUp</h1>
        <form onSubmit={handleSignUp}>
          <div className="txt_field">
            <input type="text" name="Name" value={name} onChange={handleChangeName} required />
            <span></span>
            <label>Name</label>
          </div>
          <div className="txt_field">
            <input type="email" name="Email" value={email} onChange={handleChangeEmail} required />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input type="tel" name="phone" value={mobile} onChange={handleChangeMobile} required />
            <span></span>
            <label>Mobile</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="pass"
              value={password}
              onChange={handleChangePassword}
              required
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="S_button">
            <button type="submit">SignUp</button>
          </div>
          <div className="login_link">
            Already a member? <Link to="/Login">Login</Link>
          </div>
        </form>
        {popupMessage && <p className="success-message">{popupMessage}</p>}
      </div>
    </div>
  );
};

export default SignUp;
