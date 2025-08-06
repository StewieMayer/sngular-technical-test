const SerieDescription: React.FC = () => {

    return (
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
    )

}

export default SerieDescription;