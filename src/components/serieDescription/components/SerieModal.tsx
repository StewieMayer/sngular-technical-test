import React from 'react';

interface SerieModalProps {
  show: boolean;
  handleClose: () => void;
}

const SerieModal: React.FC<SerieModalProps> = ({ show, handleClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              🧮 Fórmula de la Serie Numérica
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer"
            >
              ×
            </button>
          </div>

          {/* Formula Principal */}
          <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">
              Fórmula Principal
            </h3>
            <p className="text-xl font-mono text-center py-2 bg-white rounded border">
              <strong>serie(n) = 5 × triangular(n) - 2 × fibonacci(n) + primo(n+1)</strong>
            </p>
          </div>

          {/* Explicación de cada componente */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Triangular */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-lg border border-green-200">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">🔺</span>
                <h3 className="text-lg font-bold text-green-800">Números Triangulares</h3>
              </div>
              <div className="mb-3">
                <code className="bg-white px-2 py-1 rounded text-sm">
                  T(n) = n × (n + 1) / 2
                </code>
              </div>
              <p className="text-sm text-green-700 mb-2">
                Representan la cantidad de puntos que forman un triángulo equilátero.
              </p>
              <div className="text-xs text-green-600">
                <strong>Ejemplos:</strong><br />
                T(0) = 0, T(1) = 1, T(2) = 3<br />
                T(3) = 6, T(4) = 10, T(5) = 15
              </div>
            </div>

            {/* Fibonacci */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-lg border border-purple-200">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">🌀</span>
                <h3 className="text-lg font-bold text-purple-800">Secuencia de Fibonacci</h3>
              </div>
              <div className="mb-3">
                <code className="bg-white px-2 py-1 rounded text-sm">
                  F(n) = F(n-1) + F(n-2)
                </code>
              </div>
              <p className="text-sm text-purple-700 mb-2">
                Cada número es la suma de los dos anteriores.
              </p>
              <div className="text-xs text-purple-600">
                <strong>Casos base:</strong><br />
                F(0) = 0, F(1) = 1<br />
                <strong>Secuencia:</strong><br />
                0, 1, 1, 2, 3, 5, 8, 13, 21...
              </div>
            </div>

            {/* Primos */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-lg border border-orange-200">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">🔢</span>
                <h3 className="text-lg font-bold text-orange-800">Números Primos</h3>
              </div>
              <div className="mb-3">
                <code className="bg-white px-2 py-1 rounded text-sm">
                  primo(n+1)
                </code>
              </div>
              <p className="text-sm text-orange-700 mb-2">
                Números naturales mayores que 1 con exactamente dos divisores.
              </p>
              <div className="text-xs text-orange-600">
                <strong>Primeros primos:</strong><br />
                2, 3, 5, 7, 11, 13, 17, 19...<br />
                <strong>Límite:</strong> Hasta el 168º primo (997)
              </div>
            </div>
          </div>

          {/* Ejemplo de Cálculo */}
          <div className="bg-gray-50 p-5 rounded-lg border">
            <h3 className="text-lg font-bold mb-3 text-gray-800">
              📊 Ejemplo de Cálculo: n = 5
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center p-3 bg-green-100 rounded">
                <div className="font-bold text-green-800">Triangular(5)</div>
                <div className="text-green-700">5 × 6 / 2 = 15</div>
              </div>
              <div className="text-center p-3 bg-purple-100 rounded">
                <div className="font-bold text-purple-800">Fibonacci(5)</div>
                <div className="text-purple-700">F(5) = 5</div>
              </div>
              <div className="text-center p-3 bg-orange-100 rounded">
                <div className="font-bold text-orange-800">Primo(6)</div>
                <div className="text-orange-700">6º primo = 13</div>
              </div>
              <div className="text-center p-3 bg-blue-100 rounded">
                <div className="font-bold text-blue-800">Resultado</div>
                <div className="text-blue-700">5×15 - 2×5 + 13 = 78</div>
              </div>
            </div>
          </div>

          {/* Botón cerrar */}
          <div className="mt-6 text-center">
            <button
              onClick={handleClose}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-200 cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerieModal;
