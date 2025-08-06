# 🧮 Serie Numérica Calculator

Una aplicación React moderna que calcula una serie numérica personalizada basada en la fórmula:

**`serie(n) = 5 × triangular(n) - 2 × fibonacci(n) + primo(n+1)`**

## 🚀 Características

- ⚡ **React 18** con TypeScript
- 🎨 **TailwindCSS** para styling moderno con tema azul-púrpura
- 🔥 **Vite** para desarrollo ultra-rápido
- 🧪 **Vitest** para testing
- 📱 **Responsive Design**
- 💡 **Tooltips informativos** en iconos y enlaces
- 🎯 **Context API** para gestión de estado
- 🏗️ **Arquitectura modular** con componentes organizados
- 🪝 **Custom Hooks** reutilizables

## 📸 Demo

```
Input: 5
Output: 5×15 - 2×5 + 13 = 75 - 10 + 13 = 78
```

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/StewieMayer/sngular-technical-test.git

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
├── components/
│   ├── common/                    # Componentes reutilizables
│   │   └── Tooltip.tsx           # Componente tooltip con 4 posiciones
│   ├── hooks/                    # Hooks personalizados
│   │   ├── useModal.ts           # Hook para manejo de modales
│   │   └── useTooltip.ts         # Hook para tooltips
│   ├── layout/                   # Componentes de layout
│   │   ├── Layout.tsx            # Layout principal
│   │   └── components/
│   │       ├── Header.tsx        # Header con imagen tecnológica
│   │       └── Footer.tsx        # Footer con enlaces sociales y tooltips
│   ├── serieDescription/         # Módulo de descripción
│   │   ├── SerieDescription.tsx  # Componente principal con tooltip
│   │   ├── index.ts             # Barrel export
│   │   └── components/
│   │       └── SerieModal.tsx    # Modal explicativo de la serie
│   ├── serieForm/               # Módulo del formulario
│   │   ├── SerieForm.tsx        # Formulario con tooltip de ayuda
│   │   └── components/
│   │       └── SerieFormModal.tsx # Modal de ayuda para entrada
│   ├── Card.tsx                 # Componente contenedor
│   └── SerieResult.tsx          # Visualización de resultados
├── context/                     # Context API
│   └── SerieContext.tsx         # Estado global de la aplicación
├── utils/                       # Utilidades y lógica de negocio
│   ├── series.ts               # Clase SerieNumerica y algoritmos
│   └── series.test.ts          # Tests unitarios completos
└── App.tsx                     # Componente raíz
```

## 💡 Sistema de Tooltips

### Características
- **4 posiciones**: top, bottom, left, right
- **Activación por hover** con animaciones suaves
- **Diseño elegante** con fondo oscuro y texto blanco
- **Sin interferencias** con la navegación (pointer-events: none)
- **Z-index optimizado** para aparecer sobre otros elementos

### Ubicaciones
- **Botón ℹ️ SerieDescription**: "Más información sobre la serie" (izquierda)
- **Botón ℹ️ SerieForm**: "Ayuda sobre el formato de entrada" (derecha)  
- **Enlace GitHub**: "Visita mi perfil de GitHub" (arriba)
- **Enlace LinkedIn**: "Conecta conmigo en LinkedIn" (arriba)

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

## 🎨 Diseño y UX

- **Tema coherente**: Gradiente azul-púrpura en toda la aplicación
- **Tipografía clara**: Jerarquía visual bien definida
- **Elementos interactivos**: Hover effects y transiciones suaves
- **Responsive**: Adaptable a diferentes tamaños de pantalla
- **Accesibilidad**: Labels apropiados y contraste adecuado

## ⚙️ Tecnologías

- **Frontend**: React 18, TypeScript
- **Styling**: TailwindCSS
- **Build Tool**: Vite
- **Testing**: Vitest
- **Linting**: ESLint
- **Hooks**: Custom hooks para reutilización de lógica

## 🪝 Custom Hooks

### `useModal()`
```typescript
const { show, handleShow } = useModal();
// Manejo de estado de modales con toggle automático
```

### `useTooltip()`
```typescript
const { isVisible, showTooltip, hideTooltip } = useTooltip();
// Control de visibilidad de tooltips (disponible para uso futuro)
```

## 🚫 Limitaciones

- **Máximo valor de n**: 167 (limitado por tabla de primos pre-calculada)
- **Solo números enteros positivos**: Validación estricta de entrada
- **Tooltips**: Optimizados para desktop, funcionalidad básica en móviles

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Antonio Amaya** - [GitHub](https://github.com/stewiemayer) - [LinkedIn](https://linkedin.com/in/antonioamayastc)

---

⭐ ¡Dale una estrella si te gustó el proyecto!

## 📱 Componentes Interactivos

### 🧮 SerieModal
Modal informativo que explica:
- Fórmula matemática completa con ejemplos visuales
- Descripción detallada de cada secuencia numérica
- Casos de uso y limitaciones del sistema
- Diseño acorde al tema de la aplicación

### ℹ️ SerieFormModal  
Modal de ayuda para entrada de datos que incluye:
- Valores permitidos y prohibidos con ejemplos
- Explicación de limitaciones del sistema
- Guía de uso para nuevos usuarios
- Validación en tiempo real

### 🎯 Tooltips Interactivos
Sistema completo de tooltips que proporciona:
- Información contextual sobre iconos y enlaces
- Experiencia de usuario mejorada
- Navegación más intuitiva
- Feedback visual inmediato

## 🚀 Próximas Mejoras

- [ ] Soporte para números decimales
- [ ] Ampliación de tabla de primos
- [ ] Tema oscuro/claro
- [ ] Historial de cálculos
- [ ] Exportación de resultados
- [ ] Gráficas de secuencias
