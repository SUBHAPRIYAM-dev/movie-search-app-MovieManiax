import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
        <img src="/logo/logo.jpeg" alt="Logo" />
        MovieManiax</Link>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
