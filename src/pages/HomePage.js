import React from 'react';
import './HomePage.css'; // Import HomePage styles
import Footer from '../components/Footer'; // Correct path to Footer component

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Home</h2>
      <p>Welcome to the Home page.</p>

      <Footer />
    </div>
  );
};

export default HomePage;


