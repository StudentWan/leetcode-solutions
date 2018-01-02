### 题目描述

#### 105. Construct Binary Tree from Preorder and Inorder Traversal

Given preorder and inorder traversal of a tree, construct the binary tree.

`Note:`

You may assume that duplicates do not exist in the tree.

### 代码及思路：

#### 学习到的代码及思路：

```java
    /*
    应该说是思路及解题方法是学习到的，本科的知识确实不太记得了，算法是自己写的，还是算学习到的思路吧。

    从前序遍历和中序遍历构造二叉树的方法很直观，因为前序遍历的第一个元素，肯定是树的根节点，然后找到该元素在中序遍历（先左，再根，再右）中的位置，在中序遍历中，该位置左边的元素构成左子树，右边的元素构成右子树，并且左右子树在前序遍历（先根，再左，再右）中是按序排成两块的。

    然后接下来就用递归重复这个过程就可以了。

    所以需要得到的信息有：根节点的位置，子树在前序遍历中开始的位置，子树在前序遍历中结束的位置。

    如果开始位置大于结束位置就说明没有子树了。

    因此如下构成算法。
    */
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if (preorder.length == 0) return null;
        return build(preorder, inorder, 0, 0, preorder.length - 1);
    }
    
    public TreeNode build(int[] preorder, int[] inorder, int preorderIndex, int start, int end) {
        if (start > end) return null;
        TreeNode root = new TreeNode(preorder[preorderIndex]);
        
        int rootIndex = search(inorder, root.val);
        
        root.left = build(preorder, inorder, preorderIndex + 1, start, rootIndex - 1);
        int leftTreeSize = rootIndex - start;
        root.right = build(preorder, inorder, preorderIndex + leftTreeSize + 1, rootIndex + 1, end);
        
        return root;
    }
    
    public int search(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) return i;
        }
        return -1;
    }
```

