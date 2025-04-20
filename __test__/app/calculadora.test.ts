import { describe, test } from "@jest/globals";
import {restar, suma, multiplica, divide, potencia, factorial} from "../../src/app/calculadora";

describe("suite de test de calculadora", () => {

    test("probar suma de enteros", () => {
        let a: any = "10";
        expect(suma(1,1)).toBe(2);
        expect(suma(10,15)).toBe(25);
        expect(suma(a,15)).toBeNaN();
    });

    test("probar resta de enteros", () => {
        let a: any = "10";
        expect(restar(10,5)).toBe(5);
        expect(restar(1,1)).toBe(0);
        expect(restar(1,10)).toBe(-9);
        expect(restar(a,15)).toBeNaN();
    });

    test("probar multiplicación de enteros", () => {
        let a: any = "10";
        expect(multiplica(10,5)).toBe(50);
        expect(multiplica(1,1)).toBe(1);
        expect(multiplica(1,10)).toBe(10);
        expect(multiplica(a,15)).toBeNaN();
    });

    test("probar divición de enteros", () => {
        let a: any = "10";
        //expect(divide(10,5)).toBe(2);
        expect(divide(1,1)).toBe(1);
        expect(divide(10,10)).toBe(1);
        //expect(divide(a,15)).toBeNaN();
        //expect(divide(0,0)).toBe("No se puede dividir el número 0");
    });

    test("probar potencia de enteros", () => {
        let a: any = "10";
        expect(potencia(10,5)).toBe(100000);
        expect(potencia(1,1)).toBe(1);
        expect(potencia(1,10)).toBe(1);
        expect(potencia(a,15)).toBeNaN();
    });
    test("probar factorial de un número", () => {
        let a: any = "10";
        expect(factorial(5)).toBe(120);
        expect(factorial(4)).toBe(24);
        expect(factorial(6)).toBe(720);
        //expect(factorial(a)).toBeNaN();
    });

});