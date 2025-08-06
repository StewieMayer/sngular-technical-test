interface ResultProps {
  result: number | undefined;
}

const Result: React.FC<ResultProps> = ({ result }) => {
  return (
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Resultado</div>
      <p className="text-gray-700 text-base">
        El resultado de la serie es: <strong>{result}</strong>
      </p>
    </div>
  );
};

export default Result;
