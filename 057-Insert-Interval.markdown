### 题目描述

#### 57. Insert Interval

Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

`Example 1:`

Given intervals `[1,3],[6,9]`, insert and merge `[2,5]` in as `[1,5],[6,9]`.

`Example 2:`

Given `[1,2],[3,5],[6,7],[8,10],[12,16]`, insert and merge `[4,9]` in as `[1,2],[3,10],[12,16]`.

This is because the new interval `[4,9]` overlaps with `[3,5],[6,7],[8,10]`.

### 代码及思路

#### 我的代码及思路：

```java
    /*
    本算法的时间复杂度是O(n)。

    算法的思路很简单，先把应插入结果列表的已merge的间隔计算出来，然后将这个间隔之前和之后的间隔按序插入到结果列表中。

    最后再把这个间隔插入到结果列表中适当的位置。

    学习了DISCUSS区的解法，基本思路是一致的，处理手法上有一些不同，这里就不记录了。
    */
    public List<Interval> insert(List<Interval> intervals, Interval newInterval) {
        for (int i = 0; i < intervals.size(); i++) {
            Interval now = intervals.get(i);
            if (now.start <= newInterval.start && now.end >= newInterval.start) {
                newInterval.start = now.start;
            }
            if (now.start <= newInterval.end && now.end >= newInterval.end) {
                newInterval.end = now.end;
            }
        }
        
        List<Interval> result = new ArrayList<Interval>();
        for (int j = 0; j < intervals.size(); j++) {
            Interval now = intervals.get(j);
            if (now.end < newInterval.start || now.start > newInterval.end) {
                result.add(now);
            }
        }
        
        int k;
        for (k = 0; k < result.size(); k++) {
            Interval now = result.get(k);
            if (k == 0 && newInterval.end < now.start) break;
            if (k == result.size() - 1) {
                k++;
                break;
            };
            Interval then = result.get(k + 1);
            if (now.end < newInterval.start && then.start > newInterval.end) {
                k++;
                break;
            }
        }
        
        result.add(k, newInterval);
        
        return result;
    }
```