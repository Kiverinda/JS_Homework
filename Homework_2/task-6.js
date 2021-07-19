if (typeof numFirst === 'undefined') {
    var numFirst;
}
if (typeof numSecond === 'undefined') {
    var numSecond;
}
if (typeof operation === 'undefined') {
    var operation;
}

numFirst = Math.round(Math.random() * 10);
numSecond = Math.round(Math.random() * 10);

operation = prompt(`Первое число =  ${numFirst}, второе число = ${numSecond}.
Введите символ операции`, '');

alert(`Результат опреации = ${mathOperation(numFirst, numSecond, operation)}`);

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sum(arg1, arg2);
        case '-':
            return difference(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
        case '/':
            return segmentation(arg1, arg2);
    }
}

function sum(first, second) {
    let result = first + second;
    return result;
}

function difference(first, second) {
    let result = first - second;
    return result;
}

function multiplication(first, second) {
    let result = first * second;
    return result;
}

function segmentation(first, second) {
    let result = first / second;
    return result;
}