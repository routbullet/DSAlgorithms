/*
Leetcode 145. Binary Tree Postorder Traversal

Given the root of a binary tree, 
return the postorder traversal of its nodes' values.

Input: root = [1,null,2,3]
Output: [3,2,1]
 
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

const po = (root, list) => {
  if (root === null) return;
  po(root.left, list);
  po(root.right, list);
  list.push(root.val);
};

var postorderTraversal = function (root) {
  let list = [];
  po(root, list);
  return list;
};
