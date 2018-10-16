```java
    public int rob(int[] nums) {
        // 抢劫过程从第一间房到最后一间房
        // prevNo表示到上一间房为止，如果上一间房没有被抢劫，抢到的钱的最大值
        // prevYes表示到上一间房为止，如果上一间房被抢劫，抢到的钱的最大值
        int prevNo = 0;
        int prevYes = 0;
        for (int n : nums) {
            int temp = prevNo;
            prevNo = Math.max(prevNo, prevYes);
            prevYes = n + temp;
        }
        return Math.max(prevNo, prevYes);
    }
```