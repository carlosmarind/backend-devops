function operar(operacion: string = "", a: number, b: number) {
    if (operacion === 'suma') {
        return suma(a, b);
    } else if (operacion === 'resta') {
        return restar(a, b);
    } else if (operacion === 'multiplica') {
        return multiplica(a, b);
    } else if (operacion === 'divide') {
        return divide(a, b);
    } else if (operacion === 'potencia') {
        return potencia(a, b);
    } else if (operacion === 'factorial') {
        if (a === undefined) {
            throw new Error("Este parametro no puede ser nulo");
        }
        return factorial(a);
        
    }else{
        throw new Error("La operacion no existe");
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
    if (b <= 0) {
        throw new Error("No se puede dividir por cero");
    }
    if (a === undefined || b === undefined) {

        throw new Error("No se puede dividir indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a / b;
}
function potencia(base: number, exponente: number):any {
    if (exponente === 0) return 1;
    if (exponente < 0) return 1 / potencia(base, -exponente);
    
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}

function factorial(n: number) {
    if (n === undefined) {
        throw new Error("Este parametro no puede ser nulo");
    }
    if (n < 0) return NaN; // Factorial de números negativos no está definido
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

export { suma, operar, restar, multiplica, divide, potencia, factorial};