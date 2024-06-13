import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <Link to="/" className="sidebar-link">Home</Link>
      <Link to="/about" className="sidebar-link">About</Link>
      <Link to="/contact" className="sidebar-link">Contact</Link>
      <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
      <Link to="/settings" className="sidebar-link">Settings</Link>
      <Link to="/signup" className="sidebar-link">Signup</Link>
      <Link to="/login" className="sidebar-link">Login</Link>
    </nav>
  );
};

export default Sidebar;

