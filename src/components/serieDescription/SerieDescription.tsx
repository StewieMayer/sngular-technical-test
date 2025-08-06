import { useModal } from "../hooks/useModal";
import SerieModal from "./components/SerieModal";
import Tooltip from "../common/Tooltip";

const SerieDescription: React.FC = () => {
  const { show, handleShow } = useModal();

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl flex-1 font-bold text-center text-gray-800">
          Calcular Serie
        </h2>
        <Tooltip text="Más información sobre la serie" position="left">
          <button
            className="rounded-md p-1 text-blue-500 hover:text-blue-600 transition-colors cursor-pointer hover:shadow-md"
            onClick={handleShow}
          >
            ℹ️
          </button>
        </Tooltip>
      </div>

      <p className="text-md text-gray-600 mb-4">
        Esta aplicacion permite calcular la siguiente serie a partir de un
        numero inicial:
      </p>
      <div className="flex items-center justify-center mb-10">
        <p className="text-md text-center font-bold text-gray-600">
          serie(n) = 5triangular(n) - 2fibonacci(n) + primo(n+1)
        </p>
      </div>

      <SerieModal show={show} handleClose={handleShow} />
    </>
  );
};

export default SerieDescription;
