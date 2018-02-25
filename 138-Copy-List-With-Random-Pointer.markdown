### 题目描述

#### 138. Copy List with Random Pointer

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

### 代码及思路

```java
    /*
    本算法时间复杂度为O(n)。

    最重要的一点是使用HashTable来存储源节点和复制节点。
    */
    public RandomListNode copyRandomList(RandomListNode head) {
        if(head==null) return null;
        
        HashMap<RandomListNode, RandomListNode> distinct = new HashMap<RandomListNode, RandomListNode>();
        int count = 0;
        RandomListNode res = new RandomListNode(head.label);
        RandomListNode tmp = res;
        RandomListNode storeHead = head;
        distinct.put(head, res);
        count++;
        while(head.next!=null && !distinct.containsKey(head.next)) {
            tmp.next = new RandomListNode(head.next.label);
            distinct.put(head.next, tmp.next);
            head = head.next;
            tmp = tmp.next;
            count++;
        }
        if(head.next != null) tmp.next = distinct.get(head.next);
        
        tmp = res; 
        while (count > 0) {
            if (storeHead.random != null) {
                tmp.random = distinct.get(storeHead.random);
            }
            tmp = tmp.next;
            storeHead = storeHead.next;
            count--;
        }
        
        return res;
    }
```