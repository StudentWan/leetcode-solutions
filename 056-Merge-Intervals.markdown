### 题目描述

#### 56. Merge Intervals

Given a collection of intervals, merge all overlapping intervals.

For example,
Given `[1,3],[2,6],[8,10],[15,18]`,
return `[1,6],[8,10],[15,18]`.


### 代码及思路：

#### 我的代码及思路：

```java
    /*
    本算法的时间复杂度是O(nlog2n)。

    主要的思路是先把Interval按照start的升序排列，然后比较节点的end与下一个节点的start，如果this.end >= next.start，就说明有重叠部分，这时就更新结果中最后的节点，如果没有重叠部分就将下一个节点加入结果中。

    主要是时间消耗在于Interval必须按照start升序排列。
    */
    public List<Interval> merge(List<Interval> intervals) {
        List<Interval> result = new ArrayList<Interval>();
        if (intervals.size() == 0) {
            return result;
        }
        intervals.sort((i1, i2) -> Integer.compare(i1.start, i2.start));
        result.add(intervals.get(0));
        for (Interval interval : intervals) {
            if (result.get(result.size() - 1).end >= interval.start) {
                result.get(result.size() - 1).start = Math.min(result.get(result.size() - 1).start, interval.start);
                 result.get(result.size() - 1).end = Math.max(result.get(result.size() - 1).end, interval.end);
            }
            else {
               result.add(interval);
            }
        }
        
        return result;
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法的时间复杂度也是O(nlog2n)。

    但十分精妙。

    本算法将每个interval中的starts和ends各存储在一个数组中，并且将这个数组升序排列。

    由于数组的升序排列，所以不需要在比较this.end和next.end、this.start和next.start谁大谁小，在前面的一定小，在后面的一定大。

    然后用一个指针j指示start。

    遍历一个指针i，如果starts[i + 1] > end[i]，说明之前的节点没有重叠，将(starts[j], ends[i])加入到结果中，同时更新j为i + 1，作为下一个开始。

    最后当i = n - 1时，将(starts[j], ends[n - 1])加入结果即可。

    非常巧妙，将二维的问题转化成一维的问题来简化解决方案，并且利用排序等方法来避免不必要的比较开销。
    */
    public List<Interval> merge(List<Interval> intervals) {
        // sort start&end
        int n = intervals.size();
        int[] starts = new int[n];
        int[] ends = new int[n];
        for (int i = 0; i < n; i++) {
            starts[i] = intervals.get(i).start;
            ends[i] = intervals.get(i).end;
        }
        Arrays.sort(starts);
        Arrays.sort(ends);
        // loop through
        List<Interval> res = new ArrayList<Interval>();
        for (int i = 0, j = 0; i < n; i++) { // j is start of interval.
            if (i == n - 1 || starts[i + 1] > ends[i]) {
                res.add(new Interval(starts[j], ends[i]));
                j = i + 1;
            }
        }
        return res;
    }
```