if (typeof value === 'undefined')
{
    var value;
}
if (typeof pow === 'undefined')
{
    var pow;
}

value = prompt('Введите число', '');
pow = prompt('Введите степень', '');

alert(`Результат = ${Power(value, pow)}`);

function Power(val, pow)
{
    if (pow === 1)
    {
        return val;
    }
    else
    {
        return val * Power(val, --pow);
    }
}
