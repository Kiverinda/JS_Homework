if (number == 'undefine') {
    var number;
}
if (object == 'undefine') {
    var object;
}


number = Number(prompt('Введите число от 0 до 999'));
number = Math.floor(number);
console.log(number);
object = getObjectFromNumber(number);

for (var prop in object) {
    console.log(prop + ": " + object[prop]);
}

function getObjectFromNumber(number) {
    var obj = {};
    if (number < 1000 && number >= 0) {
        number = String(number);
        let numbers = number.split('');
        obj['единицы'] = +numbers[number.length - 1] || 0;
        obj['десятки'] = +numbers[number.length - 2] || 0;
        obj['сотни'] = +numbers[number.length - 3] || 0;
    } else {
        console.log(`Введенное число не попадает в указанный диапазон.`);
    }
    return obj;
}