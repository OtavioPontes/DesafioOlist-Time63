import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import chamegoLogo from '../../assets/chamego.png';

export default function Header() {
  return(
    <>
      <header className="header-container">
        <img src={chamegoLogo} alt="Logo" />

        <div className="sign">
          <Link className="sign-in">
            Sign in |
          </Link>

          <Link className="sign-up">
            Sign up
          </Link>
        </div>
      </header>
    </>

  );
}