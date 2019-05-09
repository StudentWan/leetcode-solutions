#### 1D Caching && Dynamic Programming

```js
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.m = matrix.length;
    if (this.m === 0) {
        return ;
    }
    this.n = matrix[0].length;
    this.store = new Array(this.m);
    for (let i = 0; i < this.m; i++) {
        this.store[i] = new Array(this.n + 1);
        this.store[i][0] = 0;
        for (let j = 1; j <= this.n; j++) {
            this.store[i][j] = this.store[i][j - 1] + matrix[i][j - 1];
        }
    }
    
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;
    for (let i = row1; i <= row2; i++) {
        sum += (this.store[i][col2 + 1] - this.store[i][col1]);
    }
    return sum;
};
```

#### 2D Caching && Dynamic Programming

```js
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    const m = matrix.length;
    if (m === 0) {
        return ;
    }
    const n = matrix[0].length;
    this.dp = new Array(m + 1);
    for (let i = 0; i < m + 1; i++) {
        this.dp[i] = new Array(n + 1);
        for (let j = 0; j < n + 1; j++) {
            if (i === 0 || j === 0) {
                this.dp[i][j] = 0;
            } else {
                this.dp[i][j] = this.dp[i - 1][j] + this.dp[i][j - 1] - this.dp[i - 1][j - 1] + matrix[i - 1][j - 1];
            }
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.dp[row2 + 1][col2 + 1] - this.dp[row1][col2 + 1] - this.dp[row2 + 1][col1] + this.dp[row1][col1];
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
```
