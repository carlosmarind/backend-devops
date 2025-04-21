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
});