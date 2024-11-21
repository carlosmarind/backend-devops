import { describe, test, expect } from "@jest/globals";
import { suma, restar, operar, multiplicar, dividir, potencia, factorial } from "../../src/app/calculadora";

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
        let b: any = "a";
        expect(operar("suma", a, b)).toBeNaN();

        a = 1;
        b = undefined;
        expect(() => operar("suma", a, b)).toThrowError("No se puede sumar indefinidos");

        a = 1;
        b = undefined;
        expect(() => operar("resta", a, b)).toThrowError("No se puede restar indefinidos");

        expect(operar(undefined, 10, 20)).not.toBeDefined();

        expect(operar("multiplicar", 10, 20)).toBe(200);

        a = 10;
        b = 20;
        expect(operar("multiplicar", a, b)).not.toBe(100);

        let f: any = 1;
        let g: any = "a";
        expect(operar("multiplicar", f, g)).toBeNaN();

        a = 1;
        b = undefined;
        expect(() => operar("multiplicar", a, b)).toThrowError("No se puede multiplicar indefinidos");

        a = 1;
        b = 1;

        expect(operar("dividir", a, b)).not.toBe(2);

        expect(operar("dividir", f, g)).toBeNaN();

        a = 1;
        b = 0;
        expect(() => operar("dividir", a, b)).toThrowError("No se puede dividir por 0");
        
        a = 1;
        b = undefined;
        expect(() => operar("dividir", a, b)).toThrowError("No se puede dividir indefinidos");

        a = 2;
        b = 3;

        expect(operar("potencia", a, b)).toBe(8);

        a = 1;
        b = undefined;
        expect(() => operar("potencia", a, b)).toThrowError("No se puede elevar a potencia indefinidos");

        let l: any = "a";
        expect(operar("potencia", l, 0)).toBeNaN();

        let c = 0;
        a = 3;
        expect(operar("factorial", a, c)).toBe(6);

        expect(() => operar("factorial", b, c)).toThrowError("No se puede calcular el factorial de indefinidos");
        
        expect(operar("factorial", a, c)).not.toBe(27);

        expect(operar("factorial", l, 0)).toBeNaN();

        expect(operar("factorial", 1, 0)).toBe(1);
    });

});