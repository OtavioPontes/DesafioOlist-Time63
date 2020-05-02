import React, { useState, useEffect, Props } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import CamisetaPreta from '../../assets/camisetaPreta.jpg';
import User from '../../assets/user.png';
import Bot from '../../assets/bot.png';
import Vendedor from '../../assets/vendedor.png';
import api from '../../services/api';

export default function BodyDetalhesProduto() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const id_type = urlParams.get('id');

    api.get(`/product/${id_type}`).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="background">
      <div className="bt_voltar">
        <Link to="/" className="link_voltar">
          <FaArrowLeft />
          <p>Voltar</p>
        </Link>
      </div>

      <div className="card_detalhes">
        <div className="detalhes_produto">
          <div className="imagem_preco">
            <img src={products.image} alt="camiseta preta" />

            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(products.price)}
            </p>
            <h1>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(products.discount_price)}
            </h1>
          </div>
          <div className="col_detalhes">
            <div className="detalhes">
              <h1 className="nome">{products.name}</h1>
              <h1 className="frete">Frete Grátis</h1>
              <h1 className="marca">Marca: {products.brand}</h1>
              <h1 className="tamanho">Tamanho: {products.tamanho}</h1>
              <h1 className="cor">Cor: {products.cor}</h1>
              <h1 className="material">Material: {products.material}</h1>
              <h1 className="disponibilidade">
                Disponibilidade: {products.avaliability}
              </h1>
            </div>
            <button className="comprar">Comprar</button>
          </div>
        </div>
      </div>
      <h1>Perguntas e Respostas</h1>
      <div className="card_perguntas">
        <div className="user1">
          <img src={User} alt="usuario1" />
          <p>Qual a cor dessa camiseta? </p>
        </div>
        <div className="bot">
          <p>A cor é Preta </p>
          <img src={Bot} alt="bot" />
        </div>
        <div className="user1">
          <img src={User} alt="usuario1" />
          <p>Qual a disponibilidade? </p>
        </div>
        <div className="bot">
          <p>O produto está Em Estoque ! </p>
          <img src={Bot} alt="bot" />
        </div>
        <div className="user1">
          <img src={User} alt="usuario1" />
          <p>
            Eu moro em Goiânia, se fizer o pedido hj o produto chega em quantos
            dias?{' '}
          </p>
        </div>
        <div className="bot">
          <p>Bom dia, usuário1. O produto chega em 3 dias por Sedex. </p>
          <img src={Vendedor} alt="vendedor1" />
        </div>
      </div>
      <h1>Digite sua Pergunta:</h1>
      <div className="faca_sua_pergunta">
        <textarea
          name=""
          id=""
          placeholder="Mande aqui sua dúvida..."
        ></textarea>
        <button>Enviar</button>
      </div>
    </div>
  );
}
