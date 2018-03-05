### 题目描述

#### 83. Remove Duplicates from Sorted List

Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,

Given `1->1->2`, return `1->2`.

Given `1->1->2->3->3`, return `1->2->3`.

### 代码及思路

#### 我的代码及思路：

```java
    /*
    本算法采用的是常规的遍历链表的思路。

    判断pointer是否为null，主要是为了考虑链表为空的情况。

    注意，去重后不能移动指针，防止有多个相同重复的情况出现。
    */
    public ListNode deleteDuplicates(ListNode head) {
        ListNode pointer = head;
        while (pointer != null && pointer.next != null) {
            if (pointer.val == pointer.next.val) {
                pointer.next = pointer.next.next;
            }
            else {
                pointer = pointer.next;
            }
        }
        return head;
    }
```

#### 学习到的代码及思路：

```java
    /*
    这里采用递归的算法来解决去重问题，写法非常简洁，每次函数调用只去除head和head.next之间的重复。

    head == null也是判断链表为空的情况所加上的特例判断。
    */
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null || head.next == null) return head;
        head.next = deleteDuplicates(head.next);
        return head.val == head.next.val ? head.next : head;
    }
```

