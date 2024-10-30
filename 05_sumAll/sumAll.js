const sumAll = function(num1, num2) {
    let sumOfAll = 0;
    let minValue = num1;
    let maxValue = num2;

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } 
    
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    if (num1 > num2) {
        minValue = num2;
        maxValue = num1;
    }

    for (let i = minValue; i <= maxValue; i++) {
        sumOfAll += i;
    }
    return sumOfAll;

};

// Do not edit below this line
module.exports = sumAll;
