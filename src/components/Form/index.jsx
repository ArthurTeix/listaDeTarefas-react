import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";
import "./Form.css";

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      {/* onChange é usado para capturar eventos, e hancleChange é um nome padrão sobre como lidar com essas alterações */}
      <input type="text" onChange={handleChange} value={novaTarefa} />

      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

// Form.defaultProps = {
//   novaTarefa: 'Valor padrão caso algum não seja required'
// }

// para importar funções e variáveis por destructor
Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
