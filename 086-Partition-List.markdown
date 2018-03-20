### 题目描述

#### 86. Partition List

Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

For example,

Given `1->4->3->2->5->2` and x = 3,

return `1->2->2->4->3->5`.

### 代码及思路

```java
  /*
  本算法是空间复杂度均为O(1)，时间复杂度为O(n)的算法。

  本算法的思路是设置两个临时的头，一个作为下半部分的开头节点，一个作为上半部分的开头节点。

  需要注意的是在遍历完后要清除upWalk.next指向的值，否则可能使链表形成环。
  */
  public ListNode partition(ListNode head, int x) {
      ListNode upHead = new ListNode(0);
      ListNode downHead = new ListNode(0);
      ListNode upWalk = upHead;
      ListNode downWalk = downHead;
              
      while (head != null) {
          if (head.val >= x) {
              upWalk.next = head;
              upWalk = head;
          }
          else {
              downWalk.next = head;
              downWalk = head;
          }
          head = head.next;
      }
      
      upWalk.next = null;
      downWalk.next = upHead.next;
      
      return downHead.next;
  }
```