import { describe, test, expect } from "@jest/globals";
import { esPalindromo } from "../../src/app/palabras";

describe("Test para función esPalindromo", () => {
    test("palíndromo simple", () => {
        expect(esPalindromo("oso")).toBe(true);
    });

    test("palíndromo con espacios", () => {
        expect(esPalindromo("anita lava la tina")).toBe(true);
    });

    test("palíndromo con mayúsculas y espacios devuelve falso", () => {
        expect(esPalindromo("A mamá Roma le aviva el amor a mamá")).toBe(false);
    });

    test("no es palíndromo", () => {
        expect(esPalindromo("palíndromo")).toBe(false);
    });

    test("cadena vacía devuelve falso", () => {
        expect(esPalindromo("")).toBe(false);
    });

    test("cadena con un solo carácter", () => {
        expect(esPalindromo("a")).toBe(true);
    });
});
