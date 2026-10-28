import { Component } from "react";

// form
import { FaPlus } from "react-icons/fa";
import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./Main.css";
export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas"));

    if (!tarefas) return

    this.setState({ tarefas })
  }

  componentDidUpdate(prevProps, prevState) {
    // me permite salvar o valor anterior que estava
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    // salva minhas tarefas no localStorage
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state; // <- adicionou o index aqui
    let { novaTarefa } = this.state;

    novaTarefa = novaTarefa.trim(); // elimina espaços desnecessários

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: "",
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
        novaTarefa: "", // limpa o input depois de editar
      });
    }
  };

  handleChange = (e) => {
    // Esta função acompanha o valor sendo alterado no input e atribui um valor de acordo no que é escrito no input ao título
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];

    novasTarefas.splice(index, 1); // no index, remova 1 elemento

    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        {" "}
        {/* Diferente do 'class' em html, em jsx o correto é 'className' */}
        <h1>Lista de Tarefas</h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input type="text" onChange={this.handleChange} value={novaTarefa} />
          {/* onChange é usado para capturar eventos, e hancleChange é um nome padrão sobre como lidar com essas alterações */}
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit"
                />

                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"
                />
              </span>
            </li> // key é necessário pois ajuda o react a se encontrar, e para ser único, é apenas cada tarefa ser sua key
          ))}
        </ul>
      </div>
    );
  }
}
