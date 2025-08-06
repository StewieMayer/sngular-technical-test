const SerieForm: React.FC = () => {
  return (
    <div className="mb-6 border border-2 border-gray-200 p-4 pt-3 rounded-lg shadow-xl">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="numberInput"
      >
        Ingresa un número para calcular la serie:
      </label>
      <input
        id="numberInput"
        onChange={() => {}}
        type="number"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-md transition duration-200"
        placeholder="Número"
      />
    </div>
  );
};

export default SerieForm;
