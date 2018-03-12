### 题目描述

#### 2. Add Two Numbers

You are given two `non-empty` linked lists representing two non-negative integers. The digits are stored in `reverse order` and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

`Example`

    `Input:` (2 -> 4 -> 3) + (5 -> 6 -> 4)
    `Output:` 7 -> 0 -> 8
    `Explanation:` 342 + 465 = 807.

### 代码及思路

```java
    /*
    总体上就是一个Math计算的过程，本算法和DISSCUSS区的算法不同之处在于O(1)的空间复杂度。

    tmp总是保存l1的上一位值。
    */
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode head1 = l1;
        ListNode tmp = l1;
        boolean isCarry = false;
        
        while (l1 != null && l2 != null) {
            if (isCarry) {
                isCarry = (l1.val + l2.val + 1) / 10 > 0 ? true : false; 
                l1.val = (l1.val + l2.val + 1) % 10;
            }
            else {
                isCarry = (l1.val + l2.val) / 10 > 0 ? true : false;
                l1.val = (l1.val + l2.val) % 10;
            }
            tmp = l1;
            l1 = l1.next;
            l2 = l2.next;
        }
        
        if (l1 == null) {
            tmp.next = l2;
            l1 = tmp.next;
        }
        
        while (l1 != null) {
            if (isCarry) {
                isCarry = (l1.val + 1) / 10 > 0 ? true : false;
                l1.val = (l1.val + 1) % 10;
                tmp = l1;
                l1 = l1.next;
            }
            else {
                break;
            }
        }
        
        if (isCarry) {
            tmp.next = new ListNode(1);
        }
        
        return head1;
    }
```
