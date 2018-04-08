### 题目描述

#### 142. Linked List Cycle II

Given a linked list, return the node where the cycle begins. If there is no cycle, return `null`.

`Note:` Do not modify the linked list.

`Follow up:`

Can you solve it without using extra space?

### 代码及思路

#### 我的代码及思路：

```java
    /*
    我没有想到O(1)空间复杂度的想法，于是用HashSet去完成了题目。
    */
    public ListNode detectCycle(ListNode head) {
        HashSet<ListNode> nodeSet = new HashSet<ListNode>();
        
        while (head != null && nodeSet.add(head)) {
            head = head.next;
        }
        
        return head == null ? null : head;
    }
```

#### 学习到的代码及思路：

```java
    /*
    本题的进一步更加偏向于一个数学问题。

    依然可以用双指针算法来解，不过，这是利用有环列表的数学特性来处理的。

    设置一个指针slow，一个指针fast。

    slow每次走一步，fast每次比slow多走一步。

    如果fast最终指向null，则说明数组中没有环。

    否则slow和fast最终会相遇。

    假设head距离cycle的起始点的距离是A，在走过起始点A之后slow又走了B才与fast相遇。

    则slow走过的距离是：A + B，
    
    显然fast走过的距离是2 * (A + B)

    而fast与slow相遇时，走过的差距刚好是cycle的size，假设为N

    也就是说A + B = N.

    那么，在slow与fast相遇时，在fast不动的情况下，想要slow继续移动并走到fast的位置，则slow要走的距离为N。
    
    此时设置另一个指针another指向head，another和slow开始继续移动，一次走一步，当another == slow的时候，肯定是cycle的起始点，因为他们走过的距离都是A(即 N - B)。
    */
    public ListNode detectCycle(ListNode head) {
        ListNode fast = head;
        ListNode slow = head;
        
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
            
            if (slow == fast) break;
        }
        
        
        if (fast == null || fast.next == null) return null;
        
        ListNode another = head;
        
        while (slow != another) {
            slow = slow.next;
            another = another.next;
        }
        
        return slow;
    }
```