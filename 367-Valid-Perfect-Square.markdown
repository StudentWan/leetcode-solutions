### Equal difference series

```c++
class Solution {
public:
    bool isPerfectSquare(int num) {
        for (int i = 1; num > 0; i += 2) {
            num -= i;
        }
        return num == 0;
    }
};
```

### Binary Search

```c++
class Solution {
public:
    bool isPerfectSquare(int num) {
        int l = 0, r = num;
        while (l <= r) {
            long long m = l + (r - l) / 2;
            long long square = m * m;
            if (square == num) {
                return true;
            } else if (square > num) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return false;
    }
};
```