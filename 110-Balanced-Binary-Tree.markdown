#### bottom-up solution

```java
    /*
    采用up-down的方法，思维上直观，但是在求sub tree的balance情况时，实质上重复计算了sub tree的高度，导致时间复杂度为O(n ^ 2)

    而如果在dfs求树的高度时，检查balance情况，如果不平衡返回-1，否则返回树的高度

    则是以bottom-up的形式检查了树的平衡性，剪掉了重复计算，时间复杂度为O(n)
    */
    public boolean isBalanced(TreeNode root) {
        return dfsHeight(root) != -1;
    }
    
    private int dfsHeight(TreeNode root) {而
        if (root == null) {
            return 0;
        }
        
        int leftHeight = dfsHeight(root.left);
        if (leftHeight == -1) {
            return -1;
        }
        
        int rightHeight = dfsHeight(root.right);
        if (rightHeight == -1) {
            return -1;
        }
        
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }
        
        return Math.max(leftHeight, rightHeight) + 1;
    }
```