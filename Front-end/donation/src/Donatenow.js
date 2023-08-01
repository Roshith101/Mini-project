import React, { useState } from 'react';
import './DonateNow.css';
import { useNavigate } from 'react-router-dom';

const DonateNow = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const navigate = useNavigate();

  const handleDonationAmountChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleDonate = () => {
    // Handle donation logic here
    console.log(`Donating $${donationAmount}`);
    // Reset donation amount
    setDonationAmount('');

    // Redirect to confirmation page with the amount as a query parameter
    navigate(`/confirmationpage?amount=${donationAmount}`);
  };

  return (
    <div className="donate-now-container">
      <h1 className="donate-now-title">Donate Now</h1>
      <div className="donate-now-form">
        <label htmlFor="amount" className="donate-now-label">
          Donation Amount:
        </label>
        <input
          type="number"
          id="amount"
          className="donate-now-input"
          value={donationAmount}
          onChange={handleDonationAmountChange}
        />
        <button className="donate-now-button" onClick={handleDonate}>
          Donate
        </button>
      </div>
    </div>
  );
};

export default DonateNow;
