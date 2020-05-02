import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import Camisa from '../../assets/camisa.png';
import Calca from '../../assets/calca.png';
import Bone from '../../assets/bone.png';

export default function BodyHome() {
  return (
    <>
      <div className="home-container">
        <div class="grid-container">
          <div class="grid-item">
            <img src={Camisa} alt="Camisa" />

            <div className="details">
              <h3>Camisa Básica Preta</h3>
              <strike>R$ 39,90</strike>
              <h4>R$ 29,90</h4>
            </div>
            <Link to="/detalheProduto">
              <button class="button" type="submit">
                Ver Detalhes
              </button>
            </Link>
          </div>

          <div class="grid-item">
            <img src={Calca} alt="Calca" />

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
            <img src={Bone} alt="bone" />

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
    </>
  );
}
