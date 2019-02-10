#### iteration

```c++
class Solution {
public:
    bool repeatedSubstringPattern(string s) {
        string sub = "";
        int sLen = s.length();
        int subLen = sub.length();
        for (int i = 0; i < sLen / 2; i++) {
            sub += s[i];
            subLen++;
            if (sLen % subLen == 0) {
                int j = subLen;
                bool flag = true;
                while (j + subLen <= sLen) {
                    if (sub != s.substr(j, subLen)) {
                        flag = false;
                        break;
                    }
                    j += subLen;
                }
                if (flag) {
                    return flag;
                }
            }
        }
        return false;
    }
};
```

#### KMP

// todo