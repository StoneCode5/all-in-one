/**
 * 102. 二叉树的层序遍历
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if (!root1) {
        root1 = root2
    }
    if (!root2) {
        root2 = root1
    }

    let newTree = {}
    newTree.val = root1 + root2
    newTree.left = mergeTrees(root1.left, root2.left)
    newTree.right = mergeTrees(root1.right, root2.right)

    return newTree

};



/**
 * 自己看到题目的第一想法
 *     没思路怎么同步遍历
 * 看完代码随想录之后的想法 
 *    比较经典 值得多看看
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  
 **/


/**
 * 700. 二叉搜索树中的搜索
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {

    let result = null

    const dfs = (node) => {
        if (!node) {
            return null
        }
        if (result) {
            return
        }
        if (val === node.val) {
            result = node
        } else {
            dfs(node.left)
            dfs(node.right)
            return null
        }
    }
    dfs(root)
    return result
};


/**
 * 自己看到题目的第一想法
 *     
 * 看完代码随想录之后的想法 
 *    
 * 自己实现过程中遇到哪些困难
        找到
 * 今日收获，记录一下自己的学习时长
 *  二叉搜索树的定义：
 *  根节点要比左孩子大，比右孩子小
 *  学习从最底层一步一步将值返回上去
 **/


/**
 * 102. 二叉树的层序遍历
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let valid = true
    const dfs = (root) => {
        if (!valid) {
            return 
        }
        if (!root.left && root.right) {
            if ( root.val >= root.right.val) {
                
            }
        }
        if (!root.left || !root.right ) {
            valid = false
        } else if (root.val <= root.left.val || root.val >= root.right.val) {
            valid = false
        } else {
            dfs(root.left)
            dfs(root.right)
        }
    }
    dfs(root)
    return valid
};



/**
 * 自己看到题目的第一想法
 *     用前序来判断，其实前序会有坑，不能保证右子树所有节点均大于中间节点
 * 看完代码随想录之后的想法 
 *    中序遍历与二叉搜索树完美契合，结合双指针遍历
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  尝试24分钟
 * 
 **/