import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/home" className="navbar-link">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/book" className="navbar-link">Explore</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/budget-tracker" className="navbar-link">Budget Tracker</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact" className="navbar-link">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
