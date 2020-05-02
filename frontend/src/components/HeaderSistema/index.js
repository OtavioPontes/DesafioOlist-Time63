import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import blueOlist from '../../assets/blueOlist.png';
import vendedor from '../../assets/vendedor.png';
import { FaStore } from 'react-icons/fa';

export default function HeaderSistema() {
  return (
    <header>
      <img src={blueOlist} alt="Olist" className="logo" />
      <section className="user">
        <img src={vendedor} alt="Vendedor" className="vendedor" />
        <label>Vendedor 1</label>
      </section>

      <div className="toMarketplace">
        <Link to="/">
          <button>
            <FaStore />
            <p>Marketplace</p>
          </button>{' '}
        </Link>
      </div>
    </header>
  );
}
