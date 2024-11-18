function operar(operacion: string = "", a: number, b: number) {
    if (operacion === 'suma') {
        return suma(a, b);
    } else if (operacion === 'resta') {
        return restar(a, b);
    } else if (operacion === 'multiplicar') {
        return multiplicar(a, b);
    } else if (operacion === 'dividir') {
        return dividir(a, b);
    } else if (operacion === 'potenciar') {
        return potenciar(a, b);
    } else if (operacion === 'factorial') {
        return factorial(a);
    }
}

function suma(a: number, b: number) {
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
    if(b === 0){
        throw new Error("No se puede realizar la division");
    }

    return a/b;
}

function potenciar(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se pueden potenciar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a ** b;
}

function factorial(a: number) {
    if (a === undefined) {
        throw new Error("No se puede calcular el factorial de indefinido");
    }
    if (typeof a !== 'number') {
        return NaN;
    }
    if (a < 0) {
        throw new Error("No se puede calcular el factorial de un numero negativo");
    }
    return factorialRecursivo(a);
}

function factorialRecursivo(n:number): number {
    return (n != 1) ? n * factorialRecursivo(n - 1) : 1;
}



export { suma, operar, restar,multiplicar,dividir,potenciar,factorial};