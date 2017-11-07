### 题目描述

#### 119. Pascal's Triangle II

Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

`Note:`

Could you optimize your algorithm to use only O(k) extra space?

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    与118题采用的优化算法一直，达到了题目中优化算法的需求。
    */
    public List<Integer> getRow(int rowIndex) {
        List<Integer> res = new ArrayList<Integer> ();
        for (int i = 0; i <= rowIndex; i++) {
            res.add(0, 1);
            for (int j = 1; j < i; j++) {
                res.set(j, res.get(j) + res.get(j + 1));
            }
        }
        return res;
    }
```