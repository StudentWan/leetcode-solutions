#### Brian Kernighan's bit counting algorithm

```c++
class Solution {
public:
    int hammingDistance(int x, int y) {
        int distance = 0, n = x ^ y;
        while (n != 0) {
            distance++;
            n &= n - 1;
        }
        return distance;
    }
};
```