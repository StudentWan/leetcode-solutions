var myAtoi = function (str) {
    var i = 0;
    // remove prefix
    while (i < str.length) {
        var charCode = str.charCodeAt(i);
        if (charCode === 32) {
            i++;
        }
        else if (charCode === 43 || charCode === 45 || (charCode >= 48 && charCode <= 57)) {
            break;
        }
        else {
            return 0;
        }
    }
    if (i === str.length) {
        return 0;
    }
    var interceptString = '';
    if (str.charCodeAt(i) === 43 || str.charCodeAt(i) === 45) {
        interceptString += str[i];
        i++;
    }
    while (i < str.length) {
        var charCode = str.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
            interceptString += str[i];
            i++;
        }
        else {
            break;
        }
    }
    var sum = 0;
    for (var i_1 = interceptString.length - 1, j = 1; i_1 >= 0; i_1--, j = j * 10) {
        if (i_1 === 0 && interceptString[i_1] === '-') {
            sum = -sum;
        }
        else if (i_1 === 0 && interceptString[i_1] === '+') {
            sum = +sum;
        }
        else {
            sum += parseInt(interceptString[i_1], 10) * j;
        }
    }
    if (sum >= 2147483647) {
        return 2147483647;
    }
    if (sum <= -2147483648) {
        return -2147483648;
    }
    return sum;
};
