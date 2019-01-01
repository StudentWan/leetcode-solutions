### Use vector to represent map

```c++
class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        vector<int> vec(26, 0);
        for (int i = 0; i < magazine.length(); i++) {
            ++vec[magazine[i] - 'a'];
        }
        for (int j = 0; j < ransomNote.length(); j++) {
            if (--vec[ransomNote[j] - 'a'] < 0) {
                return false;
            }
        }
        return true;
    }
};
```