import { Component } from "react";

export default class Main extends Component {
  state = {
    novaTarefa: "",
  };

  handleChange = (e) => { {/* Esta função acompanha o valor sendo alterado no input e atribui um valor de acordo no que é escrito no input ao título */}
    this.setState({
      novaTarefa: e.target.value,
    });
  }
  render() {
    const { novaTarefa } = this.state;

    return (
      <div className="main"> {/* Diferente do 'class' em html, em jsx o correto é 'className' */}
        <h1>Lista de Tarefas</h1>

        <form action="#">
          <input type="text" onChange={this.handleChange} /> {/* onChange é usado para capturar eventos, e hancleChange é um nome padrão sobre como lidar com essas alterações */}
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}
