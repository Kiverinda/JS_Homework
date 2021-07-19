if (arr == 'undefined') {
    var arr;
}
if (count == 'undefined') {
    var count;
}

arr = [2];
count = 3;

getArrayPrime(100);

display(arr);

function display(arr) {
    let i = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
}

function getArrayPrime(num) {
    while (count < num) {
        if (isPrime(count)) {
            arr.push(count);
        }
        count += 2;
    }
}

function isPrime(num) {
    for (var i = 0; i < arr.length; i++) {
        if (num % arr[i] === 0) {
            return false;
        }
    }
    return true;
}