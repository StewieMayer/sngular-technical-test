const SerieForm: React.FC = ()=>{
    return (
        <div className="px-6 pt-4 pb-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="numberInput"
        >
          Introduce un número:
        </label>
        <input
          id="numberInput"
          onChange={()=>{}}
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Número"
        />
      </div>
    )
}

export default SerieForm;