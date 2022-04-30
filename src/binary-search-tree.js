const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
    constructor(){
      this.treeRoot=null;
    }
  root() {
    return this.treeRoot
  }

  add(data) {
     this.treeRoot= addNode(this.treeRoot,data)
     function addNode(node,data){
       if(!node){
         return new Node(data)
       }
       if(node.data==data){
         return node
       }
       if(data<node.data){
         node.left=addNode(node.left,data)
       }else{
        node.right=addNode(node.right,data)
       }
       return node
     }

  }

  has(/* data */) {
    
  }

  find(/* data */) {
    
  }

  remove(/* data */) {
    
  }

  min() {
    
  }

  max() {
    
  }
}

module.exports = {
  BinarySearchTree
};

tree = new BinarySearchTree;
tree.add(1);
tree.root()
console.log(tree.root())