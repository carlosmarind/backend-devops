import { describe, test, expect } from "@jest/globals";
import { esPrimo } from "../../src/app/numeros";

describe("Test para función esPrimo", () => {
    test("número primo pequeño: 2", () => {
        expect(esPrimo(2)).toBe(true);
    });

    test("número primo: 3", () => {
        expect(esPrimo(3)).toBe(true);
    });

    test("número primo: 5", () => {
        expect(esPrimo(5)).toBe(true);
    });

    test("número no primo: 1", () => {
        expect(esPrimo(1)).toBe(false);
    });

    test("número no primo: 0", () => {
        expect(esPrimo(0)).toBe(false);
    });

    test("número no primo: -7", () => {
        expect(esPrimo(-7)).toBe(false);
    });

    test("número no primo: 4", () => {
        expect(esPrimo(4)).toBe(false);
    });

    test("número primo grande: 97", () => {
        expect(esPrimo(97)).toBe(true);
    });

    test("número no primo grande: 100", () => {
        expect(esPrimo(100)).toBe(false);
    });
});
