import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

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
              <img src={product.imagem} alt="Camisa" />

              <div className="details">
                <h3>{product.nome}</h3>
                <strike>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(product.preco)}
                </strike>
                <h4>
                  {' '}
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(product.preco_desconto)}
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
