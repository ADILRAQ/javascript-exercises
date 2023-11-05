const repeatString = function(string, num) {
    let str = '';

    while (num)
    {
        str += string;
        --num;
    }
    return (str);
};

// Do not edit below this line
module.exports = repeatString;
