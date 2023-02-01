import React, { useState } from "react";

import '../css/Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <button
        className="navbar-toggler"
        onClick={() => setIsOpen(!isOpen)}
      >
        &#9776;
      </button>
      <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
        <a href="/" className="navbar-item">
          Home
        </a>
        <a href="/about" className="navbar-item">
          About
        </a>
        <a href="/skills" className="navbar-item">
          Skills
        </a>
        <a href="/contact" className="navbar-item">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;