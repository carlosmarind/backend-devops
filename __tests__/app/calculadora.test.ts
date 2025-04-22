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

        a = null
        expect(suma(a,15)).toBeNaN();


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

        a = null
        expect(restar(a,15)).toBeNaN();

        a = undefined
        expect(() => { restar(a, 15) }).toThrow("No se puede restar indefinidos");
    });


    test("Prueba la multiplicación de dos numeros", ()=> {
        
        expect(multiplicar(10,1)).toBe(10);

        let a:any = "10"
        expect(multiplicar(10,a)).toBeNaN();

        a = null
        expect(multiplicar(a,15)).toBeNaN();

        a = undefined
        expect(() => { multiplicar(a, 15) }).toThrow("No se puede multiplicar indefinidos");
    });


    test("Prueba la division de dos numeros", ()=> {
        
        expect(dividir(10,2)).toBe(5);

        let a:any = "10"
        expect(dividir(10,a)).toBeNaN();

        a = null
        expect(dividir(a,15)).toBeNaN();
        
        a = undefined
        expect(() => { dividir(a, 15) }).toThrow("No se puede dividir indefinidos");
    });


    test("Prueba la potencia de 1 numero", ()=> {
        
        expect(potencia(10,2)).toBe(100);

        let a:any = "10";
        expect(potencia(10,a)).toBeNaN();

        a = null
        expect(potencia(a,15)).toBeNaN();


        a = 0;
        let b = 0;
        expect(potencia(0,0)).toBe("Indeterminado");

        a = undefined
        expect(() => { potencia(a, 15) }).toThrow("No se puede utilizar como base o exponente un indefinido");
    });


    test("Prueba el exponencial 1 numero", ()=> {
        
        expect(factorial(10)).toBe(3628800);

        let a:any = "10";
        expect(factorial(a)).toBeNaN();

        a = null
        expect(factorial(a)).toBeNaN();


        a = 0;
        expect(factorial(0)).toBe(1);


        a = -10;
        expect(() => { factorial(a) }).toThrow("El factorial no está definido para números negativos");

        a = undefined
        expect(() => { factorial(a) }).toThrow("No se puede calcular el factorial de un indefinido");
    });

    test("Prueba la función operar", ()=> {
        
        expect(operar("suma",1,2)).toBe(3);

        expect(operar("resta",2,1)).toBe(1);
        
        expect(operar("multiplicacion",5,3)).toBe(15);

        expect(operar("division",15,3)).toBe(5);

        expect(operar("potencia",3,2)).toBe(9);

        expect(operar("factorial",8)).toBe(40320);

        expect(() => { operar("", 3) }).toThrow("Operación no soportada");

    });

});