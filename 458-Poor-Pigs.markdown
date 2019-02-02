#### Math

```c++
/*
https://leetcode.com/problems/poor-pigs/discuss/94266/Another-explanation-and-solution
*/
class Solution {
public:
    int poorPigs(int buckets, int minutesToDie, int minutesToTest) {
        int pigs = 0;
        while (pow(minutesToTest / minutesToDie + 1, pigs) < buckets) {
            pigs++;
        }
        return pigs;
    }
};
```