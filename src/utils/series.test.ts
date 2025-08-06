import { describe, it, expect, beforeEach } from 'vitest';
import SerieNumerica from './series';

describe('SerieNumerica', () => {
  let serie: SerieNumerica;

  beforeEach(() => {
    serie = new SerieNumerica();
  });

  describe('calcularSerie', () => {
    it('debe calcular correctamente para n=0 (caso base)', () => {
      const resultado = serie.calcularSerie(0);
      expect(resultado).toBe(2);
    });

    it('debe calcular correctamente la serie para los primeros 10 números naturales', () => {
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

    it('debe manejar correctamente números más grandes dentro del límite', () => {
      const resultado15 = serie.calcularSerie(15);
      const esperado15 = 5 * 120 - 2 * 610 + 53;
      expect(resultado15).toBe(esperado15);

      const resultado20 = serie.calcularSerie(20);
      const esperado20 = 5 * 210 - 2 * 6765 + 73; // 1050 - 13530 + 73 = -12407
      expect(resultado20).toBe(esperado20);
    });

    it('debe calcular correctamente en el límite máximo permitido', () => {
      const maxN = 167;
      expect(() => serie.calcularSerie(maxN)).not.toThrow();
      
      const resultado = serie.calcularSerie(maxN);
      expect(typeof resultado).toBe('number');
      expect(isNaN(resultado)).toBe(false);
    });
  });

  describe('validaciones de entrada', () => {
    it('debe lanzar error para números no enteros', () => {
      expect(() => serie.calcularSerie(3.5)).toThrow(
        'El valor debe ser un número entero.'
      );
      expect(() => serie.calcularSerie(1.1)).toThrow(
        'El valor debe ser un número entero.'
      );
      expect(() => serie.calcularSerie(Math.PI)).toThrow(
        'El valor debe ser un número entero.'
      );
    });

    it('debe lanzar error para números negativos', () => {
      expect(() => serie.calcularSerie(-1)).toThrow(
        'El valor debe ser un número entero positivo.'
      );
      expect(() => serie.calcularSerie(-10)).toThrow(
        'El valor debe ser un número entero positivo.'
      );
      expect(() => serie.calcularSerie(-0.5)).toThrow(
        'El valor debe ser un número entero.'
      );
    });

    it('debe lanzar error cuando la posición del primo excede la tabla', () => {
      expect(() => serie.calcularSerie(169)).toThrow(
        'Posición de numero primo fuera de rango. El máximo es 168'
      );
      expect(() => serie.calcularSerie(200)).toThrow(
        'Posición de numero primo fuera de rango. El máximo es 168'
      );
    });

    it('debe manejar valores especiales', () => {
      expect(() => serie.calcularSerie(NaN)).toThrow();
      expect(() => serie.calcularSerie(Infinity)).toThrow();
      expect(() => serie.calcularSerie(-Infinity)).toThrow();
    });
  });

  describe('límites', () => {
    it('debe manejar el límite superior correctamente', () => {
      const resultado168 = serie.calcularSerie(168);
      expect(isNaN(resultado168)).toBe(true);
      expect(() => serie.calcularSerie(169)).toThrow();
    });
  });
});