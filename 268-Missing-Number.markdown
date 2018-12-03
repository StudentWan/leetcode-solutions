#### bit manipulation

```c++
/*
feature:
a ^ a = 0;
b ^ a ^ a = b;
*/
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int x = 0;
        int i = 0;
        for (; i < nums.size(); i++) {
            x = x ^ i ^ nums[i];
        }
        return x ^ i;
    }
};
```