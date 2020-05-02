import React from 'react';
import './styles.css';

export default function BodySistema() {
  return (
    <div className="background">
      <div className="card_group">
        <section className="entrada">
          <h1>Olá,</h1>
          <p>Vendedor 1</p>
        </section>
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
          <p className="total">Um total de 3 perguntas</p>

          <div className="pergunta">
            <h1>Pergunta: Qual a cor dessa camiseta?</h1>
            <p className="Loja">Loja: Chameguinho Store</p>
            <p className="Usuario">Usuário: usuário1</p>
            <p className="Produto">Produto: Camiseta Básica Preta</p>
            <p classname="status">Status: Pendente</p>
            <p className="Tags">
              Tags: <button>cor</button>
              <button>camiseta</button>
              <button class="bt_responder" id="bt_responder">
                Responder
              </button>
            </p>
          </div>
          <div className="pergunta">
            <h1>Pergunta: Qual a cor dessa camiseta?</h1>
            <p className="Loja">Loja: Chameguinho Store</p>
            <p className="Usuario">Usuário: usuário1</p>
            <p className="Produto">Produto: Camiseta Básica Preta</p>
            <p classname="status">Status: Pendente</p>
            <p className="Tags">
              Tags: <button>cor</button>
              <button>camiseta</button>
              <button class="bt_responder" id="bt_responder">
                Responder
              </button>
            </p>
          </div>
          <div className="pergunta">
            <h1>Pergunta: Qual a cor dessa camiseta?</h1>
            <p className="Loja">Loja: Chameguinho Store</p>
            <p className="Usuario">Usuário: usuário1</p>
            <p className="Produto">Produto: Camiseta Básica Preta</p>
            <p classname="status">Status: Pendente</p>
            <p className="Tags">
              Tags: <button>cor</button>
              <button>camiseta</button>
              <button class="bt_responder" id="bt_responder">
                Responder
              </button>
            </p>
          </div>
        </section>

        <div id="myModal" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <p>Some text in the Modal..</p>
          </div>
        </div>

        <section className="indice">
          <button> 1 2 3 </button>
        </section>
      </div>
    </div>
  );
}
