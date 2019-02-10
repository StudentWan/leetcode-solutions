#### count island and neighbour

```c++
class Solution {
public:
    int islandPerimeter(vector<vector<int>>& grid) {
        int m = grid.size(); // rows
        int n = grid[0].size(); // columns
        int island = 0, neighbour = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    island++; 
                    if (i < m - 1 && grid[i + 1][j] == 1) { // down
                        neighbour++;
                    }
                    if (j < n - 1 && grid[i][j + 1] == 1) { // right
                        neighbour++;
                    }
                }
            }
        }
        return island * 4 - neighbour * 2;
    }
};
```