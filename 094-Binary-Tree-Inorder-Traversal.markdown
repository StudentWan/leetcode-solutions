### 题目描述

#### 94. Binary Tree Inorder Traversal

Given a binary tree, return the inorder traversal of its nodes' values.

For example:

Given binary tree `[1,null,2,3]`,

    1
     \
      2
     /
    3

return `[1,3,2]`.

`Note:` Recursive solution is trivial, could you do it iteratively?

### 代码及思路

#### 我的代码及思路：

```java
    /*
    很惭愧，我没有想到如何用迭代的方式求解，还是用了递归。
    */
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<Integer>();
        traverse(result, root);
        return result;
    }
    
    private void traverse(List<Integer> result, TreeNode root) {
        if (root == null) return;
        traverse(result, root.left);
        result.add(root.val);
        traverse(result, root.right);
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法的思路很巧妙。

    利用一个栈来存储待访问的节点。

    如果当前节点不为空或者栈不为空，则进入循环1。（节点不为空，则还可入栈；栈不为空，则还有节点待访问）

    将当前节点入栈，更新当前节点为它的左节点，直到当前节点为空。

    栈顶出栈，加入到结果列表中，再将当前节点更新为它的右节点。

    这也正好是一个中序遍历进行一次的情况。

    然后重新进入循环1，直到节点为空并且栈为空。

    这样的做法可以省去建立函数上下文的开销，要多用Java中栈这个数据结构。
    */
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<Integer>();
        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode cur = root;
        
        while (cur != null || !stack.empty()) {
            while (cur != null) {
                stack.push(cur);
                cur = cur.left;
            }
            cur = stack.pop();
            result.add(cur.val);
            cur = cur.right;
        }
        
        return result;
    }
```

#### More concise Iteration

```js
/**
 * 巧妙地利用了栈后进先出的特性模拟中序遍历过程。
 * 总是找到最左子树。
 */
var inorderTraversal = function(root) {
    const res = [];
    const stack = [];
    let cur = root;
    let tmp;
    while (cur !== null || stack.length > 0) {
      if (cur !== null) {
        stack.push(cur);
        cur = cur.left;
      } else {
        tmp = stack.pop();
        res.push(tmp.val);
        cur = tmp.right;
      }
    }
    return res;
};
```