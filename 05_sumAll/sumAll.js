const sumAll = function(a, b) {
    var sum = 0;

    if (typeof (a, b) != 'number' || a < 0 || b < 0)
        return ('ERROR');
    if (a > b)
    {
        let tmp = a;
        a = b;
        b = tmp;
    }
    for (let i = a; i <= b; i++)
        sum += i;
    return (sum);
};

// Do not edit below this line
module.exports = sumAll;
