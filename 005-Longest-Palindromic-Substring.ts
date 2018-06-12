const longestPalindrome = function (s: string) {
    let longestForNow = s[0];
    let longestPrefix = s[0];
    for (let i = 1; i < s.length; i++) {
        for (let j = 0; j < i; j++) {
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
}

const isPalindrome = function (s: string, start: number, end: number) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}