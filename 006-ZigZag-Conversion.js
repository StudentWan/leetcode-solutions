var convert = function (s, numRow) {
    if (numRow <= 1) {
        return s;
    }
    var perGroupLength = 2 * numRow - 2;
    var groupAmount = Math.ceil(s.length / perGroupLength);
    var groupArr = new Array(groupAmount);
    for (var i = 0; i < groupAmount; i++) {
        var start = i * perGroupLength;
        groupArr[i] = s.substring(start, start + perGroupLength);
    }
    var result = '';
    for (var i = 0; i < numRow; i++) {
        for (var j = 0; j < groupAmount; j++) {
            if (groupArr[j][i]) {
                result += groupArr[j][i];
            }
            if (i !== 0 && i !== numRow - 1) {
                if (groupArr[j][perGroupLength - i]) {
                    result += groupArr[j][perGroupLength - i];
                }
            }
        }
    }
    return result;
};
