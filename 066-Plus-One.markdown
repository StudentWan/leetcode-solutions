### 题目描述

#### 66. Plus One

Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.

### 代码及思路：

#### 我的代码及思路

```java
    /*
    本算法的时间复杂度是O(n)

    思路很简单，判断是否进位，如果有进位则继续加，没有就返回。

    当全是9的时候返回一个长度加一的1000.....000数组

    不过这个算法的缺陷在于，不需要判断是否进位，只需要判断当前位是不是9就可以了。

    所以在Disscuss区学到的方法是相同的思路，但判断条件更少
    */
    public int[] plusOne(int[] digits) {
        boolean isCarry = true;
        for (int i = digits.length - 1; i >= 0; i--) {
            if (isCarry) {
                if (digits[i] == 9) {
                    digits[i] = 0;
                } else {
                    digits[i] = digits[i] + 1;
                    isCarry = false;
                    return digits;
                }
            }
        }
        
        digits = new int[digits.length + 1];
        digits[0] = 1;
        return digits;
    }
```

#### 学习到的代码和思路

```java
    /*
    相同的思路，但判断条件更少
    */
    public int[] plusOne(int[] digits) {
        for (int i = digits.length - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++;
                return digits;
            }
            digits[i] = 0;
        }
        
        digits = new int[digits.length + 1];
        digits[0] = 1;
        return digits;
    }
```