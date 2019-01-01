#### solution

```c++
/*
find the length of the number where the nth digit is from
find the actual number where the nth digit is from
find the nth digit and return
*/

class Solution {
public:
    int findNthDigit(int n) {
        int len = 1;
        long count = 9;
        int start = 1;
        while (n > len * count) {   
            n -= len * count;
            len += 1;
            count *= 10;
            start *= 10;
        }
        
        start += (n - 1) / len;
        string s = to_string(start);
        return s[(n - 1) % len] - '0';
    }
};
```