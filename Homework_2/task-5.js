if (typeof numFirst === 'undefined') {
    var numFirst;
}
if (typeof numSecond === 'undefined') {
    var numSecond;
}

numFirst = Math.round(Math.random() * 10);
numSecond = Math.round(Math.random() * 10);

alert(`Число 1 = ${numFirst}, Число 2 = ${numSecond}
Сумма чисел = ${sum(numFirst, numSecond)}
Разность чисел = ${difference(numFirst, numSecond)}
Произведение чисел = ${multiplication(numFirst, numSecond)}
Деление чисел = ${segmentation(numFirst, numSecond)}`);

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