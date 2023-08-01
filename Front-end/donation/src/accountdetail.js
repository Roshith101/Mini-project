import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccountDetailPage = () => {
  const [accountDetails, setAccountDetails] = useState({});

  useEffect(() => {
    // Fetch account details from the backend API
    axios.get('http://127.0.0.1:8080/users/{id}').then((response) => {
      setAccountDetails(response.data);
    }).catch((error) => {
      console.error('Error fetching account details:', error);
    });
  }, []);

  return (
    <div>
      <h1>Account Details</h1>
      <p>Name: {accountDetails.name}</p>
      <p>Email: {accountDetails.email}</p>
      <p>Phone: {accountDetails.phone}</p>
      {/* Display other account details here */}
    </div>
  );
};

export default AccountDetailPage;
