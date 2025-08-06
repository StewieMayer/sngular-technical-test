import { useContext } from "react";
import SerieFormModal from "./components/SerieFormModal";
import { useModal } from "../hooks/useModal";
import { SerieContext } from "../../context/SerieContext";
import Tooltip from "../common/Tooltip";

const SerieForm: React.FC = () => {
  const { show, handleShow } = useModal();
  const { calcSerie } = useContext(SerieContext);

  return (
    <div className="mb-6 border border-2 border-gray-200 p-4 pt-3 rounded-lg shadow-xl">
      <div className="flex items-center justify-between mb-2">
        <label
          className="block text-gray-700 text-sm font-bold"
          htmlFor="numberInput"
        >
        <Tooltip text="Ayuda sobre el formato de entrada" position="right">
          <button
            className="px-1 text-blue-500 hover:text-blue-600 transition-colors cursor-pointer"
            onClick={handleShow}
          >
            ℹ️
          </button>
        </Tooltip>
        Ingresa un número para calcular la serie:
        </label>
      </div>
      <input
        id="numberInput"
        onChange={calcSerie}
        type="number"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-md transition duration-200"
        placeholder="Número"
      />

      <SerieFormModal show={show} handleClose={handleShow} />
    </div>
  );
};

export default SerieForm;
