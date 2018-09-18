/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    var result = '';
    var thousand = Math.floor(num / 1000);
    num = num - 1000 * thousand;
    for (var i = thousand; i > 0; i--) {
        result += 'M';
    }
    var hundred = Math.floor(num / 100);
    num = num - 100 * hundred;
    if (hundred >= 5) {
        if (hundred === 9) {
            result += 'CM';
            hundred -= 9;
        }
        else {
            result += 'D';
            hundred = hundred - 5;
        }
    }
    if (hundred === 4) {
        result += 'CD';
    }
    else {
        for (var i = hundred; i > 0; i--) {
            result += 'C';
        }
    }
    var ten = Math.floor(num / 10);
    num = num - 10 * ten;
    if (ten >= 5) {
        if (ten === 9) {
            result += 'XC';
            ten -= 9;
        }
        else {
            result += 'L';
            ten = ten - 5;
        }
    }
    if (ten === 4) {
        result += 'XL';
    }
    else {
        for (var i = ten; i > 0; i--) {
            result += 'X';
        }
    }
    if (num >= 5) {
        if (num === 9) {
            result += 'IX';
            num -= 9;
        }
        else {
            result += 'V';
            num = num - 5;
        }
    }
    if (num === 4) {
        result += 'IV';
    }
    else {
        for (var i = num; i > 0; i--) {
            result += 'I';
        }
    }
    return result;
};
