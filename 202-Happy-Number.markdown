#### Floyd Cycle detection

```java
class Solution {
    public boolean isHappy(int n) {
        int slow = n;
        int fast = n;
        do {
            slow = getDigitsSquaresSum(slow);
            fast = getDigitsSquaresSum(fast);
            fast = getDigitsSquaresSum(fast);
        } while (slow != fast);
        return slow == 1 ? true : false;
    }
    
    public int getDigitsSquaresSum(int n) {
        int sum = 0, tmp;
        while (n > 0) {
            tmp = n % 10;
            sum += tmp * tmp;
            n = n / 10;
        }
        return sum;
    }
}
```