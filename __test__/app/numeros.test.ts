import { describe, test } from "@jest/globals";
import { esPrimo} from "../../src/app/numeros";


describe("Suite de test de Numeros", () => {

    test("probar suma de enteros", () => {
        expect(esPrimo(3)).toBe(true);
        expect(esPrimo(1)).toBe(false);
        expect(esPrimo(20)).toBe(false);
    });
});