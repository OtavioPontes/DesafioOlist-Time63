import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import Camisa from '../../assets/camisa.png';
import Calca from '../../assets/calca.png';
import Bone from '../../assets/bone.png';

import api from '../../services/api';

export default function BodyHome() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/product').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <div className="home-container">
        <div class="grid-container">
          {products.map((product) => (
            <div class="grid-item">
              <img src={product.image} alt="Camisa" />

              <div className="details">
                <h3>{product.name}</h3>
                <strike>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(product.price)}
                </strike>
                <h4>
                  {' '}
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(product.discount_price)}
                </h4>
              </div>
              <Link to={`/detalheProduto?id=${product.id}`}>
                <button id={product.id} class="button" type="submit">
                  Ver Detalhes
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
