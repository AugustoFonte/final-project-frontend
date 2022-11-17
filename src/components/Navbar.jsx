import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/">
        LOGO
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
            <Link to="/Testdrive">Test Drive</Link>
        </li>
        <li>
            <Link to="/Contacts">Contact Us</Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
