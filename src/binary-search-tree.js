const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
    constructor(data) {
        this.tree = null;
      }
    
      root() {
        return this.tree;
      }

  add(data) {
      this.tree = addNode(this.tree, data);

      function addNode(node, data) {
          if (!node) {
              return new Node(data);
          }

          if (node.data === data) {
              return node
          }

          if (data < node.data) {
              node.left = addNode(node.left, data);
          } else {
              node.right = addNode(node.right, data)
          }

          return node;
      }
  }

  has(data) {
      return hasNode(this.tree, data)

      function hasNode(node, data) {
        if (!node) {
            return false;
        }

        if (node.data === data) {
            return true
        }

        if (data < node.data) {
            return hasNode(node.left, data);
        } else {
            return hasNode(node.right, data);
        }
      }
  }

  find(data) {
      return findNode(this.tree, data)

      function findNode(node, data) {
        if (!node) {
            return null;
        }

        if (node.data === data) {
            return node
        }

        if (data < node.data) {
            return findNode(node.left, data);
        } else {
            return findNode(node.right, data);
        }
      }
  }

  remove(data) {
      this.tree = removeNode(this.tree, data);

      function removeNode(node, data) {
          if (!node) {
              return null;
          }

          if (data < node.data) {
              node.left = removeNode(node.left, data);
              return node
          } else if (data > node.data) {
            node.right = removeNode(node.right, data);
            return node
          } else {
              if (!node.left && !node.right) return null;
              if (!node.right) {
                node = node.left;
                return node;
              }
              if (!node.left) {
                node = node.right;
                return node;
              }
              
              let minRightData = node.right;
              while (minRightData.left) {
                minRightData = minRightData.left
              }
              node.data = minRightData.data;

              node.right = removeNode(node.right, minRightData.data);

              return node;

          }
      }
  }

  min() {
    if (!this.tree) {
        return null;
    } 

    let minNode = this.tree;
    while (minNode.left) {
        minNode = minNode.left
    }
    return minNode.data;
  }

  max() {
    if (!this.tree) {
        return null;
    } 

    let maxNode = this.tree;
    while (maxNode.right) {
        maxNode = maxNode.right
    }
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};
