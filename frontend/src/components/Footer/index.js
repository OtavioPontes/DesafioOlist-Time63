import React from 'react';

import './styles.css';
import whiteChamego from '../../assets/whiteChamego.png';

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <img src={whiteChamego} alt="Logo" />
      </footer>
    </>
  );
}
