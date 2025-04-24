function operar(operacion: string = "", a: number, b: number) {
    switch (operacion) {
        case 'suma':
            return suma(a, b);
        case 'resta':
            return restar(a, b);
        case 'multiplicar':
            return multiplicar(a, b);
        case 'dividir':
            return dividir(a, b);
        case 'potencia':
                return potencia(a, b);
        case 'factorial':
            return factorial(a);
        default:
            throw new Error(`Operación no válida: "${operacion}"`);
    }
}


function suma(a: number, b: number) {
    // Verificar si alguno de los parámetros es undefined
    if (a === undefined || b === undefined) {
        throw new Error("No se puede sumar indefinidos");
    }

    // Verificar si alguno de los parámetros es null
    if (a === null || b === null) {
        throw new Error("No se puede sumar null");
    }

    // Verificar si alguno de los parámetros no es un número
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    // Si pasa todas las validaciones, retorna la suma
    return a + b;
}

function restar(a: number, b: number) {
    // Verificar si alguno de los parámetros es undefined
    if (a === undefined || b === undefined) {
        throw new Error("No se puede restar indefinidos");
    }

    // Verificar si alguno de los parámetros es null
    if (a === null || b === null) {
        throw new Error("No se puede restar null");
    }

    // Verificar si alguno de los parámetros no es un número
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    // Realizar la resta si todas las validaciones son correctas
    return a - b;
}


function multiplicar(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede multiplicar indefinidos");
    }

    // Verificar si alguno de los parámetros es null
    if (a === null || b === null) {
        throw new Error("No se puede multiplicar null");
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

    // Verificar si alguno de los parámetros es null
    if (a === null || b === null) {
        throw new Error("No se puede dividir null");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }

    return a / b;
}

function potencia(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede operar con valores indefinidos");
    }

    // Verificar si alguno de los parámetros es null
    if (a === null || b === null) {
        throw new Error("No se puede operar con valores null");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return Math.pow(a, b);
}

function factorial(n: number): number {
    if (typeof n !== 'number' || isNaN(n) || n === null || n === undefined) {
        throw new Error("La entrada debe ser un número válido");
    }

    if (!Number.isInteger(n)) {
        throw new Error("La entrada debe ser un número entero");
    }

    if (n < 0) {
        throw new Error("No se puede calcular el factorial de un número negativo");
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}


export { suma, operar, restar, multiplicar, dividir, potencia, factorial };