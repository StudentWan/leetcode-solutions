#### Sort

```js
var wiggleSort = function(nums) {
    const tmp = new Array(nums);
    for (let i = 0; i < nums.length; i++) {
        tmp[i] = nums[i];
    }
    tmp.sort((a, b) => a - b);
    const p = Math.ceil(tmp.length / 2);
    let i = p - 1, j = tmp.length - 1;
    for (let k = 0; k < nums.length; k++) {
        if (k % 2 === 0) {
            nums[k] = tmp[i--];
        } else {
            nums[k] = tmp[j--];
        }
    }
};
```

#### Virtual Indexing

非常brilliant的算法。

首先用c++中的nth_element，在O(n) time, O(1) space限制下找到中值。

然后虚拟化下标，并采用三路划分结合虚拟化下标的方式实现最终的排序。

```c++
void wiggleSort(vector<int>& nums) {
    int n = nums.size();
    
    // Find a median.
    auto midptr = nums.begin() + n / 2;
    nth_element(nums.begin(), midptr, nums.end());
    int mid = *midptr;
    
    // Index-rewiring.
    #define A(i) nums[(1+2*(i)) % (n|1)]

    // 3-way-partition-to-wiggly in O(n) time with O(1) space.
    int i = 0, j = 0, k = n - 1;
    while (j <= k) {
        if (A(j) > mid)
            swap(A(i++), A(j++));
        else if (A(j) < mid)
            swap(A(j), A(k--));
        else
            j++;
    }
}
```