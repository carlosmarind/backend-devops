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
    try{
        return a / b;
    }
    catch(error){
        throw new Error(error.message);
    }
    return NaN;
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

export { suma, operar, restar,multiplicar,dividir,potenciar };