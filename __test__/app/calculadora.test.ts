import { describe, test } from "@jest/globals";
import { operar, restar, suma, multiplica, divide, potencia,factorial} from "../../src/app/calculadora";


describe("Suite de test de calculadora", () => {

    test("probar suma de enteros", () => {

        expect(suma(1, 1)).toBe(2);
        expect(suma(10, 15)).toBe(25);
        expect(suma(10, 15)).not.toBe(30);

        let a: any = "10";
        let b: any = "15";
        expect(suma(a, 15)).toBeNaN();
        expect(suma(a, b)).toBeNaN();

        a = 1.5
        expect(suma(a, 15)).toBe(16.5)

        a = null
        expect(suma(a, 15)).toBeNaN();

        a = Math.PI
        expect(suma(a, 15)).toBeCloseTo(18.14, 2);

        a = -10
        expect(suma(a, 15)).toBe(5);

        a = undefined
        expect(() => { suma(a, 15) }).toThrow("No se puede sumar indefinidos");
    });

    test("probar resta de enteros", () => {

        expect(restar(10, 1)).toBe(9);

        let a: any = "10";
        expect(restar(a, 1)).toBeNaN();

        a = undefined
        expect(() => { restar(a, 1) }).toThrow("No se puede restar indefinidos");
    })

    test("probar multiplicacion de enteros", () => {


        let a: any = "10";
        let b: any = "15";
        expect(multiplica(a, 15)).toBeNaN();
        expect(multiplica(a, b)).toBeNaN();

        expect(multiplica(5, 2)).toBe(10);

        a = undefined
        expect(() => { multiplica(a, 15) }).toThrow("No se puede multiplicar indefinidos");

    })

    test("probar division de enteros", () => {

        let a: any = "10";
        let b: any = "15";
        expect(divide(a, 15)).toBeNaN();
        expect(divide(a, b)).toBeNaN();

        expect(divide(10, 5)).toBe(2);

        a = undefined
        expect(() => { divide(a, 15) }).toThrow("No se puede dividir indefinidos");
    })

    test("probar potencias", () => {

        expect(potencia(2, 3)).toBe(8);
        expect(potencia(5, 0)).toBe(1);
        expect(potencia(2, -3)).toBe(0.125);

    })
    test("probar operar de todas las operaciones", () => {

        expect(operar('suma',1, 3)).toBe(4);
        expect(operar('resta',10, 5)).toBe(5);
        expect(operar('multiplica', 3, 2)).toBe(6);
        expect(operar('divide',100, 50)).toBe(2);
        expect(operar('potencia',5, 0)).toBe(1);
        expect(operar('factorial',5,0)).toBe(120);
        //expect(operar("",1,2)).toThrow("La operacion no existe");
        /*let a: any = null;
        let b: any = null;
        expect(operar('factorial',a,b)).toThrow("Este parametro no puede ser nulo");*/

    })

    test("probar factorial", () => {
        expect(factorial(-2)).toBeNaN();

        expect(factorial(5)).toBe(120);
        

    })


});