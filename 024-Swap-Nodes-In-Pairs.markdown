### 题目描述

#### 24. Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given `1->2->3->4`, you should return the list as `2->1->4->3`.

Your algorithm should use only constant space. You may `not` modify the values in the list, only nodes itself can be changed.

### 代码及思路

```java
    /*
    思路是比较直观的，需要注意的是切换head节点，以及暂存上一次的翻转结果。
    */
    public ListNode swapPairs(ListNode head) {
        ListNode lastEnd = null;
        ListNode pointer = head;
        if (pointer != null && pointer.next != null) head = pointer.next;
        while (pointer != null && pointer.next != null) {
            if (lastEnd != null) lastEnd.next = pointer.next;
            ListNode tmp = pointer.next.next;
            pointer.next.next = pointer;
            pointer.next = tmp;
            
            lastEnd = pointer;
            pointer = pointer.next;
        }
        
        return head;
    }
```