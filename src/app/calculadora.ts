function operar(operacion: string = "", a: number, b: number, n: number) {
    if (operacion === 'suma') {
        return suma(a, b);
    } else if (operacion === 'resta') {
        return restar(a, b);
    } else if (operacion === 'multiplicar'){
        return multiplicar(a, b);
    } else if (operacion === 'dividir') {
        return dividir(a, b);
    } else if (operacion === 'potencia') {
        return potencia(a, b);
    } else if (operacion === 'factorial'){
        return factorial(n);
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

function multiplicar(a: number, b:number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede restar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a * b;   
}

function dividir(a: number, b:number){
    if (a === undefined || b === undefined) {

        throw new Error("No se puede restar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a / b;
}

function potencia(a: number, b: number){
    if (a === undefined || b === undefined) {

        throw new Error("No se puede restar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a ** b
}

function factorial(n: number): number | string {
    if (n < 0) {
        return "Error: El factorial no está definido para números negativos";
    }
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

export { suma, operar, restar, multiplicar, dividir, potencia, factorial };