#### Segment Tree (线段树)

另有一种基于Iteration的线段树解法，但不是很intuitive.

```js
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.tree = [];
    this.nums = nums;
    if (nums.length > 0) {
        this.buildTree(1, 0, nums.length - 1);   
    }
};

NumArray.prototype.buildTree = function(index, l, r) {
    if (l === r) {
        this.tree[index] = this.nums[l];
        return ;
    }
    const mid = Math.floor((l + r) / 2);
    this.buildTree(index * 2, l, mid);
    this.buildTree(index * 2 + 1, mid + 1, r);
    this.tree[index] = this.tree[index * 2] + this.tree[index * 2 + 1];
    return ;
}

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    this.updateRecur(1, 0, this.nums.length - 1, i, val);
};

NumArray.prototype.updateRecur = function(index, l, r, A, B) {
    if (l === r) {
        this.tree[index] = B;
        this.nums[A] = B;
        return ;
    }
    
    const mid = Math.floor((l + r) / 2);
    if (A <= mid) {
        this.updateRecur(index * 2, l, mid, A, B);
    } else {
        this.updateRecur(index * 2 + 1, mid + 1, r, A, B);
    }
    this.tree[index] = this.tree[index * 2] + this.tree[index * 2 + 1];
    return ;
}

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sumRecur(1, 0, this.nums.length - 1, i, j);
};

NumArray.prototype.sumRecur = function(index, l, r, i, j) {
    if (l >= i && r <= j) {
        return this.tree[index];
    }
    
    const mid = Math.floor((l + r) / 2);
    let count = 0;
    if (mid >= i) {
        count += this.sumRecur(index * 2, l, mid, i, j);
    }
    if (mid < j) {
        count += this.sumRecur(index * 2 + 1, mid + 1, r, i, j);
    }
    return count;
}

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
```
