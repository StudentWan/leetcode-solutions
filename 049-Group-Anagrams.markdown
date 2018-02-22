### 题目描述

#### 49. Group Anagrams

Given an array of strings, group anagrams together.

For example, given: `["eat", "tea", "tan", "ate", "nat", "bat"]`, 
Return:

    [
        ["ate", "eat","tea"],
        ["nat","tan"],
        ["bat"]
    ]

`Note:` All inputs will be in lower-case.

### 代码及思路

```java
    /*
    我想到了可以用一个HashMap存储列表在结果中的位置。

    但是思路卡在如何判断字符串之间是否是anagrams，于是我企图通过每一个不同的anagrams来构造一个独特的数组加在HashMap中

    但是这种情况下，我的算法没有得到验证就一定会产生冲突。

    没有想到解决办法，是看DISCUSS区才想到了可以把字符串转换为字符串数组，利用字母顺序排序后再转换为字符串作为HashMap中的键。
    */
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> result = new ArrayList<List<String>>();
        Map<String, Integer> store = new HashMap<String, Integer>();
        int count = 0;
        
        for (String str : strs) {
            char[] arr = str.toCharArray();
            Arrays.sort(arr);
            String tempStr = String.valueOf(arr);
            if (!store.containsKey(tempStr)) {
                store.put(tempStr, count);
                count++;
                List<String> row = new ArrayList<String>();
                result.add(row);
                row.add(str);
            }
            else {
                result.get(store.get(tempStr)).add(str);
            }
        }
        
        return result;
    }
```

