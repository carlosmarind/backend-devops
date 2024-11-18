import request from "supertest";
import app from "../src/server.js";


describe("Baterias pruebas server",()=>{

    test("servidor en endpoint /",async()=>{
        return await request(app)
        .get('/')
        .expect(200)
        //.expect("Content-Type",/json/)
    })

    test("servidor en endpoint /operar",async()=>{
        return await request(app)
        .get('/operar')
        .field('operacion', 'suma')
        .field('num1', '10')
        .field('num2', '1')
        .expect('El resultado de la operacion es: undefined')
        //.expect("Content-Type",/json/)
    })
   
    test("servidor en endpoint /palindromo",async()=>{
        return await request(app)
        .get('/palindromo?frase=oso')
        .expect('Hola, La frase ingresada es palindromo')
        //.expect("Content-Type",/json/)
    })

    test("servidor en endpoint /palindromo",async()=>{
        return await request(app)
        .get('/palindromo?frase=suma')
        .expect('Hola, La frase ingresada no es palindromo')
        //.expect("Content-Type",/json/)
    })

    test("servidor en endpoint /primo",async()=>{
        return await request(app)
        .get('/primo?numero=7')
        .expect('Hola, el numero ingresado es un numero primo')
        //.expect("Content-Type",/json/)
    })

    test("servidor en endpoint /primo",async()=>{
        return await request(app)
        .get('/primo?numero=1')
        .expect('Hola, el numero ingresado no es un numero primo')
        //.expect("Content-Type",/json/)
    })

    test("servidor en endpoint /api-key",async()=>{
        return await request(app)
        .get('/api-key')
        .expect('la apikey de mi aplicacion es: default-key')
        //.expect("Content-Type",/json/)
    })

    test("servidor en endpoint /api-username",async()=>{
        return await request(app)
        .get('/api-username')
        .expect('el username de mi aplicacion es: default')
        //.expect("Content-Type",/json/)
    })
})