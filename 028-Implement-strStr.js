/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length === 0 || haystack === needle) {
        return 0;
    }
    var index = -1;
    for (var i = 0; i < haystack.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            index = i;
            break;
        }
    }
    return index;
};
