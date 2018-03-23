### 题目描述

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.


`Example:`

  Given the sorted array: [-10,-3,0,5,9],

  One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

       0
      / \
    -3   9
    /   /
  -10  5

### 代码及思路：

```java
    /*
    关键之处在于明白平衡二叉树这种数据结构的定义，然后用DFS就可求解。

    平衡二叉树的定义是：一个根节点，它的左子树上的所有节点的值小于它，它的右子树上的所有节点的值大于它，并且它的左子树和右子树的深度差必须小于等于1。以上规则必须对它的左右子树也成立。
    */
    public TreeNode sortedArrayToBST(int[] nums) {
        if (nums.length == 0) return null;
        int hi = nums.length - 1;
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