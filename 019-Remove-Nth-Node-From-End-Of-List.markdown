### 题目描述

#### 19. Remove Nth Node From End of List

Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: `1->2->3->4->5`, and `n = 2`.

   After removing the second node from the end, the linked list becomes `1->2->3->5`.

`Note:`

Given n will always be valid.
Try to do this in one pass.

### 代码及思路

```java
    /*
    运用队列的思想，利用两个指针维护一个大小为n + 1的区域，当l2走到链表尾部时，l1.next刚好指向要删除的节点。

    如果l2指向null了，l1就是要删除的节点。
    */
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode l1 = head;
        ListNode l2 = head;
        while (n > 0) {
            n--;
            l2 = l2.next;
        }
        
        if (l2 == null) return head.next;
        
        while (l2.next != null) {
            l1 = l1.next;
            l2 = l2.next;
        }
        
        l1.next = l1.next.next;
        
        return head;
    }
```