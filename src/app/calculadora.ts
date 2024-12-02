function operar(operacion: string = "", a: number, b: number) {
    if (operacion === 'suma') {
        return suma(a, b);
    } else if (operacion === 'resta') {
        return restar(a, b);
    }else if (operacion === 'multiplica') {
        return multiplicar(a, b);
    }else if (operacion === 'divide') {
        return dividir(a, b);
    }else if (operacion === 'potencia') {
        return potencia(a, b);
    }else if (operacion === 'factor') {
        return factorial(a);
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
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a / b;
}

function potencia(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede dividir indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return Math.pow(a,b);
}

function factorial(num: number): number {
    if (num < 0) {
        throw new Error("El número debe ser mayor o igual a 0.");
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

export { suma, operar, restar, multiplicar, dividir, potencia, factorial};