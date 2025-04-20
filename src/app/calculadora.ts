function operar(operacion: string = "", a: number, b: number) {
    if (operacion === 'suma') {
        return suma(a, b);
    } else if (operacion === 'resta') {
        return restar(a, b);
    } else if (operacion === 'multiplica') {
        return multiplica(a, b);
    }else if (operacion === 'divide') {
        return divide(a, b);
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

function multiplica(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede restar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a * b;
}

function divide(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede restar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a / b;
}
export { suma, operar, restar };