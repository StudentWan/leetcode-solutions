### 题目描述

#### 40. Combination Sum II

Given a collection of candidate numbers (`C`) and a target number (`T`), find all unique combinations in `C` where the candidate numbers sums to `T`.

Each number in `C` may only be used once in the combination.

Note:

    All numbers (including target) will be positive integers.
    The solution set must not contain duplicate combinations.

For example, given candidate set `[10, 1, 2, 7, 6, 1, 5]` and target `8`, 

A solution set is: 

    [
        [1, 7],
        [1, 2, 5],
        [2, 6],
        [1, 1, 6]
    ]

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    与Combination Sum一样的思路，采用深度优先搜索。

    不一样的一点是，由于每个元素只能使用一次，所以在去重时需要格外注意。

    要去除的是在一个层级开始一个分支搜索时，该分支搜索与上一次同层级分支搜索重复的情况。
    */
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);
        List<List<Integer>> results = new ArrayList<List<Integer>>();
        backTrack(results, new ArrayList<Integer>(), candidates, target, 0);
        return results;
    }
    
    private void backTrack(List<List<Integer>> results, List<Integer> tempResult, int[] candidates, int remain, int start) {
        if (remain < 0) {
            return;
        }
        else if (remain == 0) {
            results.add(new ArrayList<Integer>(tempResult));
        }
        else {
            for (int i = start; i < candidates.length; i++) {
                if (i > 0 && i > start && candidates[i] == candidates[i - 1]) {
                    continue;
                }
                tempResult.add(candidates[i]);
                backTrack(results, tempResult, candidates, remain - candidates[i], i + 1);
                tempResult.remove(tempResult.size() - 1);
            }
        }
    }
```