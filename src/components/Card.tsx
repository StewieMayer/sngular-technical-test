import Result from "./Result";
import useCard from "./useCard";

const Card: React.FC = () => {
  const { setNumeroHandler, resultado } = useCard();

  return (
    <div className="max-w-md w-full rounded-xl overflow-hidden shadow-2xl bg-white p-6">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Calculadora de serie</div>
        <p className="text-gray-700 text-base">
          Esta aplicacion permite calcular la siguiente serie a partir de un
          numero inicial:
        </p>
        <p className="text-gray-700 text-base mt-2">
          serie(n) = 5triangular(n) - 2fibonacci(n) + primo(n+1)
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="numberInput"
        >
          Introduce un número:
        </label>
        <input
          id="numberInput"
          onChange={setNumeroHandler}
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Número"
        />
      </div>
      <Result result={resultado} />
    </div>
  );
};

export default Card;
