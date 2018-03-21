### 题目描述

#### 92. Reverse Linked List II

Reverse a linked list from position m to n. Do it in-place and in one-pass.

For example:

Given `1->2->3->4->5->NULL`, m = 2 and n = 4,

return `1->4->3->2->5->NULL`.

`Note:`

Given m, n satisfy the following condition:

1 ≤ m ≤ n ≤ length of list.

### 代码及思路

#### 我的代码及思路：

```java
    /*
    我的算法是在m<step<=n期间，翻转应该翻转部分，最后再与原链表接上。

    需要注意设置dummy head，否则当整个链表都应该翻转时，会形成环，导致检测链表时空间限制溢出...

    代码不够简洁。
    */
    public ListNode reverseBetween(ListNode head, int m, int n) {
        ListNode dumy = new ListNode(0);
        dumy.next = head;
        ListNode start = dumy;
        ListNode startPrev = dumy;
        ListNode end = dumy;
        ListNode tmp = head;
        ListNode walk = head;
        ListNode prev = head;
        
        int step = 0;
        
        while (walk != null) {
            step++;
            if (step < m) {
                if (step == m - 1) {
                    startPrev = walk;
                }
                walk = walk.next;
            }
            else if (step == m) {
                start = walk;
                prev = walk;
                walk = walk.next;
            }
            else if (step > m && step < n) {
                tmp = walk.next;
                walk.next = prev;
                prev = walk;
                walk = tmp;
            }
            else if (step == n) {
                end = walk;
                tmp = walk.next;
                walk.next = prev;
                start.next = tmp;
                startPrev.next = end;
                break;
            }
            else {
                break;
            }
        }
        
        return dumy.next;
    }
```

#### 学到的代码及思路：

```java
    /*
    本算法每次翻转都保证插入到原链表中，因此代码更加简洁。
    */
    public ListNode reverseBetween(ListNode head, int m, int n) {
        if(head == null) return null;
        ListNode dummy = new ListNode(0); // create a dummy node to mark the head of this list
        dummy.next = head;
        ListNode pre = dummy; // make a pointer pre as a marker for the node before reversing
        for(int i = 0; i<m-1; i++) pre = pre.next;

        ListNode start = pre.next; // a pointer to the beginning of a sub-list that will be reversed
        ListNode then = start.next; // a pointer to a node that will be reversed

        // 1 - 2 -3 - 4 - 5 ; m=2; n =4 ---> pre = 1, start = 2, then = 3
        // dummy-> 1 -> 2 -> 3 -> 4 -> 5

        for(int i=0; i<n-m; i++)
        {
            start.next = then.next;
            then.next = pre.next;
            pre.next = then;
            then = start.next;
        }

        // first reversing : dummy->1 - 3 - 2 - 4 - 5; pre = 1, start = 2, then = 4
        // second reversing: dummy->1 - 4 - 3 - 2 - 5; pre = 1, start = 2, then = 5 (finish)

        return dummy.next;

    }
```