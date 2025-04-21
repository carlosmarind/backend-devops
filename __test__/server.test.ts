import { application } from 'express';
import app from '../src/server.js';
import Request from "supertest"

describe("Pruebas de endpoint de /", () => {

    test("test de endpoint / hola mundo", async () => {
        return await Request(app)
        .get ('/')
        .expect(200)
        .expect('Content-type',/text\/html/)
        .then((response) => {
            expect(response.text).toContain('Hola mundo al usuario');
        });
    });

    test("test de endpoint /api-key", async () => {
        return await Request(app)
        .get ('/api-key')
        .expect(200)
        .expect('Content-type', /application\/json/)
        .then((response) => {
            expect(response.body.data).toContain(`la apikey de mi aplicacion es`);
        });
    });

    test("test de endpoint /operar", async () => {
        return await Request(app)
        .get ('/operar?operacion=resta&num1=2000&num2=1')
        .expect(200)
        .expect('Content-type',/text\/html/)
        .then((response) => {
            expect(response.text).toContain(`El resultado de la operacion es: 1999`);
        });
    });

    test("test de endpoint /operar", async () => {
        return await Request(app)
        .get ('/palindromo?frase=qwerewq')
        .expect(200)
        .expect('Content-type',/text\/html/)
        .then((response) => {
            expect(response.text).toContain(`Hola, La frase ingresada es palindromo`);
        });
    });

    test("test de endpoint /operar", async () => {
        return await Request(app)
        .get ('/palindromo?frase=mono')
        .expect(200)
        .expect('Content-type',/text\/html/)
        .then((response) => {
            expect(response.text).toContain(`Hola, La frase ingresada no es palindromo`);
        });
    });
    
    test("test de endpoint /primo", async () => {
        return await Request(app)
        .get ('/primo?numero=7')
        .expect(200)
        .expect('Content-type',/text\/html/)
        .then((response) => {
            expect(response.text).toContain(`Hola, el numero ingresado es un numero primo`);
        });
    });

    test("test de endpoint /primo", async () => {
        return await Request(app)
        .get ('/primo?numero=4')
        .expect(200)
        .expect('Content-type',/text\/html/)
        .then((response) => {
            expect(response.text).toContain(`Hola, el numero ingresado no es un numero primo`);
        });
    });

});