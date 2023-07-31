var levelOrder = function(root) {
    const result = []
    if (!root) {
        return []
    }
    const queue = [root]
    
    while (queue.length) {
        let length = queue.length
        let levelArr = []
        for (let i = 0; i < length; i++) {
            const cur = queue.shift()
            levelArr.push(cur.val)
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
        }
        result.push(levelArr)
    }
    return result

};


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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let head = root
    function traval(root) {
        if (!root) {
            return 
        }
        let temp = root.right
        root.right = root.left
        root.left = temp
        root.left && traval(root.left)
        root.right && traval(root.right)
    }
    traval(root)
    return head
};


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
var isSymmetric = function(root) {
    if (!root) {
        return []
    }
    const queue = [root]
    
    while (queue.length) {
        let length = queue.length
        let levelArr = []
        for (let i = 0; i < length; i++) {
            const cur = queue.shift()
            if(cur) {
            levelArr.push(cur.val)
            queue.push(cur.left)
            queue.push(cur.right)
            } else {
                levelArr.push(cur)
            }
        }
        if (JSON.stringify(levelArr) !== JSON.stringify(levelArr.reverse())) {
            return false
        }
    }
    return true
};


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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = []
    
    const dfs = (node, path) => {
        if (!node) {
            return 
        }
        path += node.val
        if (!node.left && !node.right) {
            result.push(path)
            return 
        }
        if (node.left) {
            path = path + '->'
            dfs(node.left, path)
            path = path.slice(0, -2)
        }
        if (node.right) {
            path = path + '->'
            dfs(node.right, path)
            path = path.slice(0, -2)
        }
    }
    dfs(root, '')
    return result
};


