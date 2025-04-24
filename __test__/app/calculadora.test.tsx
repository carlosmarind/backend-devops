import { describe, test, expect } from "@jest/globals";
import { suma, restar, multiplicar, dividir, operar, potencia, factorial } from "../../src/app/calculadora";

describe("Suite de Test para la calculadora", () => {
    // ----------Suma-----------
    test("suma de números enteros", () => {
        expect(suma(1, 2)).toBe(3);
    });
    
    test("suma con número negativo", () => {
        expect(suma(-1, 2)).toBe(1);
    });
    
    test("suma con decimales", () => {
        expect(suma(1.5, 2.3)).toBeCloseTo(3.8);
    });
    
    test("suma con undefined lanza error", () => {
        let a:any = undefined;
        expect(() => suma(a, 2)).toThrow("No se puede sumar indefinidos");
    });
    
    test("suma con null lanza error", () => {
        let a:any = null;
        expect(() => suma(a, 2)).toThrow("No se puede sumar null");
    });
    
    test("suma con string lanza NaN", () => {
        let a:any = "hola";
        expect(suma(a, 2)).toBeNaN();
    });
    
    test("suma con NaN lanza NaN", () => {
        expect(suma(NaN, 2)).toBeNaN();
    });
    
    test("suma con objeto lanza NaN", () => {
        let a:any = {};
        expect(suma(a, 2)).toBeNaN();
    });
    
    test("suma con array lanza NaN", () => {
        let a:any = [1];
        expect(suma(a, 2)).toBeNaN();
    });
    

    // ---------Resta----------
    test("resta de números enteros", () => {
        expect(restar(5, 3)).toBe(2);
    });
    
    test("resta con negativos", () => {
        expect(restar(-2, -3)).toBe(1);
    });
    
    test("resta con decimales", () => {
        expect(restar(5.5, 2.2)).toBeCloseTo(3.3);
    });
    
    test("resta con undefined lanza error", () => {
        let a:any = undefined;
        expect(() => restar(a, 1)).toThrow("No se puede restar indefinidos");
    });
    
    test("resta con null lanza error", () => {
        let a:any = null;
        expect(() => restar(a, 2)).toThrow("No se puede restar null");
    });

    test("resta con NaN lanza NaN", () => {
        expect(restar(NaN, 2)).toBeNaN();
    });
    
    test("resta con string devuelve NaN", () => {
        let a:any = "hola";
        expect(restar(1, a)).toBeNaN();
    });
    

    // -----Multiplicación------
    test("multiplicación de números enteros", () => {
        expect(multiplicar(2, 3)).toBe(6);
    });

    test("multiplicación con decimales", () => {
        expect(multiplicar(2.5, 4)).toBe(10);
    });

    test("multiplicación por 0", () => {
        expect(multiplicar(5, 0)).toBe(0);
    });

    test("multiplicación con undefined lanza error", () => {
        let a:any = undefined;
        expect(() => multiplicar(2, a)).toThrow("No se puede multiplicar indefinidos");
    });

    test("multiplicación con null lanza error", () => {
        let a:any = null;
        expect(() => multiplicar(2, a)).toThrow("No se puede multiplicar null");
    });

    test("multiplicación con NaN lanza error", () => {
        expect(multiplicar(2, NaN)).toBeNaN();
        expect(multiplicar(NaN, 2)).toBeNaN();
    });

    test("multiplicación con string devuelve NaN", () => {
        let a:any = "hola";
        expect(multiplicar(2, a)).toBeNaN();
    });

    // ----------División-----------
    test("división de números enteros", () => {
        expect(dividir(6, 3)).toBe(2);
    });

    test("división con decimales", () => {
        expect(dividir(5, 2)).toBe(2.5);
    });

    test("división por cero lanza error", () => {
        expect(() => dividir(5, 0)).toThrow("No se puede dividir por cero");
    });

    test("división con undefined lanza error", () => {
        let a:any = undefined;
        expect(() => dividir(a, 1)).toThrow("No se puede dividir indefinidos");
    });

    test("división con null lanza error", () => {
        let a:any = null;
        expect(() => dividir(a, 1)).toThrow("No se puede dividir null");
    });

    test("división con NaN lanza error", () => {
        expect(dividir(2, NaN)).toBeNaN();
        expect(dividir(NaN, 2)).toBeNaN();
    });

    test("división con string devuelve NaN", () => {
        let a:any = "hola";
        expect(dividir(a, 2)).toBeNaN();
    });

    // ----------Operar----------
    test("operar suma", () => {
        expect(operar("suma", 2, 3)).toBe(5);
    });

    test("operar resta", () => {
        expect(operar("resta", 5, 2)).toBe(3);
    });

    test("operar multiplicación", () => {
        expect(operar("multiplicar", 3, 4)).toBe(12);
    });

    test("operar división", () => {
        expect(operar("dividir", 10, 2)).toBe(5);
    });

    test("operar división por cero lanza error", () => {
        expect(() => operar("dividir", 10, 0)).toThrow("No se puede dividir por cero");
    });

    test("operar con operación no válida lanza error", () => {
        expect(() => operar("raiz", 2, 3)).toThrow('Operación no válida: "raiz"');
    });

    test("operar sin operación lanza error", () => {
        let a:any = undefined;
        expect(() => operar(a, 1, 2)).toThrow();
    });

    test("operar sin operación lanza error", () => {
        let a:any = null;
        expect(() => operar(a, 1, 2)).toThrow();
    });

    // ----------Potencia----------
    test("potencia de número positivo", () => {
        expect(potencia(2, 3)).toBe(8);
    });

    test("potencia de número con exponente 0", () => {
        expect(potencia(5, 0)).toBe(1);
    });

    test("potencia de 0 elevado a cualquier número positivo", () => {
        expect(potencia(0, 5)).toBe(0);
    });

    test("potencia con exponente 1", () => {
        expect(potencia(9, 1)).toBe(9);
    });

    test("potencia con número negativo", () => {
        expect(potencia(-2, 3)).toBe(-8);
    });

    test("potencia con número negativo y exponente par", () => {
        expect(potencia(-2, 2)).toBe(4);
    });

    test("potencia con número decimal", () => {
        expect(potencia(4, 0.5)).toBe(2); 
    });

    test("lanzar error si a o b son undefined", () => {
        let a:any = undefined;
        expect(() => potencia(a, 2)).toThrow("No se puede operar con valores indefinidos");
    });

    test("lanzar error si a o b son null", () => {
        let a:any = null;
        expect(() => potencia(a, 2)).toThrow("No se puede operar con valores null");
    });

    test("lanzar NaN si a o b son NaN", () => {
        expect(potencia(NaN, 2)).toBeNaN();
        expect(potencia(2, NaN)).toBeNaN();
    });

    test("retorna NaN si los argumentos no son números", () => {
        let a:any = "hola";
        expect(potencia(a, 2)).toBeNaN();
    });

    // ----------Factorial----------

    test("factorial de 0 debe ser 1", () => {
        expect(factorial(0)).toBe(1);
    });

    test("factorial de 1 debe ser 1", () => {
        expect(factorial(1)).toBe(1);
    });

    test("factorial de 5 debe ser 120", () => {
        expect(factorial(5)).toBe(120);
    });

    test("factorial de 7 debe ser 5040", () => {
        expect(factorial(7)).toBe(5040);
    });

    test("factorial de un número no entero lanza error", () => {
        expect(() => factorial(3.5)).toThrow("La entrada debe ser un número entero");
    });

    test("factorial de número negativo lanza error", () => {
        expect(() => factorial(-3)).toThrow("No se puede calcular el factorial de un número negativo");
    });

    test("factorial de null lanza error", () => {
        let a:any = null;
        expect(() => factorial(a)).toThrow("La entrada debe ser un número válido");
    });
    
    test("factorial de undefined lanza error", () => {
        let a:any = undefined;
        expect(() => factorial(a)).toThrow("La entrada debe ser un número válido");
    });
    
    test("factorial de NaN lanza error", () => {
        expect(() => factorial(NaN)).toThrow("La entrada debe ser un número válido");
    });
    
    test("factorial de string lanza error", () => {
        let a:any = "hola";
        expect(() => factorial(a)).toThrow("La entrada debe ser un número válido");
    });
    
    test("factorial de objeto lanza error", () => {
        let a:any = {};
        expect(() => factorial(a)).toThrow("La entrada debe ser un número válido");
    });

});
