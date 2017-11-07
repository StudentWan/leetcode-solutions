### 题目描述

#### 121. Best Time to Buy and Sell Stock

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

`Example 1:`

    Input: [7, 1, 5, 3, 6, 4]
    Output: 5

    max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)

`Example 2:`

    Input: [7, 6, 4, 3, 1]
    Output: 0

    In this case, no transaction is done, i.e. max profit = 0.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    本题跟53题（Maximus Subarray）比较类似，我想到了使用DP来解，依旧是参考了Kadane算法的思路。

    时间复杂度是O(n)
    */
    public int maxProfit(int[] prices) {
        if (prices.length <= 1) {
            return 0;
        }
        int maxForNow = Math.max(prices[1] - prices[0], 0);
        int minForNow = Math.min(prices[1], prices[0]);
        for (int i = 2; i < prices.length; i++) {
            minForNow = Math.min(minForNow, prices[i]);
            maxForNow = Math.max(maxForNow, prices[i] - minForNow);
        }
        return maxForNow;
    }
```

#### 学习到的代码及思路：

```java

```