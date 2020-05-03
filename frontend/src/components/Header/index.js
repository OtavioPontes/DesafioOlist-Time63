import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

import './styles.css';
import chamegoLogo from '../../assets/chamego.png';

export default function Header() {
  return (
    <>
      <header className="header-container">
        <Link to="/">
          <img src={chamegoLogo} alt="Logo" />
        </Link>
        <div className="sign">
          <Link className="sign-in">Sign in |</Link>

          <Link className="sign-up">Sign up</Link>
        </div>

        <div className="toDash">
          <Link to="/sistema">
            <button>
              <FaTools />
              <p>Dashboard</p>
            </button>{' '}
          </Link>
        </div>

        <div className="cart">
          <FaShoppingCart />
        </div>
      </header>
    </>
  );
}
