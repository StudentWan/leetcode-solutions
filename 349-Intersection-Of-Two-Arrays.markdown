#### unordered_set

```c++
class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> m(nums1.begin(), nums1.end());
        vector<int> res;
        for (auto num : nums2) {
            if (m.count(num)) {
                res.push_back(num);
                m.erase(num);
            }
        }
        return res;
    }
};
```