import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="bg-slate-800 container">
      <Link className='' to="/">
        LOGO
      </Link>
      <ul className="flex">
        <li className="px-5 py-3 font-bold text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="px-5 py-3 font-bold text-white">
          <Link to="/about">About Us</Link>
        </li>
          <li className="px-5 py-3 font-bold text-white">
            <Link to="/Contacts">Contact Us</Link>
        </li>

      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
