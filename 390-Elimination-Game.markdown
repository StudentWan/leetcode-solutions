#### Brute-Force (MLE)

起初考虑这个问题，认为或者能够找到合适的数据结构实现高效的Elimination流程，或者有一个Math的思路。

但是两个思路都没有想到合适的方法，于是就先写了一个暴搜，但是结果是MLE了，因此我感觉应该是有一个Math方法，但是嘛。。。请看下文。

```js
var lastRemaining = function(n) {
    let nums = new Array(n);
    for (let i = 0; i < nums.length; i++) {
        nums[i] = i + 1;
    }
    
    let left = true;
    while (nums.length > 1) {
        let tmp = nums;
        nums = [];
        if (left) {
            for (let i = 1; i < tmp.length; i += 2) {
                nums.push(tmp[i]);
            }
            left = false;
        } else {
            for (let i = tmp.length - 2; i >= 0; i -= 2) {
                nums.push(tmp[i]);
            }
            nums.reverse();
            left = true;
        }
    }
    return nums[0];
};
```

#### Record head

结果看了Discuss区，并没有看到Math方法，但是看到了下面这个十分巧妙的算法。

此题的问题在于如果去实现整个Elimination的流程的话，找不到合适的数据结构使得n巨大的情况下堆空间不溢出，但是，其实我们不必去实现整个Elimination的流程，只需要考虑如何得到最后剩下的数字，而这个问题可以记录head来取得。

当剩下的数只有1个的时候，head就是我们的返回值。

而更新head，只有从左，或者从右但剩余整数为奇数个的情况。

另外，step的更新经过了仔细观察和推导，非常巧妙。

本题给我的启发是：如果一个流程可能造成时间/空间开销过大，并且我们所求问题的只是该流程的一部分结果的话，可以思考如何去摒除流程中的无关信息，只保留有关部分，从而减少开销。

```js
var lastRemaining = function(n) {
    let remain = n;
    let head = 1;
    let step = 1;
    let left = true;
    
    while (remain > 1) {
        if (left || remain % 2 === 1) {
            head += step;
        }
        remain = remain >>> 1;
        step *= 2;
        left = !left;
    }
    return head;
};
```