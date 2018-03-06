### 题目描述

#### 141. Linked List Cycle

Given a linked list, determine if it has a cycle in it.

Follow up:

Can you solve it without using extra space?

### 代码及思路

#### 我的代码及思路1：

```java
    /*
    第一种方法思路比较简单，用一个HashSet来存放遍历过的节点，以确定链表中是否有环。

    不过用到了额外的空间。
    */
    public boolean hasCycle(ListNode head) {
        HashSet<ListNode> store = new HashSet<ListNode>();
        while (head != null) {
            if (!store.add(head)) return true;
            head = head.next;
        }
        return false;
    }
```

#### 我的代码及思路2：

```java
    /*
    第二种方法虽然没有额外空间开销，但是比较取巧。

    将遍历过的节点的值设为一个其他数不取的值，比如-99999，最后看如果有再次遍历到-99999则说明链表中有环。

    虽然过了test case，但是实用性并不强，容易发生碰撞。
    */
    public boolean hasCycle(ListNode head) {
        while (head != null) {
            if (head.val == -99999) return true;
            head.val = -99999;
            head = head.next;
        }
        return false;
    }
```

#### 学习到的代码及思路：

```java
    /*
    最后学到的这种方法十分巧妙，而且也只有O(1)的空间复杂度。

    它设置两个指针，walker和runner都从head开始跑。

    walker每次跑一步，runner每次跑两步。

    如果链表有环，则两者必定会相遇。

    由于runner跑的比较快，所以循环条件的判断是否为空由runner来进行，才能保证两者都出空指针错误。
    */
    public boolean hasCycle(ListNode head) {
        if (head == null) return false;
        ListNode walker = head;
        ListNode runner = head;
        while (runner.next != null && runner.next.next != null) {
            walker = walker.next;
            runner = runner.next.next;
            if (walker == runner) return true;
        }
        return false;
    }
```



