import { describe, test } from "@jest/globals";
import {restar, suma} from "../../src/app/calculadora";

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
        expect(suma(a,15)).toBeNaN();
    });
});