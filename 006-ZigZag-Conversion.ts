const convert = function (s: string, numRow: number): string {
    if (numRow <= 1) {
        return s;
    }
    const perGroupLength = 2 * numRow - 2;
    const groupAmount = Math.ceil(s.length / perGroupLength);
    const groupArr: string[] = new Array(groupAmount);
    for (let i = 0; i < groupAmount; i++) {
        const start = i * perGroupLength;
        groupArr[i] = s.substring(start, start + perGroupLength);
    }
    let result = '';
    for (let i = 0; i < numRow; i++) {
        for (let j = 0; j < groupAmount; j++) {
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
}