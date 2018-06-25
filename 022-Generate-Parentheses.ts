/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n: number): string[] {
  const result = [];

  backtrack(result, '', 0, 0, n);

  return result;
};

const backtrack = function (result: string[], cur: string, open, close, max): void {
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
}