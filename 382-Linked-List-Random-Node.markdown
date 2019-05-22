#### Reservoir Sampling

水库取样算法，One Pass以k/n概率取k个数据，牛逼。

证明：

https://gregable.com/2007/10/reservoir-sampling.html

```js
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.head = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let walk = this.head.next;
    let res = this.head.val;
    let i = 1;
    while (walk !== null) {
        if (Math.random() - 1 / (1 + i) <= 0) {
            res = walk.val;
        }
        walk = walk.next;
        i++;
    }
    return res;
};
```