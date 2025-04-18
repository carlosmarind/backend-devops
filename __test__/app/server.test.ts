import app, { response } from 'express';
import { request } from 'http';
import Request from "supertest"

describe("Pruebas de endpoint de /", () => {

    test("test de endpoint / holamundo", async () => {
        return await request(app)
        .get ('/')
        .expect(200)
        .then((response) => {
            expect(response.text).toContain('Hola mundo al usuario');
        });
    });
});