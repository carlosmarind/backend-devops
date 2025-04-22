
import { response } from 'express';
import app from '../src/server.js';
import request from 'supertest';

describe('Probar endpoints de /', ()=> {

    it('test de endpoint / hola Mundo',async()=> {
        return await request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type',/text\/html/)
        .then((response) => {
            expect(response.text).toContain('Hola mundo al usuario')
        });
    });


    it('test de endpoint / api-key',async()=> {
        return await request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type',/text\/html/)
        .then((response) => {
            expect(response.text).toContain('Hola mundo al usuario')
        });
    });
});