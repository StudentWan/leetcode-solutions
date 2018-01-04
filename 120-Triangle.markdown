### 题目描述

### 120. Triangle

Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle
    [
         [2],
        [3,4],
       [6,5,7],
      [4,1,8,3]
    ]
The minimum path sum from top to bottom is `11` (i.e., 2 + 3 + 5 + 1 = 11).

`Note:`

Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

### 代码及思路：

#### 我的代码及思路1：

```java
    /*
    最开始想要用递归做深搜，但是时间复杂度太高导致TLE了。
    */
    public int minimumTotal(List<List<Integer>> triangle) {
        int sum = triangle.get(0).get(0);
        sum = searchTotal(sum, 0, 1, triangle);
        return sum;
    }
    
    public int searchTotal(int sum, int index, int layer, List<List<Integer>> triangle) {
        if (layer == triangle.size()) return sum;
        List<Integer> row = triangle.get(layer);
        int sum1 = sum + row.get(index);
        int sum2 = sum + row.get(index + 1);
        sum1 = searchTotal(sum1, index, layer + 1, triangle);
        sum2 = searchTotal(sum2, index + 1, layer + 1, triangle);
        
        return sum1 > sum2 ? sum2 : sum1;
    }
```

#### 我的代码及思路2：

```java
    /*
    本算法采用了动态规划的思路。

    以triangle自身作为暂存的对象（所以extra space 是 O(1)），triangle中每一个元素代表到达它最短的路径。

    从三角形顶点开始往下做这样的循环，这个最小的元素和一定可以用作下一行的输入（因为必须到达这些元素，才可以继续向下寻找它相邻的元素）。

    循环到最后一行时，就找出了到最后一行每个元素的最短路径。

    寻找中间最小的一个值就可以了。
    */
    public int minimumTotal(List<List<Integer>> triangle) {
        for (int i = 1; i < triangle.size(); i++) {
            List<Integer> row = triangle.get(i);
            for (int j = 0; j < row.size(); j++) {
                if (j == 0) {
                    row.set(0, triangle.get(i - 1).get(0) + row.get(0));
                }
                else if (j == row.size() - 1) {
                    row.set(row.size() - 1, triangle.get(i - 1).get(row.size() - 2) + row.get(row.size() - 1));
                }
                else {
                    int left = triangle.get(i - 1).get(j - 1) + row.get(j);
                    int right = triangle.get(i - 1).get(j) + row.get(j);
                    row.set(j, left > right ? right : left); 
                }
            }
        }
        
        List<Integer> lastRow = triangle.get(triangle.size() - 1);
        int sum = lastRow.get(0);
        for (int i = 1; i < lastRow.size(); i++) {
            sum = sum < lastRow.get(i) ? sum : lastRow.get(i);
        }
        
        return sum;
    } 
```
