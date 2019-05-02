#### Boyer-Moore Voting Algorithm

```js
/**
 * Two Pass
 * First for vote
 * Second for check
 * https://gregable.com/2013/10/majority-vote-algorithm-find-majority.html
 */
var majorityElement = function(nums) {
    let candidate1 = nums[0];
    let candidate2 = nums[0];
    let count1 = 0;
    let count2 = 0;
    
    for (const num of nums) {
        if (num === candidate1) {
            count1++;
            continue;
        }
        
        if (num === candidate2) {
            count2++;
            continue;
        }
        
        if (count1 === 0) {
            candidate1 = num;
            count1++;
            continue;
        }
        
        if (count2 === 0) {
            candidate2 = num;
            count2++;
            continue;
        }
        
        count1--;
        count2--;
    }
    
    const res = [];
    const base = Math.floor(nums.length / 3);
    
    count1 = 0;
    count2 = 0;
    for (const num of nums) {
        if (num === candidate1) {
            count1++;
            continue;
        }
        if (num === candidate2) {
            count2++;
        }
    }
    
    if (count1 > base) {
        res.push(candidate1);
    }
    if (count2 > base) {
        res.push(candidate2);
    }
    
    return res;
};
```