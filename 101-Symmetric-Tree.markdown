#### Recursively

```java
    public boolean isSymmetric(TreeNode root) {
        return root != null ? isTwoTreeSymmetric(root.left, root.right) : true;
    }
    
    public boolean isTwoTreeSymmetric(TreeNode left, TreeNode right) {
        if (left == null || right == null) {
            return left == right;
        }
        
        return left.val == right.val ? isTwoTreeSymmetric(left.left, right.right) && isTwoTreeSymmetric(left.right, right.left) : false;
    }
```

#### Iteratively

```java
    public boolean isSymmetric(TreeNode root) {
        return root != null ? isMirror(root.left, root.right) : true;
    }
    
    public boolean isMirror(TreeNode left, TreeNode right) {
        Queue<TreeNode> q = new LinkedList<TreeNode>();
        
        q.add(left);
        q.add(right);
        
        while (!q.isEmpty()) {
            TreeNode t1 = q.poll();
            TreeNode t2 = q.poll();
            
            if (t1 == null && t2 == null) {
                continue;
            }
            if (t1 == null || t2 == null) {
                return false;
            }
            if (t1.val != t2.val) {
                return false;
            }
            q.add(t1.left);
            q.add(t2.right);
            q.add(t1.right);
            q.add(t2.left);
        }
        return true;
    }
```