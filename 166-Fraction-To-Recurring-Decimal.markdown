### 题目描述

#### 166. Fraction to Recurring Decimal

Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

For example,

> Given numerator = 1, denominator = 2, return "0.5".
> Given numerator = 2, denominator = 1, return "2".
> Given numerator = 2, denominator = 3, return "0.(6)".

### 代码及思路

```java
    /*
    实质上是用长除法来保存每一位的值。

    将长除法每一次的余数存储在HashMap中，如果有重复的余数，说明此处循环了。

    为了更好地添加括号采用了StringBuilder。

    要特别注意的是边界情况，比如除数/被除数为负数，被除数为0，数值过大超过int的限度等。
    */
    public String fractionToDecimal(int numerator, int denominator) {
        if (numerator == 0) return "0";
        HashMap<Long, Integer> remains = new HashMap<Long, Integer>();
        StringBuilder res = new StringBuilder();
        boolean isNegative = false;
        long num = (long)numerator;
        long deno = (long)denominator;
        if (num < 0) {
            num = Math.abs(num);
            isNegative = !isNegative;
        }
        if (deno < 0) {
            deno = Math.abs(deno);
            isNegative = !isNegative;
        }
        if (isNegative) res.append("-");
        String appendInte = Long.toString(num / deno);
        if (appendInte.charAt(0) == '-') appendInte = appendInte.substring(1);
        res.append(appendInte);
        num = num % deno;
        if (num > 0) res.append(".");
        remains.put(num, res.length());
        
        while (num > 0) {
            num *= 10;
            String appendRes = Long.toString(num / deno);
            if (appendRes.charAt(0) == '-') appendRes = appendRes.substring(1);
            res.append(appendRes);
            num = num % deno;
            if (remains.containsKey(num)) {
                int pos = remains.get(num);
                res.insert(pos, "(");
                res.append(")");
                break;
            }
            remains.put(num, res.length());
        }
        
        return res.toString();
    }
```
