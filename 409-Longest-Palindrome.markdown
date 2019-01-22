#### Hash Set

```c++
class Solution {
public:
    int longestPalindrome(string s) {
        if (s.size() == 0) {
            return 0;
        }
        unordered_set<char> set;
        int i = 0;
        int count = 0;
        while (i < s.size()) {
            if (set.count(s[i])) {
                count++;
                set.erase(s[i]);
            } else {
                set.insert(s[i]);
            }
            i++;
        }
        return set.empty() ? count * 2 : count * 2 + 1;
    }
};
```