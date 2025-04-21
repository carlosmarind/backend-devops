import { describe, test } from "@jest/globals";
import { esPalindromo } from '../../src/app/palabras.js';
import { isUndefined } from "util";

describe("suite de test de palabras", () => {

    test("probar palabra palindroma", () => {
        expect(esPalindromo("tetera")).toBe(false);
        expect(esPalindromo("reconocer")).toBe(true);
        expect(esPalindromo("")).toBe(false);
    });

});