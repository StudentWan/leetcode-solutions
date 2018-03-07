### 题目描述

#### 160. Intersection of Two Linked Lists

Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

    A:          a1 → a2
                        ↘
                        c1 → c2 → c3
                        ↗            
    B:     b1 → b2 → b3

begin to intersect at node c1.


`Notes:`

> If the two linked lists have no intersection at all, return null.
> The linked lists must retain their original structure after the function returns.
> You may assume there are no cycles anywhere in the entire linked structure.
> Your code should preferably run in O(n) time and use only O(1) memory.

### 代码与思路

#### 我的代码与思路1：

```java
    /*
    比较简单的一个想法就是用一个HashSet去存放其中一个链表的状况。

    然后再遍历另一个链表，通过这个Set来确定第一个重复的节点。

    符合了O(n)的时间复杂度，但却不符合O(1)的空间复杂度。
    */
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        HashSet<ListNode> aPath = new HashSet<ListNode>();
        
        while (headA != null) {
            aPath.add(headA);
            headA = headA.next;
        }
        
        while (headB != null) {
            if (!aPath.add(headB)) return headB;
            headB = headB.next;
        }
        
        return null;
    }
```

#### 我的代码与思路2：

```java
    /*
    第二种解法既符合了时间开销的要求，也符合了空间开销的要求。

    我们的思路着眼于，使a和b两个链表同时开始，同时结束。

    这样在遍历的时候我们就可以在交叉点遇上。

    于是就需要对两个链表进行预处理，得出他们的长度，并且向后移动较长链表的头部节点，使得它们开始遍历时具有相同的长度。
    */
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        int aLen = 0;
        int bLen = 0;
        ListNode tmpA = headA;
        ListNode tmpB = headB;
        while (tmpA != null) {
            aLen++;
            tmpA = tmpA.next;
        }
        while (tmpB != null) {
            bLen++;
            tmpB = tmpB.next;
        }
        
        int gap = aLen - bLen;
        
        while (gap > 0) {
            headA = headA.next;
            gap--;
        }
        
        while (gap < 0) {
            headB = headB.next;
            gap++;
        }
        
        while (headA != null) {
            if (headA == headB) return headA;
            headA = headA.next;
            headB = headB.next;
        }
        
        return null;
    }
```