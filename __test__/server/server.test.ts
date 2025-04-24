import app from "../../src/server.js";
import request from "supertest";

describe("Test de la API", () => {
    test("GET / responde con saludo personalizado", async () => {
        const res = await request(app)
            .get("/")
            .expect(200)
            .expect("Content-Type", /text\/html/);
        expect(res.text).toContain("Hola mundo al usuario");
    });

    test("GET /api-key responde con la apikey", async () => {
        const res = await request(app)
            .get("/api-key")
            .expect(200)
            .expect("Content-Type", /text\/html/);
        expect(res.text).toContain("la apikey de mi aplicacion es:");
    });

    test("GET /operar con suma", async () => {
        const res = await request(app)
            .get("/operar?operacion=suma&num1=5&num2=10")
            .expect(200);
        expect(res.text).toBe("El resultado de la operacion es: 15");
    });

    test("GET /operar con multiplicación", async () => {
        const res = await request(app)
            .get("/operar?operacion=multiplicar&num1=3&num2=4")
            .expect(200);
        expect(res.text).toBe("El resultado de la operacion es: 12");
    });

    test("GET /operar con resta", async () => {
        const res = await request(app)
            .get("/operar?operacion=resta&num1=10&num2=4")
            .expect(200);
        expect(res.text).toBe("El resultado de la operacion es: 6");
    });
    
    test("GET /operar con división", async () => {
        const res = await request(app)
            .get("/operar?operacion=dividir&num1=20&num2=4")
            .expect(200);
        expect(res.text).toBe("El resultado de la operacion es: 5");
    });
    
    test("GET /operar con potencia", async () => {
        const res = await request(app)
            .get("/operar?operacion=potencia&num1=2&num2=3")
            .expect(200);
        expect(res.text).toBe("El resultado de la operacion es: 8");
    });
    
    test("GET /operar con factorial", async () => {
        const res = await request(app)
            .get("/operar?operacion=factorial&num1=5")
            .expect(200);
        expect(res.text).toBe("El resultado de la operacion es: 120");
    });
    

    test("GET /operar con operación inválida devuelve error 500", async () => {
        const res = await request(app)
            .get("/operar?operacion=raiz&num1=9&num2=2")
            .expect(500);
        expect(res.text).toContain("Operación");
    });

    test("GET /primo con número primo", async () => {
        const res = await request(app)
            .get("/primo?numero=7")
            .expect(200);
        expect(res.text).toBe("Hola, el numero ingresado es un numero primo");
    });

    test("GET /primo con número no primo", async () => {
        const res = await request(app)
            .get("/primo?numero=8")
            .expect(200);
        expect(res.text).toBe("Hola, el numero ingresado no es un numero primo");
    });

    test("GET /palindromo con frase palíndroma", async () => {
        const res = await request(app)
            .get("/palindromo?frase=Anita lava la tina")
            .expect(200);
        expect(res.text).toBe("Hola, La frase ingresada es palindromo");
    });

    test("GET /palindromo con frase no palíndroma", async () => {
        const res = await request(app)
            .get("/palindromo?frase=Hola mundo")
            .expect(200);
        expect(res.text).toBe("Hola, La frase ingresada no es palindromo");
    });
});
