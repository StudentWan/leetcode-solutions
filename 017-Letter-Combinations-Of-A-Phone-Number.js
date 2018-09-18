/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    var source = [
        [],
        [],
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ];
    if (digits.length === 0) {
        return [];
    }
    if (digits.length === 1) {
        return source[digits[0]];
    }
    var res = descartes(source[digits[0]], source[digits[1]]);
    for (var i = 2; i < digits.length; i++) {
        res = descartes(res, source[digits[i]]);
    }
    return res;
};
var descartes = function (arrayA, arrayB) {
    var res = [];
    for (var i = 0; i < arrayA.length; i++) {
        for (var j = 0; j < arrayB.length; j++) {
            res.push(arrayA[i] + arrayB[j]);
        }
    }
    return res;
};
