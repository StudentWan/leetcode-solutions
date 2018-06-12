var longestPalindrome = function (s) {
    var longestForNow = s[0];
    var longestPrefix = s[0];
    for (var i = 1; i < s.length; i++) {
        for (var j = 0; j < i; j++) {
            if (isPalindrome(s, j, i)) {
                longestPrefix = s.substring(j, i + 1);
                break;
            }
        }
        if (longestForNow.length <= longestPrefix.length) {
            longestForNow = longestPrefix;
        }
    }
    return longestForNow;
};
var isPalindrome = function (s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};
