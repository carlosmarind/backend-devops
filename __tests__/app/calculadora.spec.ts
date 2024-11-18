import { describe,test } from "@jest/globals";
import { suma,restar,operar } from "../../src/app/calculadora";
import { esPalindromo } from '../../src/app/palabras.js';
import { esPrimo } from '../../src/app/numeros.js';

describe("Nombre de la suite de test",()=> {
    test("Prueba basica",()=>{
        expect(1).toBe(1);
    });

    test("Sumar en la calculadora",()=>{
        const resultado = suma(2,3)
        expect(resultado).toBe(5);
    });

    test("Sumar en la calculadora para fallo",()=>{
        const resultado = suma(3,3)
        expect(resultado).toBe(6);
    });
    let a:any = 1
    let b:any = undefined

    test("Sumar", () => {
        expect(() => {suma(a,b)}).toThrowError('No se puede sumar indefinidos');
        a = 1
        b = "aS"
        expect(suma(1,b)).toBeNaN();

      });

    test("Restar en la calculadora",()=>{
        let resultado = restar(3,3)
        expect(resultado).toBe(0);

        resultado = restar(2,3)
        expect(resultado).not.toBe(1);
        a = 1
        b = undefined
    
        expect(() => {restar(1,b)}).toThrowError('No se puede restar indefinidos');
        a= 1
        b= ""
        expect(restar(1,b)).toBeNaN();

    });

    test("Operar en la calculadora",()=>{
        let resultado = operar("suma",3,3)
        expect(resultado).toBe(6);

        resultado = operar("resta",2,3)
        expect(resultado).toBe(-1);

        resultado = operar("resta",2,3)
        expect(resultado).not.toBe(1);
        a = 1
        b = undefined
    
        a= 1
        b= ""

        expect(operar("resta",1,b)).toBeNaN();

        expect(operar(undefined,1,b)).toBeUndefined();

    });

    test("multiplicar",()=>{
        let resultado = operar("multiplicar",3,3)
        expect(resultado).toBe(9);

        resultado = operar("multiplicar",2,-3)
        expect(resultado).toBe(-6);

        resultado = operar("multiplicar",2,3)
        expect(resultado).not.toBe(1);
        a = 1
        b = undefined
        expect(() => {operar("multiplicar",1,b)}).toThrowError('No se puede multiplicar indefinidos');

        a= 1
        b= ""

        expect(operar("multiplicar",1,b)).toBeNaN();

        expect(operar(undefined,1,b)).toBeUndefined();

    });
    test("dividir",()=>{
        let resultado = operar("dividir",3,3)
        expect(resultado).toBe(1);

        resultado = operar("dividir",6,3)
        expect(resultado).toBe(2);

        resultado = operar("dividir",2,3)
        expect(resultado).not.toBe(1);

        expect(() => {operar("dividir",1,0)}).toThrowError('No se puede realizar la division');

        a = 1
        b = undefined
        expect(() => {operar("dividir",1,b)}).toThrowError('No se puede dividir indefinidos');

        a= 1
        b= ""

        expect(operar("dividir",1,b)).toBeNaN();

        expect(operar(undefined,1,b)).toBeUndefined();

    });

    test("potenciar",()=>{
        let resultado = operar("potenciar",3,3)
        expect(resultado).toBe(27);

        resultado = operar("potenciar",2,-3)
        expect(resultado).toBe(0.125);

        resultado = operar("potenciar",2,3)
        expect(resultado).not.toBe(1);
        a = 1
        b = undefined
        expect(() => {operar("potenciar",1,b)}).toThrowError('No se pueden potenciar indefinidos');

        a= 1
        b= ""

        expect(operar("potenciar",1,b)).toBeNaN();

        expect(operar(undefined,1,b)).toBeUndefined();

    });

    test("factorial",()=>{
        let resultado = operar("factorial",5,0)
        expect(resultado).toBe(120);

        resultado = operar("factorial",2,0)
        expect(resultado).not.toBe(1);

        b = undefined
        expect(() => {operar("factorial",b,0)}).toThrowError('No se puede calcular el factorial de indefinido');

        b= ""
        expect(operar("factorial",b,0)).toBeNaN();

        expect(() => {operar("factorial",-1,0)}).toThrowError('No se puede calcular el factorial de un numero negativo');


        expect(operar(undefined,1,b)).toBeUndefined();

    });

    test("primo",()=>{
        let resultado = esPrimo(7)
        expect(resultado).toBe(true);
        resultado = esPrimo(1)
        expect(resultado).toBe(false);
        resultado = esPrimo(10)
        expect(resultado).not.toBe(true);
    });

    test("esPalindromo",()=>{
        let resultado = esPalindromo("oso")
        expect(resultado).toBe(true);
        resultado = esPalindromo("lalo")
        expect(resultado).toBe(false);
        resultado = esPalindromo("")
        expect(resultado).toBe(false);
    });
});