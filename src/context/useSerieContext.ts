import { useState } from "react";
import SerieNumerica from "../utils/series";

const useSerieContext = () => {
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
      setResult(undefined);
      return;
    }

    // Previene el cálculo si la entrada no es un número válido
    if (isNaN(num)) {
      setError("Solo se permiten números.");
      return;
    }

    // Calcula la serie y maneja errores
    try {
        const serieResult = serie.calcularSerie(num);
        setResult(serieResult);
        setError(undefined);
    } catch (error) {
        setResult(undefined);
        setError(error instanceof Error ? error.message : "Error desconocido");
    }

  };

  return {
    calcSerie,
    result,
    error,
  };
};

export default useSerieContext;
