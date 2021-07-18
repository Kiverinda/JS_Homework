if (typeof numFirst === 'undefined')
{
    var numFirst;
}
if (typeof numSecond === 'undefined')
{
    var numSecond;
}

numFirst = Math.round(Math.random() * 10);
numSecond = Math.round(Math.random() * 10);

alert(`Число 1 = ${numFirst}, Число 2 = ${numSecond}
Сумма чисел = ${Sum(numFirst, numSecond)}
Разность чисел = ${Difference(numFirst, numSecond)}
Произведение чисел = ${Multiplication(numFirst, numSecond)}
Деление чисел = ${Segmentation(numFirst, numSecond)}`);

function Sum(first, second)
{
    let result = first + second;
    return result;
}

function Difference(first, second)
{
    let result = first - second;
    return result;
}

function Multiplication(first, second)
{
    let result = first * second;
    return result;
}

function Segmentation(first, second)
{
    let result = first/second;
    return result;
}