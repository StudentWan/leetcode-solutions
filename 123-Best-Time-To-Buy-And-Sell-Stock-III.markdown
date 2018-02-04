### 题目描述

#### 123. Best Time to Buy and Sell Stock III

Say you have an array for which the i'th element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

`Note:`

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

### 代码及思路

#### 我的代码及思路：

```java
    /*
    其实本算法是得到了一些提示，看到有人说可以将数组分割，才想到可以将I的算法扩展得到这一算法。

    时间复杂度是O(n)，空间复杂度是O(n)。
    */
    public int maxProfit(int[] prices) {
        if (prices.length < 2) return 0;
    
        int n = prices.length;
        int[] preMax = new int[n];
        int[] postMax = new int[n];
        
        preMax[1] = Math.max(prices[1] - prices[0], 0);
        int minForPre = Math.min(prices[0], prices[1]);
        for (int i = 2; i < n; i++) {
            minForPre = Math.min(minForPre, prices[i]);
            preMax[i] = Math.max(preMax[i - 1], prices[i] - minForPre);
        }
        
        postMax[n - 2] = Math.max(prices[n - 1] - prices[n - 2], 0);
        int maxForPost = Math.max(prices[n - 1], prices[n - 2]);
        for (int j = n - 3; j >= 0; j--) {
            maxForPost = Math.max(maxForPost, prices[j]);
            postMax[j] = Math.max(postMax[j + 1], maxForPost - prices[j]);
        }
        
        
        int max = preMax[n - 1];
        for (int i = 0; i < n - 1; i++) {
            max = Math.max(max, preMax[i] + postMax[i + 1]);
        }
        
        return max;
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法十分巧妙，时间复杂度是O(n)，空间复杂度是O(1)。

    它的精髓在于只维护四个变量。

    在进入循环之后，变量改变之前。

    firstBuy表示i以前，第一次购买后的最大利润。

    firstSell表示i以前，第一次卖出后的最大利润。

    secondBuy表示i以前，第二次购买后的最大利润。

    secondSell表示i以前，第二次售出后的最大利润。

    通过对价格数组进行遍历，总是取目前能得到的最大利润。

    最后secondSell就是两次买卖能够取得的最大利润。

    最令人困惑的一点是，如果只进行一次买卖，为何可以得到secondSell是取得的最大利润？

    这个问题的答案是，本算法并没有严格按照题意要求来遍历，而是有一处取巧的点，即，它的计算可以包括当天买当天卖的情况。

    如此一来，如果一次交易能够得到最大值，那么secondSell实际上是进行了一个当天买当天卖的操作，它和firstSell是相等的。

    也就是说，secondSell >= firstSell。

    如此得解，亦是DP的思想，减少了数据的维护量，值得学习。
    */
    public int maxProfit(int[] prices) {
        // these four variables represent your profit after executing corresponding transaction
        // in the beginning, your profit is 0. 
        // when you buy a stock ,the profit will be deducted of the price of stock.
        int firstBuy = Integer.MIN_VALUE, firstSell = 0;
        int secondBuy = Integer.MIN_VALUE, secondSell = 0;

        for (int curPrice : prices) {
            if (firstBuy < -curPrice) firstBuy = -curPrice; // the max profit after you buy first stock
            if (firstSell < firstBuy + curPrice) firstSell = firstBuy + curPrice; // the max profit after you sell it
            if (secondBuy < firstSell - curPrice) secondBuy = firstSell - curPrice; // the max profit after you buy the second stock
            if (secondSell < secondBuy + curPrice) secondSell = secondBuy + curPrice; // the max profit after you sell the second stock
        }
        
        return secondSell; // secondSell will be the max profit after passing the prices
    }
```