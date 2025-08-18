import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { CoinContext } from '../../context/CoinContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currencyHandler = (e) => {
    const v = e.target.value;
    if (v === 'usd') setCurrency({ name: 'usd', symbol: '$' });
    else if (v === 'eur') setCurrency({ name: 'eur', symbol: '€' });
    else if (v === 'inr') setCurrency({ name: 'inr', symbol: '₹' });
    else setCurrency({ name: 'usd', symbol: '$' });
  };

  return (
    <nav className="navbar">
      <Link to={'/'}>
      <div className="navbar-logo">
        
         <img src={logo} alt="logo" />
        <h2>Cryptoscope</h2>
       
      </div>
       </Link>

      <ul className="navbar-links">
        <Link to={'/'}><li>Home</li></Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <div className="navbar-actions">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>Sign Up</button>
      </div>

      <button
        className="navbar-toggle"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((s) => !s)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul onClick={() => setMenuOpen(false)}>
          <Link to={'/'}><li>Home</li></Link>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button onClick={() => setMenuOpen(false)}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
