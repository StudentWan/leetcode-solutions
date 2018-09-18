/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack: string, needle: string): number {
  if (needle.length === 0 || haystack === needle) {
    return 0;
  }

  let index = -1;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      index = i;
      break;
    }
  }

  return index;
};