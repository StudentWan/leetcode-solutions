### 题目描述

#### 152. Maximum Product Subarray

Find the contiguous subarray within an array (containing at least one number) which has the largest product.

For example, given the array `[2,3,-2,4]`,
the contiguous subarray `[2,3]` has the largest product = `6`.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    这道题一看就跟Max Subarray很像，我第一时间想到了用DP来解。

    即，当前的最大值，要么包括刚遍历到的数，要么就是以前的最大值。

    可是因为是乘法，所以 包括刚遍历的数的最大值 我没有想到简单的方法来求，于是就采用了遍历的方法，于是这个算法的时间复杂度达到了O(n ^ 2)，不出所料的TLE了。
    */
    public int maxProduct(int[] nums) {
        int tempMax = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            int maxAtLength = nums[i];
            int conProduct = nums[i];
            for (int j = i - 1; j >= 0; j--) {
                conProduct = conProduct * nums[j];
                maxAtLength = conProduct > maxAtLength ? conProduct : maxAtLength;
            }
            tempMax = Math.max(tempMax, maxAtLength);
        }
        
        return tempMax;
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法的时间复杂度是O(n)。

    在总体的求解思路上也是利用了Kadane算法的思路，不过优秀之处在于它想到了如何求解maxHere。

    本算法的思路是这样的：

    先记录一个maxHerePre和minHerePre，在遍历到一个数时，maxHere的值必然是maxHerePre * nums[i], minHerePre * nums[i]以及nums[i]中的最大值，这是由乘法的性质决定的(maxHerePre、minHerePre和nums[i]可以为0)。

    minHere同理。

    然后由maxSoFar和maxHere确定下一步的maxSoFar。

    然后更新maxHerePre和minHerePre。
    */
    public int maxProduct(int[] nums) {
        int maxHerePre = nums[0];
        int minHerePre = nums[0];
        int maxSoFar = nums[0];
        int maxHere, minHere;
        
        for (int i = 1; i < nums.length; i++) {
            maxHere = Math.max(Math.max(maxHerePre * nums[i], minHerePre * nums[i]), nums[i]);
            minHere = Math.min(Math.min(maxHerePre * nums[i], minHerePre * nums[i]), nums[i]);
            maxSoFar = Math.max(maxHere, maxSoFar);
            maxHerePre = maxHere;
            minHerePre = minHere;
        }
        
        return maxSoFar;
    }
```