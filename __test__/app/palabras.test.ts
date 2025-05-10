import { describe, test } from "@jest/globals";
import { esPalindromo} from "../../src/app/palabras";


describe("Suite de test de Palabras", () => {

    test("probar si es palimdromo", () => {
        expect(esPalindromo("salas")).toBe(true);
        expect(esPalindromo("Oso")).toBe(true);
        expect(esPalindromo("mascota")).toBe(false);
        expect(esPalindromo("")).toBe(false);
    });
});