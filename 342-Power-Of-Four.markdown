#### no loop or recursion

```c++
/*
证明：
首先保证num是power of 2
因为 4 mod 3 == 1 mod 3 == 1
所以 (4^n) mod 3 == (1^n) mod 3 == 1
所以 (4^n - 1) mod 3 == 0
即 (2^2n - 1) mod 3 == 0
*/
class Solution {
public:
    bool isPowerOfFour(int num) {
        return num > 0 && (num & (num - 1))== 0 && (num - 1) % 3 == 0;
    }
};
```