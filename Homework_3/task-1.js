if (arr == 'undefined') {
    var arr;
}
if (count == 'undefined') {
    var count;
}

arr = [2];
count = 3;

display(100);

alert('Простые числа:' + arr);

function isPrime(num) {
    for (var i = 0; i < arr.length; i++) {
        if (num % arr[i] === 0) {
            return false;
        }
    }
    return true;
}

function display(n) {
    while (count < n) {
        if (isPrime(count)) {
            arr.push(count);
        }
        count += 2;
    } // use arr result on your own
}