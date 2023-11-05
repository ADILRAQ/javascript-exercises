const fibonacci = function(nb) {
    let F1 = 0;
    let F2 = 1;
    let F3 = 0;

    if (nb < 0)
        return "HUH";
    while (nb)
    {
        F3 = F1 + F2;
        F2 = F1;
        F1 = F3;
        nb--;
    }
    return (F3);
};

// Do not edit below this line
module.exports = fibonacci;
