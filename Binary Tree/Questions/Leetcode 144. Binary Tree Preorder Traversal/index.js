/*
Leetcode 144. Binary Tree Preorder Traversal
Given the root of a binary tree, 
return the preorder traversal of its nodes' values.


Input: root = [1,null,2,3]
Output: [1,2,3]
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
 * @return {number[]}
 */

// let root = new TreeNode()
const pre = (root, list) => {
  if (root === null) return;
  list.push(root.val);
  pre(root.left, list);
  pre(root.right, list);
};

var preorderTraversal = function (root) {
  let list = [];
  pre(root, list);
  return list;
};
