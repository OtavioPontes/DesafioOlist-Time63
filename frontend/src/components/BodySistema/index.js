import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiHelpCircle } from 'react-icons/fi';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../services/api';

export default function BodySistema() {
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [index, setIndex] = useState();
  const [singleComment, setsingleComment] = useState([]);
  const [newResponse, setNewResponse] = useState('');
  const [btState, setBtState] = useState(false);
  const [tags, setTags] = useState(['']);

  function Search(e) {
    e.preventDefault();

    const status = document.getElementById('status');
    var finalStatus = status.options[status.selectedIndex].value;
    const complexidade = document.getElementById('tipo_pergunta');
    var finalComplexidade =
      complexidade.options[complexidade.selectedIndex].value;
    const tag = document.getElementById('tags');
    var finalTag = tag.options[tag.selectedIndex].value;

    if (finalStatus == '') {
      api
        .post('/product/comment/list', {
          type: finalComplexidade,
        })
        .then((response) => {
          setComments(response.data);
        });
    } else if (finalComplexidade == '') {
      api
        .post('/product/comment/list', {
          status: finalStatus,
        })
        .then((response) => {
          setComments(response.data);
        });
    } else {
      api
        .post('/product/comment/list', {
          status: finalStatus,
          type: finalComplexidade,
          tag: finalTag,
        })
        .then((response) => {
          setComments(response.data);
        });
    }
  }

  function openHelper() {
    var helperModal = document.getElementById('help_modal');
    var btModal = document.getElementById('help_button');

    btModal.onclick = function () {
      if (btState == false) {
        helperModal.style.display = 'flex';
        setBtState(true);
      } else {
        helperModal.style.display = 'none';
        setBtState(false);
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
    api.get('/product/tags').then((response) => {
      setTags(response.data);
    });
  }, []);

  useEffect(() => {
    api.post('/product/comment/list').then((response) => {
      setComments(response.data);
    });
  }, [products]);

  return (
    <div className="background">
      <div className="card_group">
        <div className="bt_voltar">
          <a href="/sistema" className="link_voltar">
            <FaArrowLeft />
            <p>Voltar</p>
          </a>
        </div>
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
          <form onSubmit={Search}>
            <select
              name="tipo_pergunta"
              id="tipo_pergunta"
              placeholder="Tipo de pergunta"
            >
              <option selected disabled hidden value="">
                Complexidade
              </option>
              <option value="simple">Simples</option>
              <option value="complex">Complexa</option>
            </select>
            <select name="status" id="status" placeholder="Status">
              <option selected disabled hidden value="">
                Status
              </option>
              <option value="created">Pendente</option>
              <option value="closed">Respondida</option>
            </select>
            <select name="tags" id="tags" placeholder="Tags">
              <option selected disabled hidden value="">
                Tags
              </option>
              {tags.map((tag) => (
                <option value={tag}>{tag}</option>
              ))}
            </select>
            <button className="bt_submit" type="submit">
              Buscar
            </button>
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
