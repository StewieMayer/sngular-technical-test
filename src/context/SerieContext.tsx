import { createContext } from "react";
import useSerieContext from "./useSerieContext";

type SerieContextType = {
  calcSerie: (e: React.ChangeEvent<HTMLInputElement>) => void;
  result: number | undefined;
  error: string | undefined;
};

export const SerieContext = createContext<SerieContextType>({
  calcSerie: () => {},
  result: undefined,
  error: undefined,
});

export const SerieProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {

  const value = useSerieContext()

  return (
    <SerieContext.Provider value={value}>
      {children}
    </SerieContext.Provider>
  );
};
