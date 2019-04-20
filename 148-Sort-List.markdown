#### Merge Sort

```js
/**
 * 该算法中有几点值得学习：
 * 1. 通过slow和fast指针的设置完成链表切分
 * 2. mergesort针对链表的实现方式
 * 3. mergesort应用于链表时可以做到O(1)的空间复杂度，只需要使用dummy head
 */
var sortList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    
    let prev = null;
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    
    const l1 = sortList(head);
    const l2 = sortList(slow);
    
    return merge(l1, l2);
};

var merge = function(l1, l2) {
    const dummy = new ListNode(0);
    let walk = dummy;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            walk.next = l1;
            l1 = l1.next;
        } else {
            walk.next = l2;
            l2 = l2.next;
        }
        walk = walk.next;
    }
    
    while (l1 !== null) {
        walk.next = l1;
        l1 = l1.next;
        walk = walk.next;
    }
    
    while (l2 !== null) {
        walk.next = l2;
        l2 = l2.next;
        walk = walk.next;
    }
    
    walk.next = null;
    
    return dummy.next;
}
```