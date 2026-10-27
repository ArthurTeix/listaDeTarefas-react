import { Component } from "react";

// form
import { FaPlus } from "react-icons/fa";
import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./Main.css";
export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: [
      "Fazer café",
      "Ler",
      "Lavar roupa"
    ],
  };

  handleChange = (e) => {
    {
      /* Esta função acompanha o valor sendo alterado no input e atribui um valor de acordo no que é escrito no input ao título */
    }
    this.setState({
      novaTarefa: e.target.value,
    });
  };
  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        {" "}
        {/* Diferente do 'class' em html, em jsx o correto é 'className' */}
        <h1>Lista de Tarefas</h1>

        <form action="#" className="form">
          <input type="text" onChange={this.handleChange} value={novaTarefa} />
          {/* onChange é usado para capturar eventos, e hancleChange é um nome padrão sobre como lidar com essas alterações */}
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map(tarefa => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit className="edit"/>
                <FaWindowClose className="delete"/>
              </span>
            </li> // key é necessário pois ajuda o react a se encontrar, e para ser único, é apenas cada tarefa ser sua key
          ))}
        </ul>
      </div>
    );
  }
}
