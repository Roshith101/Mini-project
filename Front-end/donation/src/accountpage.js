import React, { useEffect, useState } from 'react';

const AccountPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details from the API or from your authentication context
    const fetchUserDetails = async () => {
      try {
        // Replace the following with your API call or authentication logic
        const response = await fetch('/api/user'); // API endpoint to fetch user details
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setUser(null);
      }
    };

    // Call the fetchUserDetails function
    fetchUserDetails();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <p>Phone Number: {user.phoneNumber}</p>
      {/* Other user account information */}
    </div>
  );
};

export default AccountPage;
