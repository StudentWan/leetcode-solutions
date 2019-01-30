#### Math

```c++
/*
say after m moves, we make the array equals, and all elements are equal to x
we got
sum + m * (n - 1) = x * n
since
x = min + m
we got
m = sum - min * n
*/
class Solution {
public:
    int minMoves(vector<int>& nums) {
        if (nums.size() == 0) {
            return 0;
        }
        int sum = getSum(nums);
        int min = getMin(nums);
        return sum - min * nums.size();
    }
private:
    int getSum(vector<int>& nums) {
        int sum = 0;
        for (int i = 0; i < nums.size(); i++) {
            sum += nums[i];
        }
        return sum;
    }
    int getMin(vector<int>& nums) {
        int min = nums[0];
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] < min) {
                min = nums[i];
            }
        }
        return min;
    }
};
```