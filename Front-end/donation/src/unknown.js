// import React, { useState, useEffect } from 'react';
// import './SignUp.css';
// import axios from 'axios';

// const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

// const SignUp = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: ''
//   });
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleChangeImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform authentication logic here (e.g., check against a database or hardcoded credentials)
//     const { email, password } = formData;
//     if (email === 'test@example.com' && password === 'password') {
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//     }
//     // Reset form fields
//     setFormData({
//       id: '',
//       Name: '',
//       password: '',
//       email: ''
//     });
  

//     axios.post('http://127.0.0.1:8080/users/signup', formData)  .then(response => {
//     console.log('Sign-up details stored successfully');
//   })
//   .catch(error => {
//     console.error('Error storing sign-up details:', error);
//   });
// };

//   useEffect(() => {
//     const interval = setInterval(handleChangeImage, 4000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   if (isAuthenticated) {
//     return <h2>You are authenticated!</h2>;
//   }

//   return (
//     <div className="signup-container">
//       <div className="slideshow" style={{ backgroundImage: `url('${images[currentImageIndex]}')` }} />
//       <div className="signup-form">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="firstName">First Name:</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//             />
//           </div>
//     <br></br>
//           <div>
//             <label htmlFor="lastName">Last Name:</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//             />
//           </div>
//     <br></br>
//           <div>
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//     <br></br>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>
//     <br></br>
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
