var isSymmetric = function (root) {
  const compare = (node1, node2) => {
    if ((!node1 && node2) || (node1 && !node2)) {
      return false;
    }
    if (!node1 && !node2) {
      return true;
    }
    if (node1.val !== node2.val) {
      return false;
    }


    let outside = compare(node1.left, node2.right);
    let inside = compare(node1.right, node2.left);
    return outside && inside;
  };

  return compare(root.left, root.right);
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
var isBalanced = function(root) {

    const getHeight = (node) => {
        if (!node) {
            return 0
        }        

        const leftHeight =  getHeight(node.left) + 1
        const rightHeight = getHeight(node.right) + 1
        if (Math.abs(leftHeight - rightHeight) > 1 ) {
            return -1
        } else {
            return Math.max(leftHeight, rightHeight)
        }
    }
};

/**
 * 100.相同的树
 * 572.另一个树的子树
 * 
 * 
 * 
 */

var sumOfLeftLeaves = function(root) {

    let sum = 0

    const dfs = (root) => {
        if (!root || !root.left) return
        if (root.left && !root.left.left && !root.left.right) {
            sum += root.left.val 
            root.right && dfs(root.right)
        } else {
            root.left && dfs(root.left)
            root.right && dfs(root.right)
        }
    }

    dfs(root)

    return sum
};

/**
 * 
 * 
 * 
 * 
 * 
 * 
 */