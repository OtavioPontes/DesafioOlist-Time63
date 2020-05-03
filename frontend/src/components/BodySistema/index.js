import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function BodySistema() {
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [index, setIndex] = useState();

  useEffect(() => {
    api.get('/product').then((response) => {
      setProducts(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('/product/comment/list').then((response) => {
      setComments(response.data);
    });
  }, [products]);

  return (
    <div className="background">
      <div className="card_group">
        <section className="entrada">
          <h1>Olá,</h1>
          <p>Vendedor 1</p>
        </section>
        <h2 className="bem_vindo">
          Bem vindo ao seu Sistema Automatizado de Classificação de Perguntas
        </h2>
        <section className="filtros">
          <form>
            <select
              name="tipo_pergunta"
              id="tipo_pergunta"
              placeholder="Tipo de pergunta"
            >
              <option selected disabled hidden>
                Complexidade
              </option>
            </select>
            <select name="status" id="status" placeholder="Status">
              <option selected disabled hidden>
                Status
              </option>
            </select>
            <select name="tags" id="tags" placeholder="Tags">
              <option selected disabled hidden>
                Tags
              </option>
            </select>
            <button className="bt_submit">Buscar</button>
          </form>
        </section>
        <section className="perguntas">
          <p className="total">Um total de {comments.length} perguntas</p>
          {comments.map((comment) => (
            <div className="pergunta">
              <h1>Pergunta: {comment.description}</h1>
              <p className="Loja">
                Loja:{' '}
                <Link
                  to={`/detalheProduto?id=${comment.product_id}`}
                  className="loja"
                  target="_blank"
                >
                  Chameguinho Store
                </Link>{' '}
              </p>
              <p className="Usuario">Usuário: {comment.customer_name}</p>
              <p className="Produto">Produto: {comment.product_name}</p>
              <p classname="status">Status: {comment.status_tag}</p>
              <p className="Tags">
                Tags: <button>cor</button>
                <button>camiseta</button>
                <button class="bt_responder" id="bt_responder">
                  Responder
                </button>
              </p>
            </div>
          ))}
        </section>

        <div id="myModal" class="modal">
          <div class="modal-content">
            <p></p>
          </div>
        </div>

        <section className="indice"></section>
      </div>
    </div>
  );
}
