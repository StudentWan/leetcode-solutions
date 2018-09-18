const myAtoi = function (str: string): number {
  let i = 0;

  // remove prefix
  while (i < str.length) {
    const charCode = str.charCodeAt(i);
    if (charCode === 32) {
      i++;
    } else if (charCode === 43 || charCode === 45 || (charCode >= 48 && charCode <= 57)) {
      break;
    } else {
      return 0;
    }
  }

  if (i === str.length) {
    return 0;
  }

  let interceptString = '';

  if (str.charCodeAt(i) === 43 || str.charCodeAt(i) === 45) {
    interceptString += str[i];
    i++;
  }

  while (i < str.length) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 48 && charCode <= 57) {
      interceptString += str[i];
      i++;
    } else {
      break;
    }
  }

  let sum = 0;

  for (let i = interceptString.length - 1, j = 1; i >= 0; i--, j = j * 10) {
    if (i === 0 && interceptString[i] === '-') {
        sum = -sum;
    } else if (i === 0 && interceptString[i] === '+') {
      sum = +sum;
    } else {
      sum += parseInt(interceptString[i], 10) * j;
    }
  }

  if (sum >= 2147483647) {
    return 2147483647;
  }

  if (sum <= -2147483648) {
    return -2147483648;
  }

  return sum;
}
