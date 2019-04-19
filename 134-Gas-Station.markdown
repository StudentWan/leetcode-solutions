#### Greedy

```js
/**
 * 本质上使用了贪心策略
 * 策略是算法尽可能延伸distance
 * 对每一个start，使用end++延伸distance
 * 如果sum < 0了，证明该start无效，此时通过start--延伸distance
 * 当start === end时，检查完所有循环
 * 算法的一个特殊技巧是使用end = 0, start = gas.length - 1作为初始值，可以避免边界检查
 */
var canCompleteCircuit = function(gas, cost) {
    let start = gas.length - 1;
    let end = 0;
    let sum = gas[start] - cost[start];
    
    while (end < start) {
        if (sum >= 0) {
            sum += gas[end] - cost[end];
            end++;
        } else {
            start--;
            sum += gas[start] - cost[start];
        }
    }
    
    return sum >= 0 ? start : -1;
};
```