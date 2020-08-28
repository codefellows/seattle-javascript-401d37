


class Node { // BinaryTree style node
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/*
Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
*/

class BinaryTree {

  constructor(root=null) {
    this.root = root; // what IS a root????
  }

  preOrder() {

    const output = [];

    function _preOrder(root) {

      if(!root) {
        return;
      }

      // add root's value to array
      output.push(root.value);

      _preOrder(root.left);

      _preOrder(root.right);

    }

    _preOrder(this.root);


    return output;
  }

}


// const applesNode = new Node('apples');
// const bananasNode = new Node('bananas');
// const cucumbersNode = new Node('cucumbers');

// applesNode.left = bananasNode;
// applesNode.right = cucumbersNode;

const applesNode = new Node('apples', new Node('bananas'), new Node('cucumbers'));

const tree = new BinaryTree(applesNode);

const results = tree.preOrder();
// const results = tree.inOrder();
// const results = tree.postOrder();

console.log(results);


class BinarySearchTree extends BinaryTree {

  add(value) {
    // adds a new node with that value in the correct location in the binary search tree.
  }

  contains(value) {
    //returns a boolean indicating whether or not the value is in the tree at least once.
  }
}





