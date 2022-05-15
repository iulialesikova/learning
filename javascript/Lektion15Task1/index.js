function calculate() {
    let a = prompt('Введите число 1');
    let b = prompt('Введите число 2');
    let result = sum(Number(a), Number(b));
    alert(result);
}


function sum(a, b) {
    return a + b;
}

function calculate1() {
    let a = prompt('Введите число 1');
    let b = prompt('Введите число 2');
    let result = minus(Number(a), Number(b));
    alert(result);
}


function minus(a, b) {
    return a - b;
}

function calculate2() {
    let a = prompt('Введите число 1');
    let b = prompt('Введите число 2');
    let result = multiply(Number(a), Number(b));
    alert(result);
}


function multiply(a, b) {
    return a * b;
}

function calculate3() {
    let a = prompt('Введите число 1');
    let b = prompt('Введите число 2');
    let result = division(Number(a), Number(b));
    alert(result);
}


function division(a, b) {
    if (b=0) {
        alert('"На ноль делить нельзя!');
    } else {
        return a / b;
    }
    
    
}