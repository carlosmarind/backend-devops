import { describe, test } from "@jest/globals";
import {
	sumar,
	restar,
	dividir,
	multiplicar,
	factorial,
	potencia,
	operar } from "../../src/app/calculadora";

describe("Suite de test de calculadora", () => {

	test("probar suma de enteros", () => {
		expect(sumar(1, 1)).toBe(2);
		expect(sumar(10, 15)).toBe(25);
		expect(sumar(10, 15)).not.toBe(30);
		
		let a: any = "10";
		let b: any = "15";
		expect(sumar(a, 15)).toBeNaN();
		expect(sumar(a, b)).toBeNaN();

		a = 1.5
		expect(sumar(a, 15)).toBe(16.5);

		a = null
		expect(sumar(a, 15)).toBeNaN();

		a = Math.PI
		expect(sumar(a, 15)).toBeCloseTo(18.14, 2);

		a = -10
		expect(sumar(a, 15)).toBe(5);

		a = undefined
		expect(() => { sumar(a, 15) })
			.toThrow("No se puede sumar indefinidos");
	})

	test("probar resta de enteros", () => {
		expect(restar(10, 1)).toBe(9);
		expect(restar(10, 20)).toBe(-10);
		expect(restar(20, 12)).not.toBe(10);

		let a: any = "10";
		let b: any = "15";
		expect(restar(a, 15)).toBeNaN();
		expect(restar(a, b)).toBeNaN();

		a = 1.5
		expect(restar(10, a)).toBe(8.5);

		a = Math.PI
		expect(restar(a, 1)).toBeCloseTo(2.14, 2);

		a = undefined
		expect(() => { restar(a, 1) })
			.toThrow("No se puede restar indefinidos")
	})

	test("probar multiplicación de enteros", () => {
		expect(multiplicar(10, 1)).toBe(10);
		expect(multiplicar(10, 20)).toBe(200);
		expect(multiplicar(20, 12)).not.toBe(100);

		let a: any = "10";
		let b: any = "15";
		expect(multiplicar(a, 15)).toBeNaN();
		expect(multiplicar(a, b)).toBeNaN();

		a = 1.5
		expect(multiplicar(10, a)).toBe(15);

		a = -10
		expect(multiplicar(a, 15)).toBe(-150);

		expect(multiplicar(a, -1)).toBe(10);

		a = Math.PI
		expect(multiplicar(a, 2)).toBeCloseTo(6.28, 2);

		a = undefined
		expect(() => { multiplicar(a, 1) })
			.toThrow("No se puede multiplicar indefinidos")
	})

	test("probar división de enteros", () => {
		expect(dividir(10, 1)).toBe(10);
		expect(dividir(10, 20)).toBe(0.5);
		expect(dividir(20, 15)).not.toBe(1);

		let a: any = "10";
		let b: any = "15";
		expect(dividir(a, 15)).toBeNaN();
		expect(dividir(a, b)).toBeNaN();

		a = 1.5
		expect(dividir(10, a)).toBeCloseTo(6.66, 1);

		a = -10
		expect(dividir(a, 5)).toBe(-2);

		expect(dividir(a, -1)).toBe(10);

		a = Math.PI
		expect(dividir(a, 2)).toBeCloseTo(1.57, 2);

		a = undefined
		expect(() => { dividir(a, 1) })
			.toThrow("No se puede dividir indefinidos")

		expect(() => { dividir(10, 0) })
			.toThrow("El divisor no puede ser cero")
	})

	test("probar factorial", () => {
		expect(factorial(0)).toBe(1);
		expect(factorial(1)).toBe(1);
		expect(factorial(3)).toBe(6);
		expect(factorial(5)).not.toBe(100);

		let a: any = "10";
		expect(factorial(a)).toBeNaN();
		expect(factorial(a)).toBeNaN();

		a = 1.5
		expect(() => { factorial(a) }).
			toThrow("El numero debe ser entero");

		a = null
		expect(factorial(a)).toBeNaN();

		a = -10
		expect(() => { factorial(a) })
			.toThrow("No se puede calcular el factorial de numeros negativos");

		a = undefined
		expect(() => { factorial(a) })
			.toThrow("No se puede obtener el factorial de indefinido");		
	})

	test("probar potencias", () => {
		expect(potencia(10, 1)).toBe(10);
		expect(potencia(10, 3)).toBe(1000);
		expect(potencia(2, 4)).not.toBe(42);

		let a: any = "10";
		let b: any = "15";
		expect(potencia(a, 15)).toBeNaN();
		expect(potencia(a, b)).toBeNaN();

		a = 1.5
		expect(() => { potencia(10, a) }).
			toThrow("El exponentes debe ser entero")

		a = -10
		expect(potencia(a, 3)).toBe(-1000);
		expect(potencia(a, 2)).toBe(100);

		expect(potencia(2, -1)).toBe(0.5);
		expect(potencia(10, -3)).toBe(0.001);

		a = undefined
		expect(() => { potencia(a, a) })
			.toThrow("No se puede obtener la potencia de indefinidos")

		expect(potencia(10, 0)).toBe(1)
	})

	test("probar operacion de enteros", () => {
		let operacion: string = "suma";

		expect(operar(operacion, 1, 1)).toBe(2);
		expect(operar(operacion, 10, 15)).toBe(25);
		expect(operar(operacion, 10, 15)).not.toBe(30);
		
		let a: any = "10";
		let b: any = "15";
		expect(operar(operacion, a, 15)).toBeNaN();
		expect(operar(operacion, a, b)).toBeNaN();

		a = 1.5
		expect(operar(operacion, a, 15)).toBe(16.5);

		a = null
		expect(operar(operacion, a, 15)).toBeNaN();

		a = Math.PI
		expect(operar(operacion, a, 15)).toBeCloseTo(18.14, 2);

		a = -10
		expect(operar(operacion, a, 15)).toBe(5);

		a = undefined
		expect(() => { operar(operacion, a, 15) })
			.toThrow("No se puede sumar indefinidos");

		operacion = "resta"
		expect(operar(operacion, 10, 1)).toBe(9);
		expect(operar(operacion, 10, 20)).toBe(-10);
		expect(operar(operacion, 20, 12)).not.toBe(10);

		a = "10";
		b = "15";
		expect(operar(operacion, a, 15)).toBeNaN();
		expect(operar(operacion, a, b)).toBeNaN();

		a = 1.5
		expect(operar(operacion, 10, a)).toBe(8.5);

		a = Math.PI
		expect(operar(operacion, a, 1)).toBeCloseTo(2.14, 2);

		a = undefined
		expect(() => { operar(operacion, a, 1) })
			.toThrow("No se puede restar indefinidos")

		operacion = "multiplica"
		expect(operar(operacion, 10, 1)).toBe(10);
		expect(operar(operacion, 10, 20)).toBe(200);
		expect(operar(operacion, 20, 12)).not.toBe(100);

		a = "10";
		b = "15";
		expect(operar(operacion, a, 15)).toBeNaN();
		expect(operar(operacion, a, b)).toBeNaN();

		a = 1.5
		expect(operar(operacion, 10, a)).toBe(15);

		a = -10
		expect(operar(operacion, a, 15)).toBe(-150);

		expect(operar(operacion, a, -1)).toBe(10);

		a = Math.PI
		expect(operar(operacion, a, 2)).toBeCloseTo(6.28, 2);

		a = undefined
		expect(() => { operar(operacion, a, 1) })
			.toThrow("No se puede multiplicar indefinidos")

		operacion = "divide"
		expect(operar(operacion, 10, 1)).toBe(10);
		expect(operar(operacion, 10, 20)).toBe(0.5);
		expect(operar(operacion, 20, 15)).not.toBe(1);

		a = "10";
		b = "15";
		expect(operar(operacion, a, 15)).toBeNaN();
		expect(operar(operacion, a, b)).toBeNaN();

		a = 1.5
		expect(operar(operacion, 10, a)).toBeCloseTo(6.66, 1);

		a = -10
		expect(operar(operacion, a, 5)).toBe(-2);

		expect(operar(operacion, a, -1)).toBe(10);

		a = Math.PI
		expect(operar(operacion, a, 2)).toBeCloseTo(1.57, 2);

		a = undefined
		expect(() => { operar(operacion, a, 1) })
			.toThrow("No se puede dividir indefinidos")

		expect(() => { operar(operacion, 10, 0) })
			.toThrow("El divisor no puede ser cero")

		expect(() => { operar(a, 10, b) })
			.toThrow("Debe indicar la operacion")

		operacion = "factorial"
		expect(operar(operacion, 0)).toBe(1);
		expect(operar(operacion, 1)).toBe(1);
		expect(operar(operacion, 3)).toBe(6);
		expect(operar(operacion, 5)).not.toBe(100);

		a = "10";
		expect(operar(operacion, a)).toBeNaN();
		expect(operar(operacion, a)).toBeNaN();

		a = 1.5
		expect(() => { operar(operacion, a) }).
			toThrow("El numero debe ser entero");

		a = null
		expect(operar(operacion, a)).toBeNaN();

		a = -10
		expect(() => { operar(operacion, a) })
			.toThrow("No se puede calcular el factorial de numeros negativos");

		a = undefined
		expect(() => { operar(operacion, a) })
			.toThrow("No se puede obtener el factorial de indefinido");		

		operacion = "potencia"
		expect(operar(operacion, 10, 1)).toBe(10);
		expect(operar(operacion, 10, 3)).toBe(1000);
		expect(operar(operacion, 2, 4)).not.toBe(42);

		a = "10";
		b = "15";
		expect(operar(operacion, a, 15)).toBeNaN();
		expect(operar(operacion, a, b)).toBeNaN();

		a = 1.5
		expect(() => { operar(operacion, 10, a) }).
			toThrow("El exponentes debe ser entero")

		a = -10
		expect(operar(operacion, a, 3)).toBe(-1000);
		expect(operar(operacion, a, 2)).toBe(100);

		expect(operar(operacion, 2, -1)).toBe(0.5);
		expect(operar(operacion, 10, -3)).toBe(0.001);

		a = undefined
		expect(() => { operar(operacion, a, a) })
			.toThrow("No se puede obtener la potencia de indefinidos")

		expect(operar(operacion, 10, 0)).toBe(1)
	})

})