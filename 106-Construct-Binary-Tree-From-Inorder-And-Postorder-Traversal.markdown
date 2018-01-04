### 题目描述

#### 106. Construct Binary Tree from Inorder and Postorder Traversal

Given inorder and postorder traversal of a tree, construct the binary tree.

`Note:`

You may assume that duplicates do not exist in the tree.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    解题思路就是把前序+中序求二叉树倒了一个个。

    不过需要注意的是右子树大小的求法，由于rootIndex是在中序遍历中的大小，所以右子树的大小就是start - rootIndex
    */
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        return build(postorder, inorder, postorder.length - 1, inorder.length - 1, 0);
    }
    
    public TreeNode build(int[] postorder, int[] inorder, int postorderIndex, int start, int end) {
        if (start < end) return null;
        
        TreeNode root = new TreeNode(postorder[postorderIndex]);
        
        int rootIndex = -1;
        for (int i = 0; i < inorder.length; i++) {
            if (inorder[i] == root.val) {
                rootIndex = i;
                break;
            }
        }
        
        int rightTreeSize = start - rootIndex;
        root.right = build(postorder, inorder, postorderIndex - 1, start, rootIndex + 1);
        root.left = build(postorder, inorder, postorderIndex - rightTreeSize - 1, rootIndex - 1, end);
        
        return root;
    }
```
