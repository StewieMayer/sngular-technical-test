const SerieDescription: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Calcular Serie</h2>
      <p className="text-md text-gray-600 mb-4">
        Esta aplicacion permite calcular la siguiente serie a partir de un
        numero inicial:        
      </p>
      <p className="text-md text-center font-bold text-gray-600 mb-10">
        serie(n) = 5triangular(n) - 2fibonacci(n) + primo(n+1)
      </p>
    </>
  );
};

export default SerieDescription;
