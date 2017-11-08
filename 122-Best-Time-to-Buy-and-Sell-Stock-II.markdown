### 题目描述

#### 122. Best Time to Buy and Sell Stock II

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    我只想到了用递归的方式暴力搜索，最后超时了。

    就是通过循环，穷举所有可能的买卖情况，找到其中的最大值。
    */
    public int maxProfit(int[] prices) {
        return calculate(prices, 0);
    }
    
    public int calculate(int[] prices, int start) {
        int max = 0;
        for (int i = start; i < prices.length - 1; i++) {
            int maxThisOne = 0;
            for (int j = i + 1; j < prices.length; j++) {
                if (prices[j] > prices[i]) {
                    maxThisOne = prices[j] - prices[i] + calculate(prices, j + 1);
                }
                max = Math.max(maxThisOne, max);
            }
        }
        return max;
    }
```

#### 学习到的代码及思路1：

```java
    /*
    本算法的时间复杂度是O(n)，采用的思想是Peak and Valley。

    解释说明就是，价格会出现极大值(山峰，peak)和极小值(山谷，valley)，最后得到的最大利润肯定是连续的peak和valley之间差值的和。

    因为如果跳过了一个peak和valley，所得到的最大利润一定没有连续求peak和valley之间差值的和大。

    所以代码的挑战就变成了如何寻找peak和vally，跟下一个值比较就可以了。

    在找不到下一个peak和valley的时候，把peak和valley移动到同一点就可以了。

    这个算法思想虽然巧妙，但是coding的时候不太好表述，所以我还学习了另一种方法。
    */
    public int maxProfit(int[] prices) {
        if (prices.length == 0) {
            return 0;
        }
        int i = 0;
        int valley = prices[0];
        int peak = prices[0];
        int maxProfit = 0;
        
        while (i < prices.length - 1) {
            while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
                i++;
            }
            valley = prices[i];
            while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
                i++;
            }
            peak = prices[i];
            maxProfit += peak - valley;
        }
        
        return maxProfit;
    }
```

#### 学习到的代码及思路2：

```java
    /*
    本算法的时间复杂度是O(n)，而且算法异常简单。

    它的思想跟peak and valley类似，但更加简化。

    这个思想就是，一次买进卖出得到的利润，肯定是小于等于这次买进卖出期间多次买进卖出得到的利润。

    所以只需要计算每个日期与它前一个日期的差值利润（大于0的话），再把这些利润求和，所得的一定是最大利润。
    */
    public int maxProfit(int[] prices) {
        int maxProfit = 0;
        for (int i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                maxProfit += prices[i] - prices[i - 1];
            }
        }
        return maxProfit;
    }
```