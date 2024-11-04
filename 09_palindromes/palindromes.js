const palindromes = function (word) {
    let wordCapitalized = word.toUpperCase();
    let wordSplit = wordCapitalized.split("");

    let reverseArray = [];

    for (let i = wordSplit.length - 1; i >= 0; i--){
        if (/^[a-zA-Z0-9]$/.test(wordSplit[i])) {
            reverseArray.push(wordSplit[i]);
        }
    }

    let joinedReverseArray = reverseArray.join("");

    let filterWord = wordSplit.filter((char) => /^[a-zA-Z0-9]$/.test(char));
    let joinedFilteredWord = filterWord.join("");

    if (joinedFilteredWord == joinedReverseArray) {
        return true;
    } else {
        return false;
    };
};
// Do not edit below this line
module.exports = palindromes;
