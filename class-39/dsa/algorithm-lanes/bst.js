class BinarySearchTree {

  constructor(values) {
    this.root = null;
    if(values) {
      for(let val of values) {
        this.add(val);
      }
    }
  }

  add(value) {

    const node = new Node(value);

    if(!this.root) {
      this.root = node;
      return;
    }

    function addNode(root) {

      if(!root) return;

      if(value < root.value.score) {

        if(!root.left) {
          root.left = node;
        } else {
          addNode(root.left);
        }

      } else {

        if(!root.right) {
          root.right = node;
        } else {
          addNode(root.right);
        }
      }
    }

    addNode(this.root);

  }
}

class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

module.exports = { BinarySearchTree, Node };
