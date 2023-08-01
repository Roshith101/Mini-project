import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import './SignUp.css';
import HomePage from './components/home/homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import DonationPage from './Donationpage';
import DonateNow from './Donatenow';
import ConfirmationPage from './confirmationpage';
import CreateFundraiser from './creatingfundraiser';
import AccountPage from './accountpage';
import AccountDetailPage from './accountdetail';
// import { useNavigate } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Donationpage" element={<DonationPage />} />
        <Route path="/Donatenow" element={<DonateNow />} />
        <Route path="/confirmationpage" element={<ConfirmationPage/>} />
        <Route path="/creatingfundraiser" element={<CreateFundraiser/>} />
        <Route path="/accountpage" element={<AccountPage/>} />
        <Route path="/accountdetail" element={<AccountDetailPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
