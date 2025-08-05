import { describe, it, expect, beforeEach } from 'vitest';
import SerieNumerica from './series';

describe('SerieNumerica', () => {
  let serie: SerieNumerica;

  beforeEach(() => {
    serie = new SerieNumerica();
  });

  describe('calcularSerie', () => {
    it('debe calcular correctamente la serie para los primeros 10 números naturales', () => {
      // Casos de prueba con valores esperados
      // Fórmula: 5 * triangular - 2 * fibonacci + primo(n+1)
      const casosEsperados = [
        { n: 1, esperado: 5 * 1 - 2 * 1 + 3 }, // 5 - 2 + 3 = 6
        { n: 2, esperado: 5 * 3 - 2 * 1 + 5 }, // 15 - 2 + 5 = 18
        { n: 3, esperado: 5 * 6 - 2 * 2 + 7 }, // 30 - 4 + 7 = 33
        { n: 4, esperado: 5 * 10 - 2 * 3 + 11 }, // 50 - 6 + 11 = 55
        { n: 5, esperado: 5 * 15 - 2 * 5 + 13 }, // 75 - 10 + 13 = 78
        { n: 6, esperado: 5 * 21 - 2 * 8 + 17 }, // 105 - 16 + 17 = 106
        { n: 7, esperado: 5 * 28 - 2 * 13 + 19 }, // 140 - 26 + 19 = 133
        { n: 8, esperado: 5 * 36 - 2 * 21 + 23 }, // 180 - 42 + 23 = 161
        { n: 9, esperado: 5 * 45 - 2 * 34 + 29 }, // 225 - 68 + 29 = 186
        { n: 10, esperado: 5 * 55 - 2 * 55 + 31 }, // 275 - 110 + 31 = 196
      ];

      casosEsperados.forEach(({ n, esperado }) => {
        const resultado = serie.calcularSerie(n);
        expect(resultado).toBe(esperado);
      });
    });

    it('debe lanzar error para números no enteros', () => {
      expect(() => serie.calcularSerie(3.5)).toThrow(
        'La entrada debe ser un número entero positivo.'
      );
    });

    it('debe lanzar error para números negativos', () => {
      expect(() => serie.calcularSerie(-1)).toThrow(
        'La entrada debe ser un número entero positivo.'
      );
    });

    it('debe lanzar error para cero', () => {
      expect(() => serie.calcularSerie(0)).toThrow(
        'La entrada debe ser un número entero positivo.'
      );
    });

    it('debe lanzar error cuando la posición del primo excede la tabla', () => {
      // La tabla tiene 25 primos, así que n=25 necesitaría el primo en posición 26
      expect(() => serie.calcularSerie(25)).toThrow(
        'Posición de primo fuera de los límites de la tabla.'
      );
    });
  });

  describe('métodos auxiliares indirectos', () => {
    it('debe manejar el caso base de fibonacci (n=1)', () => {
      const resultado = serie.calcularSerie(1);
      expect(resultado).toBe(6); // 5*1 - 2*1 + 3
    });

    it('debe calcular correctamente para números más grandes dentro del límite', () => {
      const resultado = serie.calcularSerie(15);
      // triangular(15) = 120, fibonacci(15) = 610, primo(16) = 53
      const esperado = 5 * 120 - 2 * 610 + 53; // 600 - 1220 + 53 = -567
      expect(resultado).toBe(esperado);
    });
  });
});
/// <reference types="vitest" />
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts', // Comentar esta línea
  },
});