### 题目描述

#### 118. Pascal's Triangle

Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

```
    [
        [1],
       [1,1],
      [1,2,1],
     [1,3,3,1],
    [1,4,6,4,1]
    ]
```

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    我的算法时间复杂度是O(n^2)，采用传统的杨辉三角构造方法进行构造。

    缺陷是存在一些额外的空间开销。

    主要是学习到了Java中一种有用的数据结构---列表。

    对泛型也有了一定的理解。
    */
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> triangle = new ArrayList<List<Integer>>();
        for (int i = 1; i <= numRows; i++) {
            if (i == 1) {
                List<Integer> firstRow = new ArrayList<Integer>();
                firstRow.add(1);
                triangle.add(firstRow);
            } else {
                List<Integer> aRow = new ArrayList<Integer>();
                List<Integer> lastRow = triangle.get(i - 2);
                for (int j = 0; j < i; j++) {
                    if (j == 0 || j == (i - 1)) {
                        aRow.add(1);
                    } else {
                        aRow.add(lastRow.get(j - 1) + lastRow.get(j));
                    }
                }
                triangle.add(aRow);
            }
        }
        return triangle;
    }
```

#### 学习到的算法和思路：

```java
    /*
    本算法的时间复杂度也是O(n^2)

    它的优秀之处在于作者很明显对Java的数据结构掌握的更熟练，运用一个临时列表模拟了杨辉三角的相邻两列

    j每次循环前tempRes是在上一列的前缀上放一个1，j每次循环后tempRes就是那一列杨辉三角的结果
    */
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> triangle = new ArrayList<List<Integer>>();
        List<Integer> tempRes = new ArrayList<Integer>();
        for (int i = 0; i < numRows; i++) {
            tempRes.add(0, 1);
            for (int j = 1; j < i; j++) {
                tempRes.set(j, tempRes.get(j) + tempRes.get(j + 1));
            }
            triangle.add(new ArrayList<Integer>(tempRes));
        }
        return triangle;
    }
```