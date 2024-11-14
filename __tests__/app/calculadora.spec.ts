import { describe,test } from "@jest/globals";
import { suma,restar,operar } from "../../src/app/calculadora";

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



});