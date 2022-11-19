import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="bg-slate-800 container flex">
      <Link className=' flex justify-start py-5 px-5 text-white' to="/">
        LOGO
      </Link>
      <ul className="flex">
        <li className="px-5 py-5 font-bold text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="px-5 py-5 font-bold text-white">
          <Link to="/about">About Us</Link>
        </li>
          <li className="px-5 py-5 font-bold text-white">
            <Link to="/Contacts">Contact</Link>
        </li>

      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
