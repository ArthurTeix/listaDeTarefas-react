import { FaPlus } from "react-icons/fa";
import "./Form.css"

export default function Form() {
  return(
    <form onSubmit={this.handleSubmit} action="#" className="form">

      {/* onChange é usado para capturar eventos, e hancleChange é um nome padrão sobre como lidar com essas alterações */}
      <input type="text" onChange={this.handleChange} value={novaTarefa} />

      <button type="submit">
        <FaPlus />
      </button>
    </form>
  )
}
