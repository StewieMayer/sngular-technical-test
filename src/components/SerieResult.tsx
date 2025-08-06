import { useContext } from "react";
import { SerieContext } from "../context/SerieContext";

const SerieResult: React.FC = () => {
  const { error, result } = useContext(SerieContext);

  return error ? (
    <div className="bg-red-100 text-red-600 text-center p-3 rounded-lg">
      <h3 className="font-bold mb-1">¡Ocurrio un error!</h3>
      <p className="font-small">{error}</p>
    </div>
  ) : (
    result !== undefined && (
      <div className="bg-green-200 text-green-600 text-center p-3 rounded-lg">
        <h3 className="font-bold mb-1">
          El resultado de la serie es: {result}
        </h3>
      </div>
    )
  );
};

export default SerieResult;
