import { describe, test } from "@jest/globals";
import {operar, restar, suma, multiplica, divide, potencia, factorial} from "../../src/app/calculadora";
import { isUndefined } from "util";

describe("suite de test de calculadora", () => {

    test("probar suma de enteros", () => {
        let a: any = undefined;
        expect(suma(1,1)).toBe(2);
        expect(suma(10,15)).toBe(25);
        expect(suma(a,15)).toBeNaN();
    });

    test("probar resta de enteros", () => {          
        let a: any = undefined;
        expect(restar(1,1)).toBe(0);
        expect(restar(15,10)).toBe(5);
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
        let a: any = undefined;
        expect(divide(1,1)).toBe(1);
        expect(divide(10,10)).toBe(1);
        expect(divide(a,15)).toBeNaN();
    });

    test("probar potencia de enteros", () => {
        let a: any = undefined;
        expect(potencia(10,5)).toBe(100000);
        expect(potencia(1,1)).toBe(1);
        expect(potencia(1,10)).toBe(1);
        expect(potencia(a,15)).toBeNaN();
    });
    test("probar factorial de un número", () => {
        let a: any = undefined;
        expect(factorial(5)).toBe(120);
        expect(factorial(4)).toBe(24);
        expect(factorial(6)).toBe(720);
        expect(factorial(a)).toBeNaN();
    });

    test("probar operar de un número", () => {
        let a: any = undefined;
        expect(operar("suma",1,2)).toBe(3);
        expect(operar("factorial",5,0)).toBe(120);
        expect(operar("resta",2,2)).toBe(0);
        expect(operar("multiplica",1,2)).toBe(2);
        expect(operar("divide",1,1)).toBe(1);
        expect(operar("potencia",10,5)).toBe(100000);
    });
});