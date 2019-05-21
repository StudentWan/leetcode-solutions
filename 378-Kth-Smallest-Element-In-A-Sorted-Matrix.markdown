#### Heap

这类求多个最小值的题，最适合用优先队列来完成，因为各项操作的时间复杂度均为O(logk)。

思路一般是维护一个优先队列，将**可以保证**得到最小值的一组数据入队列。

然后依次poll()并更新优先队列，直到得到最后的结果。

求最大值亦然。

```js
class Solution {
    public int kthSmallest(int[][] matrix, int k) {
        int n = matrix.length;
        PriorityQueue<Tuple> pq = new PriorityQueue<>();
        for (int j = 0; j < n; j++) {
            pq.offer(new Tuple(0, j, matrix[0][j]));
        }
        
        Tuple tmp;
        for (int i = 0; i < k - 1; i++) {
            tmp = pq.poll();
            if (tmp.i < n - 1) {
                pq.offer(new Tuple(tmp.i + 1, tmp.j, matrix[tmp.i + 1][tmp.j]));
            }
        }
        return pq.poll().val;
    }
}

class Tuple implements Comparable<Tuple> {
    int i, j, val;
    public Tuple(int i, int j, int val) {
        this.i = i;
        this.j = j;
        this.val = val;
    }

    public int compareTo(Tuple that) {
        return this.val - that.val;
    }
}
```

#### Binary Search

我们使用最多的二分查找是根据下标index来进行划分，但这只适用于线性有序的序列查找。

但其实还有一种常用的二分查找思想是根据范围range来进行划分，此题就是代表，这种思想处理部分有序的序列效果很好。

```js
var kthSmallest = function(matrix, k) {
    let n = matrix.length;
    let lo = matrix[0][0];
    let hi = matrix[n - 1][n - 1];
    let mid;
    while (lo < hi) {
        mid = lo + ((hi - lo) >>> 1);
        let cnt = 0;
        let j = n - 1;
        for (let i = 0; i < n; i++) {
            while (j >= 0 && matrix[i][j] > mid) {
                j--;
            }
            cnt += j + 1;
        }
        if (cnt < k) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
};
```