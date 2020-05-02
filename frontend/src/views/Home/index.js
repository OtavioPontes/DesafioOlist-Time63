import React from 'react';

import './styles.css';

import camisa from '../../assets/camisa.png';
import calca from '../../assets/calca.png';
import bone from '../../assets/bone.png';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
        <Header />
          <div className="home-container">

            <div class="grid-container">

              <div class="grid-item">

                <img src={camisa} alt="Camisa" />
                
                <div className="details">
                  <h3>Camisa Básica Preta</h3>
                  <strike>R$ 39,90</strike>
                  <h4>R$ 29,90</h4>
                </div>

                <button className="button" type="submit">
                  Ver Detalhes
                </button>

              </div>
                
              <div class="grid-item">

                <img src={calca} alt="Calca" />

                <div className="details">
                  <h3>Calça Jeans Bege</h3>
                  <strike>R$ 89,90</strike>
                  <h4>R$ 79,90</h4>
                </div>

                <button className="button" type="submit">
                  Ver Detalhes
                </button>

              </div>
                
              <div class="grid-item">

                <img src={bone} alt="bone" />

                <div className="details">
                  <h3>Boné Aba Reta</h3>
                  <strike>R$ 59,90</strike>
                  <h4>R$ 49,90</h4>
                </div>

                <button className="button" type="submit">
                  Ver Detalhes
                </button>

              </div>

            </div>

          </div>
        <Footer />
    </>
  );
}
