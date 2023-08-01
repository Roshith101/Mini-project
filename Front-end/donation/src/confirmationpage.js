import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const amount = queryParams.get('amount');

  return (
    <div className="confirmation-page">
      <h1>Confirmation</h1>
      <p>Are you willing to pay ${amount}?</p>
      <Link to="/" className="confirmation-btn">Confirm</Link>
    </div>
  );
};

export default ConfirmationPage;
    