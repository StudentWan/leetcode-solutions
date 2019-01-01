#### using bit count

```c++
class Solution {
public:
    vector<string> readBinaryWatch(int num) {
        vector<string> res;
        if (num > 8) {
            return res;
        }
        for (int h = 0; h < 12; h++) {
            for (int m = 0; m < 60; m++) {
                if (bitset<10>((h << 6) + m).count() == num) {
                    string s;
                    if (m < 10) {
                        s = to_string(h) + ":0" + to_string(m); 
                    } else {
                        s = to_string(h) + ":" + to_string(m);
                    }
                    res.push_back(s);
                }
            }
        }
        return res;
    }
};
```