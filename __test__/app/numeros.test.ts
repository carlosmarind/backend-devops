import { describe, test } from "@jest/globals";
import { esPrimo } from '../../src/app/numeros.js';
import { isUndefined } from "util";

describe("suite de test de numeros", () => {

    test("probar numeros primo", () => {
        expect(esPrimo(1)).toBe(false);
        expect(esPrimo(4)).toBe(false);
        expect(esPrimo(3)).toBe(true);
    });

});