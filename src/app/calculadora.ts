function operar(operacion: string = "", a: number, b: number = 0) {
    if (operacion === 'suma') {
        return sumar(a, b);
    } else if (operacion === 'resta') {
        return restar(a, b);
    } else if (operacion === 'multiplica') {
        return multiplicar(a, b);
    } else if (operacion === 'divide') {
        return dividir(a, b);
    } else if (operacion === 'factorial') {
        return factorial(a);
    } else if (operacion === 'potencia') {
        return potencia(a, b);
    }
    else {
        throw new Error("Debe indicar la operacion");
    }

}

function sumar(a: number, b: number) { //a = 1 , b=2

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

function multiplicar(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede multiplicar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a * b;
}

function dividir(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede dividir indefinidos");
    }
    if (b === 0) {
        throw new Error("El divisor no puede ser cero")
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a / b;
}

function factorial(a: number): any{
    if (a === undefined) {
        throw new Error("No se puede obtener el factorial de indefinido");
    }

    if (typeof a !== 'number') {
        return NaN;
    }

    if (a % 1 !== 0) {
        throw new Error("El numero debe ser entero")
    }

    if (a < 0) {
        throw new Error("No se puede calcular el factorial de numeros negativos")
    }

    if (a === 0 || a === 1) {
        return 1
    }

    return a * factorial(a-1)
}

function potencia(a: number, b: number): any {
    if (a === undefined  || b === undefined) {
        throw new Error("No se puede obtener la potencia de indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    if (b % 1 !== 0) {
        throw new Error("El exponentes debe ser entero")
    }

    if (b === 0) {
        return 1
    }

    if (b > 0) {
        return a * potencia(a, b-1)
    }
    if (b < 0) {
        return 1 / potencia(a, b*-1)
    }
}

export { sumar, operar, restar,  multiplicar, dividir, factorial, potencia };