### 题目描述

#### 61. Rotate List

Given a list, rotate the list to the right by k places, where k is non-negative.


`Example:`

    Given `1->2->3->4->5->NULL` and `k = 2`,

    return `4->5->1->2->3->NULL`.

### 代码及思路

```java
    /*
    本题的思路其实很简单，就是找到head, last, newHead和newLast。

    比较麻烦的一点是要排除很多种情况。

    原链表为空的时候直接返回。

    因为k可能大于len，所以取k = k % len。

    如果取余后k == 0，则不用翻转，直接返回。
    */
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null) return head;
        ListNode newLast = head;
        ListNode newHead = head;
        ListNode last = head;
        int len = 0;
        
        while (last != null && last.next != null) {
            len++;
            last = last.next;
        }
        if (last != null) len++;
        
        int leftLen = 0;
        
        if (len > 0) {
            k = k % len;
            if (k == 0) return head;
            leftLen = len - k;
        }
        
        while (leftLen > 1) {
            newLast = newLast.next;
            leftLen--;
        }
        
        newHead = newLast.next;
        newLast.next = null;
        last.next = head;
        
        return newHead;
    }
```