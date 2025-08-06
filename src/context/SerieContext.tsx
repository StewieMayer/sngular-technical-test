import { useState, createContext } from "react";
import SerieNumerica from "../utils/series";

type SerieContextType = {
  calcSerie: (e: React.ChangeEvent<HTMLInputElement>) => void;
  num: number | undefined;
  result: number | undefined;
  error: string | undefined;
};

export const SerieContext = createContext<SerieContextType>({
  calcSerie: () => {},
  num: undefined,
  result: undefined,
  error: undefined,
});

export const SerieProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [num, setNum] = useState<number>();
  const [result, setResult] = useState<number>();
  const [error, setError] = useState<string>();

  const serie = new SerieNumerica();

  // Función para calcular la serie
  const calcSerie = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const num = Number(value);

    //Limpia el error previo
    setError(undefined);

    // Limpia si el input está vacío y no se ejecuta el cálculo
    if (value === "") {
      setNum(undefined);
      setResult(undefined);
      return;
    }

    // Previene el cálculo si la entrada no es un número válido
    if (isNaN(num)) {
      setError("Solo se permiten números.");
      setNum(undefined);
      return;
    }

    setNum(num);

    const serieResult = serie.calcularSerie(num);

    // Maneja el resultado que puede ser un número o un mensaje de error
    return typeof serieResult === "string"
      ? setError(serieResult)
      : setResult(serieResult)
  };

  return (
    <SerieContext.Provider value={{ calcSerie, num, result, error }}>
      {children}
    </SerieContext.Provider>
  );
};
