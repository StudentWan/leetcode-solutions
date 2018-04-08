### 题目描述

#### 143. Reorder List

Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You must do this in-place without altering the nodes' values.

For example,
Given `{1,2,3,4}`, reorder it to `{1,4,2,3}`.

### 代码及思路

#### 我的代码及思路：

```java
    /*
    我的做法是对每一个要交换的节点都用遍历得到，时间复杂度是O(n ^ 2)。
    */
    public void reorderList(ListNode head) {
        int len = 0;
        ListNode walk = head;
        while (walk != null) {
            len++;
            walk = walk.next;
        }
        
        int count = len / 2;
        ListNode wait = head;
        
        while (count > 0) {
            count--;
            ListNode slow = wait;
            ListNode fast = wait;
            if (wait.next != null) {
                fast = fast.next;
                while (fast.next != null) {
                    fast = fast.next;
                    slow = slow.next;
                }
                slow.next = null;
                fast.next = wait.next;
                wait.next = fast;
                wait = fast.next;
            }
            else {
                break;
            }
        }
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法先用双指针法找到中点。

    然后翻转后半部分。

    最后再交换顺序。

    每一部分的时间复杂度都是O(n)，总体时间复杂度是O(n)，很巧妙。
    */
    public void reorderList(ListNode head) {
        if (head == null || head.next == null) return ;
        ListNode p1 = head;
        ListNode p2 = head;
        // 雙指針法找中點
        while (p2.next != null && p2.next.next != null) {
            p1 = p1.next;
            p2 = p2.next.next;
        }
        
        // 翻轉後半部分
        ListNode mid = p1;
        ListNode preCur = p1.next;
        while (preCur.next != null) {
            ListNode cur = preCur.next;
            preCur.next = cur.next;
            cur.next = mid.next;
            mid.next = cur;
        }
        
        // 做全部翻轉
        p1 = head;
        p2 = mid.next;
        while (p1 != mid) {
            mid.next = p2.next;
            p2.next = p1.next;
            p1.next = p2;
            p1 = p2.next;
            p2 = mid.next;
        }
    }
```