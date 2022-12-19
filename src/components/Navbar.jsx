import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";

function Navbar() {
  return (
    <nav className="bg-slate-900">
      <div className=" container flex">
        <Link className=" flex justify-start py-5 px-5 text-white" to="/">
          <img src={logo} alt="" className="w-32" />
        </Link>
        <ul className="flex">
          <li className="px-5 py-10 font-bold text-white text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5 py-10 font-bold text-white text-xl">
            <Link to="/carlist">Car List</Link>
          </li>
          <li className="px-5 py-10 font-bold text-white text-xl">
            <Link to="/about">About</Link>
          </li>
          <li className="px-5 py-10 font-bold text-white text-xl">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;