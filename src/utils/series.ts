class SerieNumerica {

    // Método principal para calcular la serie
    public calcularSerie(n: number): number {
        // ⚠️ Validación de entrada
        if (!Number.isInteger(n) || n < 1) {
            throw new Error("La entrada debe ser un número entero positivo.");
        }

        const triangular: number = this._calcularTriangular(n);
        const fibonacci: number = this._calcularFibonacci(n);
        const primo: number = this._calcularPrimo(n + 1);

        // Fórmula principal de la serie
        return 5 * triangular - 2 * fibonacci + primo;
    }

    // Método auxiliar para calcular el número triangular
    private _calcularTriangular(n: number): number {
        return (n * (n + 1)) / 2;
    }

    // Método auxiliar para calcular el número de Fibonacci
    private _calcularFibonacci(n: number): number {
        if (n <= 1) {
            return n;
        }

        let a: number = 0;
        let b: number = 1;

        for (let i = 2; i <= n; i++) {
            const temp: number = a + b;
            a = b;
            b = temp;
        }

        return b;
    }

    // Método auxiliar para obtener el n-ésimo número primo
    // Nota: Para fines del ejemplo, se usa una tabla precalculada.
    private _calcularPrimo(posicion: number): number {
        const primos: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
        
        if (posicion > primos.length) {
            throw new Error("Posición de primo fuera de los límites de la tabla.");
        }
        
        return primos[posicion - 1];
    }
}

// Exportar la clase para poder usarla en otros archivos
export default SerieNumerica;

// O también puedes exportarla de forma nombrada:
// export { SerieNumerica };
