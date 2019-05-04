#### O(mn)

```js
var searchMatrix = function(matrix, target) {
    return search(matrix, target, 0, 0);
};

var search = function(matrix, target, i, j) {
    if (i >= matrix.length || j >= matrix[0].length) {
        return false;
    }
    
    if (matrix[i][j] > target) {
        return false;
    }
    
    for (let row = i; row < matrix.length; row++) {
        if (matrix[row][j] === target) {
            return true;
        }
        if (matrix[row][j] > target) {
            break;
        }
    }
    
    for (let col = j + 1; col < matrix[0].length; col++) {
        if (matrix[i][col] === target) {
            return true;
        }
        if (matrix[i][col] > target) {
            break;
        }
    }
    
    return search(matrix, target, i + 1, j + 1);
}
```

#### O(m + n)

```js
/**
 * Top-Right Corner makes a difference.
 * 通过横纵轴交叉搜索。
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    let row = 0;
    let col = matrix[0].length - 1;
    let val;
    while (row < matrix.length && col > -1) {
        val = matrix[row][col]
        if (val === target) {
            return true;
        } else if (val < target) {
            row++;
        } else {
            col--;
        }
    }
    return false;
};
```