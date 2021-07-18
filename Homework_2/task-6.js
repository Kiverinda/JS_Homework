if (typeof numFirst === 'undefined')
{
    var numFirst;
}
if (typeof numSecond === 'undefined')
{
    var numSecond;
}
if (typeof operation === 'undefined')
{
    var operation;
}

numFirst = Math.round(Math.random() * 10);
numSecond = Math.round(Math.random() * 10);

operation = prompt(`Первое число =  ${numFirst}, второе число = ${numSecond}.
Введите символ операции`, '');

alert(`Результат опреации = ${mathOperation(numFirst, numSecond, operation)}`);

function mathOperation(arg1, arg2, operation)
{
    switch (operation)
    {
        case '+':
            return Sum(arg1, arg2);
        case '-':
            return Difference(arg1, arg2);
        case '*':
            return Multiplication(arg1, arg2);
        case '/':
            return Segmentation(arg1, arg2);
    }
}

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
