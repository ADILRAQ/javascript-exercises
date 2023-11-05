const palindromes = function (str) {
    let array = str
    .toLowerCase()  // Characters to lower case
    .split("")  // return an array with of the characters
    .filter(elem => elem !== elem.toUpperCase())  // return an array with just characters
    ;
    let len = array.length - 1;
    for (let i = 0; i <= len / 2; i++)
        if (array[i] != array[len - i])
            return (false);
    return (true);
};

// Do not edit below this line
module.exports = palindromes;
