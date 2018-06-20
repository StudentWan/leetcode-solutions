/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits: string): string[] {
  const source: string[][] = [
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
  ]
  if (digits.length === 0) {
    return [];
  }
  if (digits.length === 1) {
    return source[digits[0]];
  }

  let res: string[] = descartes(source[digits[0]], source[digits[1]]);
  for (let i = 2; i < digits.length; i++) {
    res = descartes(res, source[digits[i]]);
  }

  return res;
};

const descartes = function (arrayA: string[], arrayB: string[]): string[] {
  const res: string[] = [];
  for (let i = 0; i < arrayA.length; i++) {
    for (let j = 0; j < arrayB.length; j++) {
      res.push(arrayA[i] + arrayB[j]);
    }
  }
  return res;
}