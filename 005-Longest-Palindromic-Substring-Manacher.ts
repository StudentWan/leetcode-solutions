const longestPalindrome = function (s: string): string {
    const T: string[] = ['&', '#'];
    for (let i = 0; i < s.length; i++) {
        T.push(s[i]);
        T.push('#');
    }

    const L: number[] = new Array(T.length);

    let p0 = 1;
    let p = 1;
    L[1] = 1;
    for (let i = 2; i < L.length; i++) {
        if (i <= p) {
            let j = 2 * p0 - i;
            if (L[j] < p - i) {
                L[i] = L[j];
            } else {
                let k = p + 1;
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
        } else {
            let left = i - 1;
            let right = i + 1;
            while (T[left] === T[right]) {
                left --;
                right ++;
            }
            right--;
            if (right > p) {
                p = right;
                p0 = i;
            }
            L[i] = right - i + 1;
        }
    }

    let pos = 1;
    for (let i = 1; i < L.length; i++) {
        if (L[i] > L[pos]) {
            pos = i;
        }
    }

    let start = pos - L[pos] + 1;
    let end = pos + L[pos] - 1;

    let result = '';
    for (let i = start; i <= end; i++) {
        if (T[i] !== '#') {
            result += T[i];
        }
    }
    return result;
}