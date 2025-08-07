# 🧮 Serie Numérica Calculator - Sngular Technical Test

Una aplicación React moderna para calcular series numéricas personalizadas basada en una fórmula matemática que combina números triangulares, secuencia de Fibonacci y números primos.

## 📊 Fórmula Matemática

**`serie(n) = 5 × triangular(n) - 2 × fibonacci(n) + primo(posición n)`**

> ⚠️ **Nota importante**: Aunque la documentación menciona `primo(n+1)`, el código implementado usa `primo(n)` directamente como índice en la tabla.

## 🚀 Características Principales

### 🎯 **Core Features**

- ⚡ **React 19** con TypeScript y JSX moderno
- 🎨 **TailwindCSS 4.1** con gradiente radial azul personalizado
- 🔥 **Vite 7** como build tool y dev server
- 🧪 **Vitest 3.2** para testing unitario con Happy-DOM
- 📱 **Diseño responsive** adaptado a mobile y desktop

### 🎭 **Experiencia de Usuario**

- 💡 **Sistema de tooltips** con 4 posiciones (top, bottom, left, right)
- 🎪 **Modales informativos** con explicaciones detalladas
- ✨ **Animaciones suaves** en hover y transiciones
- 🎨 **Tema visual cohesivo** con gradientes azul-púrpura
- 🔤 **Validación en tiempo real** con mensajes de error claros

### 🏗️ **Arquitectura Avanzada**

- 🎯 **Context API** para gestión de estado global
- 🪝 **Custom Hooks** reutilizables (`useModal`, `useTooltip`)
- 📁 **Estructura modular** por features/componentes
- 🧩 **Separación de responsabilidades** limpia
- 📈 **Escalabilidad** preparada para nuevas funcionalidades

## 📸 Vista Previa

```
🔢 Input: 5
📊 Cálculo: 5 × 15 - 2 × 5 + 13 = 75 - 10 + 13 = 78
✅ Output: 78
```

## 🛠️ Instalación y Configuración

```bash
# Clonar el repositorio
git clone https://github.com/StewieMayer/sngular-technical-test.git

# Navegar al directorio
cd sngular-technical-test

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# La aplicación estará disponible en http://localhost:5173/
```

## 📋 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo con hot reload
npm run build        # Build optimizado para producción
npm run preview      # Preview del build local
npm run test         # Ejecutar suite de tests
npm run coverage     # Reporte de cobertura de tests
npm run lint         # Análisis estático con ESLint
```

## 🏗️ Estructura del Proyecto

```
sngular-technical-test/
├── src/
│   ├── components/
│   │   ├── common/                    # Componentes reutilizables
│   │   │   └── Tooltip.tsx           # Sistema de tooltips universal
│   │   ├── hooks/                    # Custom hooks
│   │   │   ├── useModal.ts           # Hook para modales
│   │   │   └── useTooltip.ts         # Hook para tooltips
│   │   ├── layout/                   # Layout y estructura
│   │   │   ├── Layout.tsx            # Contenedor principal
│   │   │   └── components/
│   │   │       ├── Header.tsx        # Header con branding
│   │   │       └── Footer.tsx        # Footer con enlaces sociales
│   │   ├── serieDescription/         # Módulo de descripción
│   │   │   ├── SerieDescription.tsx  # Componente principal
│   │   │   └── components/
│   │   │       └── SerieModal.tsx    # Modal explicativo
│   │   ├── serieForm/               # Módulo de formulario
│   │   │   ├── SerieForm.tsx        # Formulario de entrada
│   │   │   └── components/
│   │   │       └── SerieFormModal.tsx # Modal de ayuda
│   │   ├── Card.tsx                 # Contenedor de tarjeta
│   │   └── SerieResult.tsx          # Visualización de resultados
│   ├── context/                     # Estado global
│   │   ├── SerieContext.tsx         # Context Provider
│   │   └── useSerieContext.ts       # Hook del contexto
│   ├── utils/                       # Lógica de negocio
│   │   ├── series.ts               # Clase SerieNumerica
│   │   └── series.test.ts          # Tests unitarios
│   ├── App.tsx                     # Componente raíz
│   ├── main.tsx                    # Entry point
│   ├── index.css                   # Estilos globales
│   └── setupTests.ts               # Configuración de tests
├── public/                         # Assets estáticos
├── package.json                    # Dependencias y scripts
├── vite.config.ts                 # Configuración de Vite
├── tsconfig.json                  # Configuración TypeScript
└── eslint.config.js               # Configuración ESLint
```

## 🧮 Detalles de la Fórmula

### 🔺 **Números Triangulares**

```typescript
T(n) = n × (n + 1) / 2
```

Representan puntos organizados en forma triangular.
**Secuencia**: 0, 1, 3, 6, 10, 15, 21, 28, 36, 45...

### 🌀 **Secuencia de Fibonacci**

```typescript
F(0) = 0, F(1) = 1
F(n) = F(n-1) + F(n-2) para n ≥ 2
```

Cada número es la suma de los dos anteriores.
**Secuencia**: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

### 🔢 **Números Primos**

Una tabla pre-calculada de los primeros **168 números primos**.
**Rango**: 2, 3, 5, 7, 11, 13... hasta 997
**Índices válidos**: 0-167 (168 elementos en total)

## 📊 Ejemplos Detallados de Cálculo

| n   | T(n) | F(n) | P(n) | 5×T(n) | 2×F(n) | Fórmula    | Resultado |
| --- | ---- | ---- | ---- | ------ | ------ | ---------- | --------- |
| 0   | 0    | 0    | 2    | 0      | 0      | 0-0+2      | **2**     |
| 1   | 1    | 1    | 3    | 5      | 2      | 5-2+3      | **6**     |
| 2   | 3    | 1    | 5    | 15     | 2      | 15-2+5     | **18**    |
| 3   | 6    | 2    | 7    | 30     | 4      | 30-4+7     | **33**    |
| 5   | 15   | 5    | 13   | 75     | 10     | 75-10+13   | **78**    |
| 10  | 55   | 55   | 31   | 275    | 110    | 275-110+31 | **196**   |

## 🧪 Suite de Testing

**13 tests unitarios** que cubren todos los aspectos críticos:

### ✅ **Tests de Funcionalidad**

- Cálculos correctos para casos base (n=0, n=1)
- Verificación de los primeros 10 números naturales
- Casos límite dentro del rango válido
- Consistencia en cálculos repetidos

### 🚫 **Tests de Validación**

- Rechazo de números decimales (3.5, π)
- Manejo de números negativos
- Detección de valores no numéricos (NaN, Infinity)
- Límites de la tabla de primos

### ⚡ **Tests de Performance**

- Ejecución rápida para múltiples cálculos
- Comportamiento en límites superiores
- Manejo de edge cases

```bash
npm run test
# ✓ 13 tests pasando
# ⏱️ Duración: ~20ms
```

## 💡 Sistema de Tooltips

### 🎯 **Implementación**

- **Componente universal**: `<Tooltip>` reutilizable
- **4 posiciones**: top, bottom, left, right
- **Activación**: hover con transición suave (200ms)
- **Styling**: fondo oscuro, texto blanco, z-index alto
- **Responsive**: se adapta al contenido

### 📍 **Ubicaciones Actuales**

| Elemento                    | Tooltip                             | Posición  |
| --------------------------- | ----------------------------------- | --------- |
| Botón ℹ️ (SerieDescription) | "Más información sobre la serie"    | Izquierda |
| Botón ℹ️ (SerieForm)        | "Ayuda sobre el formato de entrada" | Derecha   |
| Enlace GitHub               | "Visita mi perfil de GitHub"        | Arriba    |
| Enlace LinkedIn             | "Conecta conmigo en LinkedIn"       | Arriba    |

## 🎪 Modales Informativos

### 🧮 **SerieModal**

- **Propósito**: Explicación matemática completa
- **Contenido**: Fórmulas, ejemplos visuales, casos de uso
- **Diseño**: Grid responsivo con códigos de colores por secuencia
- **Interactividad**: Ejemplo de cálculo paso a paso

### ℹ️ **SerieFormModal**

- **Propósito**: Guía de entrada de datos
- **Contenido**: Valores permitidos/prohibidos, ejemplos, limitaciones
- **Diseño**: Código de colores (verde=válido, rojo=inválido)
- **Utilidad**: Prevención de errores de entrada

---

## ⚙️ Stack Tecnológico

### 🎯 **Frontend Core**

- **React 19.1.0**: Biblioteca UI con últimas características
- **TypeScript 5.8.3**: Tipado estático robusto
- **Vite 7.0.4**: Build tool moderno y rápido

### 🎨 **Styling & UI**

- **TailwindCSS 4.1.11**: Framework CSS utility-first
- **Gradientes personalizados**: `bg-radial from-blue-100 to-blue-500`
- **Responsive design**: Mobile-first approach

### 🧪 **Testing & Quality**

- **Vitest 3.2.4**: Test runner compatible con Vite
- **Happy-DOM 18.0.1**: DOM simulation liviano
- **@testing-library/react 16.3.0**: Testing utilities
- **ESLint 9.30.1**: Linting y code quality

### 🔧 **Development Tools**

- **TypeScript**: Configuración strict con project references
- **Hot Module Replacement**: Desarrollo fluido con cambios instantáneos
- **Source Maps**: Debug optimizado en desarrollo

## 📈 Métricas del Proyecto

### 📊 **Estadísticas de Código**

- **Archivos TypeScript**: 15 archivos .tsx/.ts
- **Componentes React**: 8 componentes funcionales
- **Custom Hooks**: 2 hooks reutilizables
- **Líneas de código**: ~1,200 líneas (aprox.)

### 🎯 **Coverage de Tests**

```bash
npm run coverage
```

- **Archivos testeados**: utils/series.ts
- **Funciones cubiertas**: 100% de la lógica matemática
- **Casos edge**: Validaciones completas

### ⚡ **Performance**

- **Build size**: ~204KB (minificado)
- **Tiempo de build**: <2 segundos
- **Tests duration**: <25ms para 13 tests
- **Dev server startup**: <800ms

---

## 👨‍💻 Autor

**Antonio Amaya**  
🌐 [GitHub](https://github.com/stewiemayer)  
💼 [LinkedIn](https://linkedin.com/in/antonioamayastc)  
📧 Contacto: stewiemayer@hotmail.com

---

## 📜 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Reconocimientos

- **Sngular**: Por la oportunidad de desarrollar esta prueba técnica
- **React Team**: Por el excelente framework
- **Vite Team**: Por la herramienta de desarrollo moderna
- **TailwindCSS**: Por el sistema de diseño utility-first
- **Vitest**: Por el test runner rápido y moderno

---

<div align="center">

### ⭐ ¡Dale una estrella si te gustó el proyecto! ⭐

**Serie Numérica Calculator v1.0.0**  
_Una aplicación React moderna para cálculos matemáticos avanzados_

![Made with TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Made with React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Made with TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Made with Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

</div>
