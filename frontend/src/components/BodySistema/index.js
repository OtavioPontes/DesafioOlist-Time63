import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiHelpCircle } from 'react-icons/fi';
import api from '../../services/api';

export default function BodySistema() {
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [index, setIndex] = useState();
  const [singleComment, setsingleComment] = useState([]);
  const [newResponse, setNewResponse] = useState('');
  const [btState, setBtState] = useState(false);

  function openHelper() {
    var helperModal = document.getElementById('help_modal');
    var btModal = document.getElementById('help_button');

    btModal.onclick = function () {
      if (btState == false) {
        helperModal.style.display = 'flex';
        setBtState(true);
        console.log(btState);
      } else {
        helperModal.style.display = 'none';
        setBtState(false);
        console.log(btState);
      }
    };
  }

  function openModal(comment) {
    setsingleComment(comment);

    var modal = document.getElementById('myModal');

    var id_button = comment.product_name.concat(comment.id);

    var btn = document.getElementById(id_button);

    btn.onclick = function () {
      modal.style.display = 'block';
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  }

  function closeModal() {
    var modal = document.getElementById('myModal');

    var btn = document.getElementById('bt_responder_modal');

    btn.onclick = function () {
      modal.style.display = 'none';
    };
  }

  useEffect(() => {
    api.get('/product').then((response) => {
      setProducts(response.data);
    });
  }, [newResponse]);

  useEffect(() => {
    api.get('/product/comment/list').then((response) => {
      setComments(response.data);
    });
  }, [products]);

  async function handleNewResponse(e) {
    e.preventDefault();

    const data = newResponse;

    try {
      const response = await api.post(
        `product/${singleComment.product_id}/comment/${singleComment.id}/response`,
        {
          response: newResponse,
        }
      );
    } catch (error) {
      alert('Houve um erro ao registrar sua resposta, tente novamente');
    }
    closeModal();
  }

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
          <div className="help_modal" id="help_modal">
            <h1>Ajuda com Filtros</h1>
            <p className="topic">Complexidade:</p>
            <p>Simples: Respondida pelo Bot</p>
            <p>Complexa: Não Respondida pelo Bot</p>
            <p className="topic">Status:</p>
            <p>Respondida: Respondida por você</p>
            <p>Pendente: Não Respondida por você</p>
          </div>
          <button id="help_button" className="help_button" onClick={openHelper}>
            <FiHelpCircle className="help_icon" />
          </button>
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
                <button
                  class="bt_responder"
                  id={comment.product_name + comment.id}
                  onClick={() => openModal(comment)}
                >
                  Responder
                </button>
              </p>
            </div>
          ))}
        </section>

        <div id="myModal" class="modal">
          <div class="modal-content">
            <div className="pergunta_modal">
              <h1>Pergunta: {singleComment.description}</h1>
              <p className="Loja">
                Loja:{' '}
                <Link
                  to={`/detalheProduto?id=${singleComment.product_id}`}
                  className="loja"
                  target="_blank"
                >
                  Chameguinho Store
                </Link>{' '}
              </p>
              <p className="Usuario">Usuário: {singleComment.customer_name}</p>
              <p className="Produto">Produto: {singleComment.product_name}</p>
              <p classname="status">Status: {singleComment.status_tag}</p>
              <p className="Tags">
                Tags: <button>cor</button>
                <button>camiseta</button>
              </p>
              <section className="resposta">
                <h1 className="sua_resposta">Sua Resposta:</h1>
                <textarea
                  placeholder="Digite aqui sua resposta"
                  value={newResponse}
                  onChange={(e) => setNewResponse(e.target.value)}
                ></textarea>
                <button
                  className="bt_responder_modal"
                  id="bt_responder_modal"
                  onClick={handleNewResponse}
                >
                  Responder
                </button>
              </section>
            </div>
          </div>
        </div>
        <section className="indice"></section>
      </div>
    </div>
  );
}
