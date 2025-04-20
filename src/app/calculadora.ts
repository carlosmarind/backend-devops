function operar(operacion: string = "", a: number, b: number) {
    if (operacion === 'suma') {
        return suma(a, b);
    } else if (operacion === 'resta') {
        return restar(a, b);
    } else if (operacion === 'multiplica') {
        return multiplica(a, b);
    }else if (operacion === 'divide') {
        return divide(a, b);
    }else if (operacion === 'potencia') {
        return potencia(a, b);
    }else if (operacion === 'factorial') {
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

function multiplica(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede multiplicar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a * b;
}

function divide(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede dividir indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return (a/b);
}

function potencia(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede restar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return Math.pow(a, b);
}

function factorial(a: number) {
    if (a === undefined) {
        throw new Error("No se puede potencia de indefinidos");
    }
    if (typeof a !== 'number') {
        return NaN;
    }

    var num=1;
    for (var i = 1; i <= a; i++) {
        num = num * i;
    }
    return num;
}

export { suma, operar, restar, multiplica, divide, potencia, factorial };