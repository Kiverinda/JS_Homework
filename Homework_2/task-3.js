if (typeof result === 'undefined') {
    var result;
}
if (typeof a === 'undefined') {
    var a;
}
if (typeof b === 'undefined') {
    var b;
}

a = randomNumber();
b = randomNumber();

if (a >= 0 && b >= 0) {
    result = a - b;
} else if (a < 0 && b < 0) {
    result = a * b;
} else {
    result = a + b;
}

alert(`a = ${a}, b = ${b}, result = ${result}`);

function randomNumber() {
    let x = Math.random() * 10;
    if (x < 5) {
        x *= -2;
    } else if (x > 5) {
        x *= 0.5;
    } else {
        x = 0;
    }
    x = Math.round(x * 10);
    return x;
}