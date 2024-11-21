import { describe, test, expect } from "@jest/globals";
import { suma, operar, restar, multiplicar, dividir, potencia, factorial } from "../../src/app/calculadora";


describe("Bateria de test de calculadora", () => {

    describe("Pruebas de Suma", () => {
        test("Suma de números válidos", () => {
            expect(suma(3, 2)).toBe(5);
        });

        test("Suma con valores indefinidos", () => {
            expect(() => suma(undefined as unknown as number, 2)).toThrow("No se puede sumar indefinidos");
        });

        test("Suma con valores no numéricos", () => {
            expect(suma("a" as unknown as number, 2)).toBeNaN();
        });
    });

    describe("Pruebas de Resta", () => {
        test("Resta de números válidos", () => {
            expect(restar(5, 2)).toBe(3);
        });

        test("Resta con valores indefinidos", () => {
            expect(() => restar(undefined as unknown as number, 2)).toThrow("No se puede restar indefinidos");
        });

        test("Resta con valores no numéricos", () => {
            expect(restar("a" as unknown as number, 2)).toBeNaN();
        });
    });

    describe("Pruebas de Multiplicación", () => {
        test("Multiplicación de números válidos", () => {
            expect(multiplicar(3, 2)).toBe(6);
        });

        test("Multiplicación con valores indefinidos", () => {
            expect(() => multiplicar(undefined as unknown as number, 2)).toThrow("No se puede multiplicar indefinidos");
        });

        test("Multiplicación con valores no numéricos", () => {
            expect(multiplicar("a" as unknown as number, 2)).toBeNaN();
        });
    });

    describe("Pruebas de División", () => {
        test("División de números válidos", () => {
            expect(dividir(6, 2)).toBe(3);
        });

        test("División por cero", () => {
            expect(dividir(6, 0)).toBe(Infinity);
        });

        test("División con valores indefinidos", () => {
            expect(() => dividir(undefined as unknown as number, 2)).toThrow("No se puede dividir indefinidos");
        });

        test("División con valores no numéricos", () => {
            expect(dividir("a" as unknown as number, 2)).toBeNaN();
        });
    });

    describe("Pruebas de Potencia", () => {
        test("Potencia de números válidos", () => {
            expect(potencia(2, 3)).toBe(8);
        });

        test("Potencia con valores indefinidos", () => {
            expect(() => potencia(undefined as unknown as number, 2)).toThrow("No se puede dividir indefinidos");
        });

        test("Potencia con valores no numéricos", () => {
            expect(potencia("a" as unknown as number, 2)).toBeNaN();
        });
    });

    describe("Pruebas de Factor", () => {
        test("Factorial de un número válido", () => {
            expect(factorial(5)).toBe(120);
        });

        test("Factorial de 0", () => {
            expect(factorial(0)).toBe(1);
        });

        test("Factorial de un número negativo", () => {
            expect(() => factorial(-1)).toThrow("El número debe ser mayor o igual a 0.");
        });
    });

    describe("Operar", () => {
        test("Operación suma válida", () => {
            expect(operar("suma", 4, 3)).toBe(7);
        });

        test("Operación resta válida", () => {
            expect(operar("resta", 7, 4)).toBe(3);
        });

        test("Operación multiplicación válida", () => {
            expect(operar("multiplica", 3, 3)).toBe(9);
        });

        test("Operación división válida", () => {
            expect(operar("divide", 8, 2)).toBe(4);
        });

        test("Operación potencia válida", () => {
            expect(operar("potencia", 2, 4)).toBe(16);
        });

        test("Operación factorial válida", () => {
            expect(operar("factor", 5, 0)).toBe(120);
        });

        test("Operación desconocida", () => {
            expect(operar("desconocida", 4, 3)).toBeUndefined();
        });
    });
});

/*

//import { suma, restar, operar } from "../../src/app/calculadora";

describe("Bateria de test de calculadora", () => {

    test("Prueba basica", () => {
        expect(1).toBe(1);
    });

    test("Sumar en la calculadora", () => {

        expect(suma(1, 2)).toBe(3);

        expect(suma(5, 5)).toBe(10);

        expect(suma(15, 15)).toBe(30);

        expect(suma(1, 5)).not.toBe(0);

        let a: any = 1;
        let b: any = "a"
        expect(suma(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => suma(a, b)).toThrowError("No se puede sumar indefinidos");

    });

    test("Restar en la calculadora", () => {
        expect(restar(5, 2)).toBe(3);

        expect(restar(15, 5)).toBe(10);

        expect(restar(45, 15)).toBe(30);

        expect(restar(10, 5)).not.toBe(0);

        let a: any = 1;
        let b: any = "a"
        expect(restar(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => restar(a, b)).toThrowError("No se puede restar indefinidos");
    });

    test("Operar en la calculadora", () => {

        expect(operar("suma", 10, 20)).toBe(30);
        expect(operar("resta", 5, 2)).toBe(3);
        expect(operar("suma", 5, 5)).toBe(10);
        expect(operar("resta", 15, 5)).toBe(10);
        expect(operar("suma", 15, 15)).toBe(30);
        expect(operar("resta", 45, 15)).toBe(30);
        expect(operar("suma", 1, 5)).not.toBe(0);

        let a: any = 1;
        let b: any = "a"
        expect(operar("suma", a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => operar("suma", a, b)).toThrowError("No se puede sumar indefinidos");

        a = 1;
        b = undefined;
        expect(() => operar("resta", a, b)).toThrowError("No se puede restar indefinidos");

        expect(operar(undefined, 10, 20)).not.toBeDefined();

        expect(operar("multiplicar", 10, 20)).not.toBeDefined();
    });

});

*/