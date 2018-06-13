var longestPalindrome = function (s) {
    var T = ['&', '#'];
    for (var i = 0; i < s.length; i++) {
        T.push(s[i]);
        T.push('#');
    }
    var L = new Array(T.length);
    var p0 = 1;
    var p = 1;
    L[1] = 1;
    for (var i = 2; i < L.length; i++) {
        if (i <= p) {
            var j = 2 * p0 - i;
            if (L[j] < p - i) {
                L[i] = L[j];
            }
            else {
                var k = p + 1;
                while (T[k] === (T[i - (k - i)])) {
                    k++;
                }
                k--;
                if (k > p) {
                    p = k;
                    p0 = i;
                }
                L[i] = k - i + 1;
            }
        }
        else {
            var left = i - 1;
            var right = i + 1;
            while (T[left] === T[right]) {
                left--;
                right++;
            }
            right--;
            if (right > p) {
                p = right;
                p0 = i;
            }
            L[i] = right - i + 1;
        }
    }
    var pos = 1;
    for (var i = 1; i < L.length; i++) {
        if (L[i] > L[pos]) {
            pos = i;
        }
    }
    var start = pos - L[pos] + 1;
    var end = pos + L[pos] - 1;
    var result = '';
    for (var i = start; i <= end; i++) {
        if (T[i] !== '#') {
            result += T[i];
        }
    }
    return result;
};
