const reverseString = function(string) {

    let characters = string.split("");
    let charactersReversed = characters.reverse();
    let reverseString = charactersReversed.join("");
    return reverseString;

    // For future reference: I can consolidate the code into a single line with
    // return string.split("").reverse().join("");
};
// Do not edit below this line
module.exports = reverseString;
