import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import CamisetaPreta from '../../assets/camisetaPreta.jpg';
import User from '../../assets/user.png';
import Bot from '../../assets/bot.png';
import Vendedor from '../../assets/vendedor.png';

export default function BodyDetalhesProduto() {
  return (
    <div className="background">
      <div className="bt_voltar">
        <Link to="/">
          <FaArrowLeft />
          <p>Voltar</p>
        </Link>
      </div>

      <div className="card_detalhes">
        <div className="detalhes_produto">
          <div className="imagem_preco">
            <img src={CamisetaPreta} alt="camiseta preta" />

            <p>R$ 39,99</p>
            <h1>R$ 29,99</h1>
          </div>
          <div className="col_detalhes">
            <div className="detalhes">
              <h1 className="nome">Produto: Camiseta Básica Preta</h1>
              <h1 className="frete">Frete Grátis</h1>
              <h1 className="marca">Marca: Shirtz</h1>
              <h1 className="cor">Cor: Preta</h1>
              <h1 className="material">Material: Algodão</h1>
              <h1 className="disponibilidade">Disponibilidade: Em Estoque</h1>
            </div>
            <button className="comprar">Comprar</button>
          </div>
        </div>
      </div>
      <h1>Perguntas e Respostas</h1>
      <div className="card_perguntas">
        <div className="user">
          <img src={User} alt="usuario1" />
          <p>Qual a cor dessa camiseta? </p>
        </div>
        <div className="bot">
          <p>A cor é Preta </p>
          <img src={Bot} alt="bot" />
        </div>
        <div className="user">
          <img src={User} alt="usuario1" />
          <p>Qual a disponibilidade? </p>
        </div>
        <div className="bot">
          <p>O produto está Em Estoque ! </p>
          <img src={Bot} alt="bot" />
        </div>
        <div className="user">
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
