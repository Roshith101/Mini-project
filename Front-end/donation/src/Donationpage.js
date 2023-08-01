  import React from 'react';
  import './Donationpage.css';
  import { Link } from 'react-router-dom';

  const DonationPage = () => {
    const fundraisers = [
      {
        id: 1,
        title: 'Education for All',
        description: 'Support access to quality education for children in underserved communities.',
        goal: 5000,
        currentAmount: 2500,
        image: './cause1.jpeg', // Image URL for Education for All
      },
      {
        id: 2,
        title: 'Clean Water Initiative',
        description: 'Help provide clean and safe drinking water to areas affected by water scarcity.',
        goal: 10000,
        currentAmount: 7500,
        image: './cause2.jpeg', // Image URL for Clean Water Initiative
      },
      {
        id: 3,
        title: 'Food Security Program',
        description: 'Support efforts to alleviate hunger and ensure food security for vulnerable populations.',
        goal: 8000,
        currentAmount: 4000,
        image: './cause3.jpeg', // Image URL for Food Security Program
      },
    ];

    return (
      <div className="donation-page">
        <h1>Choose a Fundraiser</h1>
        {fundraisers.map((fundraiser) => (
          <div key={fundraiser.id} className="fundraiser-card">
            <div className="fundraiser-content">
              <div className="fundraiser-info">
                <h2>{fundraiser.title}</h2>
                <p>{fundraiser.description}</p>
                <p>Goal: ${fundraiser.goal}</p>
                <p>Current Amount: ${fundraiser.currentAmount}</p>
                <Link to="/Donatenow" className="donate-link">
                  <a className="donate-btn">Donate now</a>
                </Link>
              </div>
              <div className="fundraiser-image" >
                <img src={fundraiser.image} alt={fundraiser.title} />
              </div>
            </div>
          </div>
        ))}
        <Link to="/creatingfundraiser" className="create-fundraiser-link">
          <button className="create-fundraiser-button">+</button>
        </Link>
      </div>
    );
  };

  export default DonationPage;
