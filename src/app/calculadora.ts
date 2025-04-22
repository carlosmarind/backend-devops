function operar(operacion: string = "", a: number, b: number) {
    if (operacion === 'suma') {
        return suma(a, b);
    } else if (operacion === 'resta') {
        return restar(a, b);
    } else if (operacion === 'multiplicacion'){
        return multiplicar(a,b);
    } else if (operacion === 'division'){
        return dividir(a,b);
    } else if (operacion === 'potencia'){
        return potencia(a,b);
    } else if (operacion === 'factorial'){
        return factorial(a)
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

function multiplicar(a: number, b: number) { //a = 1 , b=2

    if (a === undefined || b === undefined) {
        throw new Error("No se puede multiplicar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a * b;
}

function dividir(a: number, b: number) { //a = 1 , b=2

    if (a === undefined || b === undefined) {
        throw new Error("No se puede dividir indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a / b;
}

function potencia(a: number, b: number) { //a = 1 , b=2

    if (a === undefined || b === undefined) {
        throw new Error("No se puede utilizar como base o exponente un indefinido");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    if (a === 0 && b === 0){
        return 'Indeterminado';
    }

    return Math.pow(a,b);
}


function factorial(n: number) {
    if (n === undefined) {
        throw new Error("No se puede calcular el factorial de un indefinido");
    }

    if (typeof n !== 'number') {
        return NaN;
    }

    if (n < 0) {
        throw new Error("El factorial no está definido para números negativos");
    }

    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}



export { suma, operar, restar, multiplicar, dividir, potencia, factorial };