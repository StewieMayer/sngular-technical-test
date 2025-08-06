import React from 'react';

interface SerieFormModalProps {
  show: boolean;
  handleClose: () => void;
}

const SerieFormModal: React.FC<SerieFormModalProps> = ({ show, handleClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              ℹ️ Guía de Entrada de Datos
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer"
            >
              ×
            </button>
          </div>

          {/* Valores Permitidos */}
          <div className="mb-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center">
                ✅ Valores Permitidos
              </h3>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <div>
                    <strong>Números enteros positivos:</strong> 0, 1, 2, 3, 4, 5...
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <div>
                    <strong>Rango válido:</strong> 0 ≤ n ≤ 167
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <div>
                    <strong>Incluye el cero:</strong> n = 0 es válido
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="text-lg font-bold text-red-800 mb-2 flex items-center">
                ❌ Valores NO Permitidos
              </h3>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>Números negativos:</strong> -1, -5, -10...
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>Números decimales:</strong> 1.5, 2.7, 3.14...
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>Números mayores a 167:</strong> 168, 200, 1000...
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>Texto o caracteres:</strong> abc, @#$, espacios...
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Ejemplos */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">📝 Ejemplos de Uso</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">✅ Entradas Correctas</h4>
                <div className="space-y-1 text-sm text-green-700">
                  <div><code className="bg-white px-2 py-1 rounded">0</code> → Resultado: 3</div>
                  <div><code className="bg-white px-2 py-1 rounded">1</code> → Resultado: 8</div>
                  <div><code className="bg-white px-2 py-1 rounded">5</code> → Resultado: 78</div>
                  <div><code className="bg-white px-2 py-1 rounded">10</code> → Resultado: 318</div>
                </div>
              </div>

              <div className="bg-red-100 p-4 rounded-lg">
                <h4 className="font-bold text-red-800 mb-2">❌ Entradas Incorrectas</h4>
                <div className="space-y-1 text-sm text-red-700">
                  <div><code className="bg-white px-2 py-1 rounded">-5</code> → Error: Número negativo</div>
                  <div><code className="bg-white px-2 py-1 rounded">3.5</code> → Error: No es entero</div>
                  <div><code className="bg-white px-2 py-1 rounded">200</code> → Error: Fuera de rango</div>
                  <div><code className="bg-white px-2 py-1 rounded">abc</code> → Error: No es número</div>
                </div>
              </div>
            </div>
          </div>

          {/* Limitaciones */}
          <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h3 className="text-lg font-bold text-yellow-800 mb-2 flex items-center">
              ⚠️ Limitaciones Importantes
            </h3>
            <div className="text-yellow-700 space-y-2">
              <p>
                <strong>Límite máximo (n = 167):</strong> Este límite existe porque la aplicación 
                usa una tabla pre-calculada de números primos que contiene los primeros 168 primos.
              </p>
              <p>
                <strong>El 168º primo es 997:</strong> Para valores mayores a 167, no hay primos 
                disponibles en la tabla actual.
              </p>
            </div>
          </div>

          {/* Botón cerrar */}
          <div className="text-center">
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

export default SerieFormModal;
