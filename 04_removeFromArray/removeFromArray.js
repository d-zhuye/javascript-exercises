const removeFromArray = function(array, ...args) {
    // take an array and some other argument
    // then remove other arguments from that array
    // I need some way to compare each array item with each removed item

    let cleansedArray = array;

    for (const items of args) {
        cleansedArray = cleansedArray.filter(function (input) {
            return input !== items;
        })
    }
    return cleansedArray;
};

removeFromArray([1, 2, 3, 4], 3, 4);

// Do not edit below this line
module.exports = removeFromArray;

