#### Hash Table

```c++
/*
 1. Store same distance value to get tuple
 2. Clear map for each loop
*/
class Solution {
public:
    int numberOfBoomerangs(vector<pair<int, int>>& points) {
        int n = points.size();
        int res = 0;
        unordered_map<int, int> m;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i == j) {
                    continue;
                }
                
                int d = getDistance(points[i], points[j]);
                m[d]++;
            }
            
            for (const auto& item : m) {
                res += item.second * (item.second - 1);
            }
            m.clear();
        }
        return res;
    }
 
private: 
    int getDistance(pair<int, int>& p1, pair<int, int>& p2) {
        return (p1.first - p2.first) * (p1.first - p2.first) + (p1.second - p2.second) * (p1.second - p2.second);
    }
};
```