# 🧮 Serie Numérica Calculator

Una aplicación React moderna que calcula una serie numérica personalizada basada en la fórmula:

**`serie(n) = 5 × triangular(n) - 2 × fibonacci(n) + primo(n+1)`**

## 🚀 Características

- ⚡ **React 18** con TypeScript
- 🎨 **TailwindCSS** para styling moderno
- 🔥 **Vite** para desarrollo ultra-rápido
- 🧪 **Vitest** para testing
- 📱 **Responsive Design**
- ⚠️ **Validación robusta** de entrada
- 🎯 **Context API** para gestión de estado

## 📸 Demo

```
Input: 5
Output: 5×15 - 2×5 + 13 = 75 - 10 + 13 = 78
```

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone <repository-url>

# Navegar al directorio
cd sngular-technical-test

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📋 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Preview del build
npm run test         # Ejecutar tests
npm run test:watch   # Tests en modo watch
npm run lint         # ESLint
```

## 🏗️ Arquitectura del Proyecto

```
src/
├── components/        # Componentes React
│   ├── SerieForm.tsx     # Formulario de entrada
│   ├── SerieResult.tsx   # Mostrar resultados
│   └── useCard.ts        # Hook personalizado
├── context/          # Context API
│   └── SerieContext.tsx  # Estado global
├── layout/           # Componentes de layout
│   └── Layout.tsx        # Layout principal
├── utils/            # Utilidades
│   ├── series.ts         # Lógica de la serie
│   └── series.test.ts    # Tests unitarios
└── App.tsx           # Componente raíz
```

## 🧮 Fórmula Matemática

La serie combina tres secuencias numéricas:

### 🔺 **Números Triangulares**
```typescript
triangular(n) = n × (n + 1) / 2
```
Ejemplos: 1, 3, 6, 10, 15...

### 🌀 **Secuencia de Fibonacci**
```typescript
fibonacci(0) = 0, fibonacci(1) = 1
fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
```
Ejemplos: 0, 1, 1, 2, 3, 5, 8, 13...

### 🔢 **Números Primos**
Pre-calculados hasta el primo #168 (997)
```typescript
primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29...]
```

## 📊 Ejemplos de Cálculo

| n | Triangular | Fibonacci | Primo(n+1) | Resultado |
|---|------------|-----------|-------------|-----------|
| 0 | 0          | 0         | 3           | 3         |
| 1 | 1          | 1         | 5           | 8         |
| 2 | 3          | 1         | 7           | 20        |
| 5 | 15         | 5         | 13          | 78        |

## 🧪 Testing

Tests unitarios completos para la clase `SerieNumerica`:

```bash
npm run test
```

### Casos de Prueba
- ✅ Cálculos correctos para valores válidos
- ✅ Validación de números enteros
- ✅ Validación de números positivos
- ✅ Manejo de límites de primos
- ✅ Casos edge (n=0, n=1)

## ⚙️ Tecnologías

- **Frontend**: React 18, TypeScript
- **Styling**: TailwindCSS
- **Build Tool**: Vite
- **Testing**: Vitest
- **Linting**: ESLint

## 🚫 Limitaciones

- **Máximo valor de n**: 167 (limitado por tabla de primos pre-calculada)
- **Solo números enteros positivos**: Validación estricta de entrada

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Tu Nombre** - [GitHub](https://github.com/tu-usuario)

---

⭐ ¡Dale una estrella si te gustó el proyecto!
