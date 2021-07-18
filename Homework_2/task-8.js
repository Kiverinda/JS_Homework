if (typeof value === 'undefined') {
    var value;
}
if (typeof pow === 'undefined') {
    var pow;
}

value = prompt('Введите число', '');
pow = prompt('Введите степень', '');

alert(`Результат = ${power(value, pow)}`);

function power(val, pow) {
    if (pow === 1) {
        return val;
    } else {
        return val * power(val, --pow);
    }
}