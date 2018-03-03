### 题目描述

#### 187. Repeated DNA Sequences

All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

For example,

    Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",

    Return:
    ["AAAAACCCCC", "CCCCCAAAAA"].

### 代码及思路

```java
    /*
    思路就是使用两个HashSet来完成寻找重复/去重。
    */
    public List<String> findRepeatedDnaSequences(String s) {
        List<String> result = new ArrayList<String>();
        HashSet<String> store = new HashSet<String>();
        HashSet<String> removR = new HashSet<String>();
        
        for(int i = 0; i <= s.length() - 10; i++) {
            String tmp = s.substring(i, i + 10);
            // 懒执行
            if(!store.add(tmp) && removR.add(tmp)) {
                result.add(tmp);
            }
        }
        
        return result;
    }
```