import request from "supertest";
import app from "../src/server.js";


describe("Baterias pruebas server",()=>{

    test("servidor en endpoint /",async()=>{
        return await request(app)
        .get('/')
        .expect(200)
        //.expect("Content-Type",/json/)
    })

})