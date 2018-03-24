### 题目描述

#### 109. Convert Sorted List to Binary Search Tree

Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.


`Example:`

  Given the sorted linked list: [-10,-3,0,5,9],

  One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

       0
      / \
    -3   9
    /   /
  -10  5

### 代码及思路

#### 我的代码及思路：

```java
    /*
    我没有想到如何去寻找链表的中点，所以只能将链表转换成数组来求解了。
    */
    public TreeNode sortedListToBST(ListNode head) {
        ListNode walk = head;
        int len = 0;
        while (walk != null) {
            len++;
            walk = walk.next;
        }
        if (len == 0) return null;
        
        int[] nums = new int[len];
        walk = head;
        
        for (int i = 0; i < len; i++) {
            nums[i] = walk.val;
            walk = walk.next;
        }
        
        int hi = len - 1;
        int lo = 0;
        int mid = (hi + lo) / 2;
        TreeNode root = new TreeNode(nums[mid]);
        buildTree(root, lo, mid - 1, mid + 1, hi, nums);
        
        return root;
    }
    
    public void buildTree(TreeNode root, int leftL, int leftH, int rightL, int rightH, int[] nums) {
        if (leftL <= leftH) {
            int midL = (leftL + leftH) / 2;
            root.left = new TreeNode(nums[midL]);
            buildTree(root.left, leftL, midL - 1, midL + 1, leftH, nums);
        }
        
        if (rightL <= rightH) {
            int midR = (rightL + rightH) / 2;
            root.right = new TreeNode(nums[midR]);
            buildTree(root.right, rightL, midR - 1, midR + 1, rightH, nums);
        }
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法找到了如何求得链表中点的办法。

    它的做法是设置两个指针slow和fast，slow每次前进1步，fast每次前进两步，这样当fast到达tail或tail之前时，slow就会指向中心点。（或者说，对偶数长度的情况下，是中心两点中的一点。）

    这样再应用DFS就好了。

    空间复杂度降低到了O(logn)，时间复杂度仍是O(n)。
    */
    public TreeNode sortedListToBST(ListNode head) {
        return toBST(head, null);
    }
    
    public TreeNode toBST(ListNode head, ListNode tail) {
        if (head == tail) return null;
        ListNode slow = head;
        ListNode fast = head;
        
        while (fast != tail && fast.next != tail) {
            fast = fast.next.next;
            slow = slow.next;
        }
        
        TreeNode root = new TreeNode(slow.val);
        root.left = toBST(head, slow);
        root.right = toBST(slow.next, tail);
        
        return root;
    }
```