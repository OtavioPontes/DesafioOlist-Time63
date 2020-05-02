import React from 'react';
import './styles.css';
import blueOlist from '../../assets/blueOlist.png';
import vendedor from '../../assets/vendedor.png';

export default function HeaderSistema() {
    return (
        <header>
            <img src={blueOlist} alt="Olist" className="logo" />
            <section className="user">
                <img src={vendedor} alt="Vendedor" className="vendedor" />
                <p>Vendedor 1</p>
            </section>
        </header>
    );
}
