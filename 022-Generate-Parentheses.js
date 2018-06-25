/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var result = [];
    backtrack(result, '', 0, 0, n);
    return result;
};
var backtrack = function (result, cur, open, close, max) {
    if (cur.length === max * 2) {
        result.push(cur);
        return;
    }
    if (open < max) {
        backtrack(result, cur + '(', open + 1, close, max);
    }
    if (close < open) {
        backtrack(result, cur + ')', open, close + 1, max);
    }
};
