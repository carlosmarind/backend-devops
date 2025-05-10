function operar(operacion: string = "", a: number, b: number) {
    if (operacion === 'suma') {
        return suma(a, b);
    } else if (operacion === 'resta') {
        return restar(a, b);
    } else if (operacion === 'multiplicacion') {
	return multiplicar(a, b)
    } else if (operacion === 'division') {
	return dividir(a, b)
    } else if (operacion === 'factorial') {
	return factorial(a)
    } else if (operacion === 'potencia') {
	return potencia(a, b)
    }
}

function suma(a: number, b: number) { //a = 1 , b=2

    if (a === undefined || b === undefined) {
        throw new Error("No se puede sumar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a + b;
}

function restar(a: number, b: number) {

    if (a === undefined || b === undefined) {
        throw new Error("No se puede restar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a - b;
}

// Crea operacion restante
function dividir(dividendo: number, divisor: number) {

    if ( dividendo === undefined || divisor === undefined ) {
        throw new Error("No se pueden dividir valores indefinidos");
    }
    if ( typeof dividendo !== 'number' || typeof divisor !== 'number' ) {
        return NaN;
    }
    if ( divisor === 0 ) {
        throw new Error("Divisor debe ser distinto de cero");
    }
    return dividendo / divisor
}

// Crea operacion restante
function multiplicar(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede restar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a * b
}

// Crea la operación de factorial, es decir, el resultado de multiplicar todos los números desde 1 hasta el número dado.
function factorial(n: number) {
    if ( n === undefined ) {
        throw new Error("No se puede determinar el factorial de un valor indefinido");
    }
    if ( typeof n !== 'number' ){
        return NaN;
    }
    if ( a >= 0 )
	return fact(a)
}

function fact(n: number) {
    if ( n === 0 ) return 1
    return fact(n-1)
}

// Crea la operación de potencia, es decir un número elevado a otro
function potencia(base: number, exponente: number) {
    if (base === undefined || exponente === undefined) {
        throw new Error("No se puede calcular la potencia de valores indefinidos");
    }
    if (typeof base !== 'number' || typeof exponente !== 'number') {
        return NaN;
    }
    return base ** exponente
}

export { suma, operar, restar, dividir, multiplicar, factorial, potencia };
