### 题目描述

#### 82. Remove Duplicates from Sorted List II

Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

For example,

Given `1->2->3->3->4->4->5`, return `1->2->5`.

Given `1->1->1->2->3`, return `2->3`.

### 代码及思路

```java
    /*
    本算法采用双指针法，第一个指针永远指向一个没有重复的节点，后一个指针一直移动，直到它指向的节点不是之前的重复节点。

    然后将第一个指针指向第二个指针以去除之前的重复。

    然后继续看第二个指针是否是重复节点。

    如果第二个指针不是重复节点，则将它和第一个指针都往后移一位。

    为保证第一个指针不指向重复节点，为链表添加一个临时的头部tmpHead。
    */
    public ListNode deleteDuplicates(ListNode head) {
        ListNode tmpHead = new ListNode(0);
        tmpHead.next = head;
        ListNode before = tmpHead;
        ListNode after = tmpHead.next;
        
        while (after != null && after.next != null) {
            if (after.val != after.next.val) {
                before = before.next;
                after = after.next;
            }
            else {
                int dupVal = after.val;
                while (after != null && after.val == dupVal) {
                    after = after.next;
                }
                before.next = after;
            }
        }
        
        return tmpHead.next;
    }
```