import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/home_button.png";

export default function NavBar() {
  return (
    <nav className="bg-chostoBrown text-white py-2 px-4 flex justify-between items-center">
      <Link to="/">
        <img
          src={Logo}
          alt="Chosto Logo"
          style={{ width: "100px", height: "auto" }}
          className="hover:opacity-80 transition-opacity duration-300"
        />
      </Link>
      <div className="space-x-4">
        <Link to="/menu" className="hover:text-chostoPink">Menu</Link>
        <Link to="/about" className="hover:text-chostoPink">About</Link>
        <Link to="/contact" className="hover:text-chostoPink">Contact</Link>
        <Link to="/location" className="hover:text-chostoPink">Location</Link>
      </div>
    </nav>
  );
}
