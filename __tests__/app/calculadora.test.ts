import { describe,test } from "@jest/globals";
import { suma, operar, restar, multiplicar, dividir, potencia, factorial } from "../../src/app/calculadora";
describe("Suite de test de calculadora",() => { 
    
    test("Prueba la suma de dos numeros", ()=> {
        
        let a:any = "10";
        
        expect(suma(1,1)).toBe(2);
        expect(suma(10,15)).toBe(25);
        expect(suma(10,15)).not.toBe(35);
        expect(suma(10,15)).toBe(25);
        expect(suma(a,15)).toBeNaN();

        a = 1.5;

        expect(suma(a,15)).toBe(16.5);


        a = Math.PI
        expect(suma(a,15)).toBeCloseTo(18.14,2);

        a = -10
        expect(suma(a,15)).toBe(5);

        a = undefined
        expect(() => { suma(a, 15) }).toThrow("No se puede sumar indefinidos");
    });

    test("Prueba la resta de dos numeros", ()=> {
        
        expect(restar(10,1)).toBe(9);

        let a:any = "10"
        expect(restar(10,a)).toBeNaN();


        a = undefined
        expect(() => { restar(a, 15) }).toThrow("No se puede restar indefinidos");
    });


    test("Prueba la multiplicación de dos numeros", ()=> {
        
        expect(multiplicar(10,1)).toBe(10);

        let a:any = "10"
        expect(multiplicar(10,a)).toBeNaN();


        a = undefined
        expect(() => { multiplicar(a, 15) }).toThrow("No se puede multiplicar indefinidos");
    });


    test("Prueba la division de dos numeros", ()=> {
        
        expect(dividir(10,2)).toBe(5);

        let a:any = "10"
        expect(dividir(10,a)).toBeNaN();


        a = undefined
        expect(() => { dividir(a, 15) }).toThrow("No se puede dividir indefinidos");
    });


    test("Prueba la potencia de 1 numero", ()=> {
        
        expect(potencia(10,2)).toBe(100);

        let a:any = "10";
        expect(potencia(10,a)).toBeNaN();

        a = 0;
        let b = 0;
        expect(potencia(0,0)).toBe("Indeterminado");

        a = undefined
        expect(() => { potencia(a, 15) }).toThrow("No se puede utilizar como base o exponente un indefinido");
    });

});