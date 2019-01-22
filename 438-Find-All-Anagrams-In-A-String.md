#### Sliding Window

```c++
class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        vector<int> res;
        if (p.size() > s.size() || p.size() == 0) {
            return res;
        }
        vector<int> v(26, 0);
        for (auto ch : p) {
            v[ch - 'a']++;
        }
        
        int l = 0, r = 0, cnt = p.size();
        while (r < s.size()) {
            if (v[s[r++] - 'a']-- >= 1) {
                cnt--;
            }
            if (cnt == 0) {
                res.push_back(l);
            }
            if (r - l == p.size() && v[s[l++] - 'a']++ >= 0) {
                cnt++;
            }
        }
        return res;
    }
};
```