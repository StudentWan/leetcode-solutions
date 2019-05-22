#### Swap

希望删除数组中pos位置的元素，但又希望避免shift数组的开销，将pos位置元素与数组末尾元素进行交换，然后删除数组末尾的元素。

这是一种非常杰出，令人惊叹的思想。

```js
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.map = new Map();
    this.array = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) {
        return false;
    }
    this.array.push(val);
    this.map.set(val, this.array.length - 1);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) {
        return false;
    }
    
    // 如果val不在数组末尾则交换位置
    const pos = this.map.get(val);
    const last = this.array.length - 1;
    if (pos !== last) {
        this.map.set(this.array[last], pos);
        this.array[pos] = this.array[last];
        this.array[last] = val;
    }
    
    this.array.splice(this.array.length - 1, 1);
    this.map.delete(val);
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.array[Math.floor(Math.random() * this.array.length)];
};
```