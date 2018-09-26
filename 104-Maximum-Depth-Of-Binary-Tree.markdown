#### BFS

```java
    /*
    设置levelComplete节点，标记每层遍历的结束。
    */
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        
        Queue<TreeNode> q = new LinkedList<TreeNode>();
        int depth = 0;
        TreeNode removed;
        TreeNode levelComplete = new TreeNode(0);
        
        q.add(root);
        q.add(levelComplete);
        
        while (!q.isEmpty()) {
            removed = q.poll();
            if (removed == levelComplete) {
                depth++;
                if (!q.isEmpty()) {
                    q.add(levelComplete);
                }
                continue;
            }
            
            if (removed.left != null) {
                q.add(removed.left);
            }
            
            if (removed.right != null) {
                q.add(removed.right);
            }
        }
        
        return depth;
    }
```