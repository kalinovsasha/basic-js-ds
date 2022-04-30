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

  has(data) {
    return searchNode(this.treeRoot,data)
    function searchNode(node,data){
      if(!node){
        return false
      }
      if(node.data==data){
        return true
      }
      if(data<node.data){
        return searchNode(node.left,data)
      }
      if(data>node.data){
        return searchNode(node.right,data)
      } 
    }    
  }
  find(data) {
    return findNode(this.treeRoot,data)
    function findNode(node,data){
      if(!node){
        return node
      }
      if(node.data==data){
        return node
      }
      if(data<node.data){
        return findNode(node.left,data)
      }
      if(data>node.data){
        return findNode(node.right,data)
      }
    }  
  }

  remove(data) {
    const node=this.find(data);
    if(node){
      return null
      
    } else{
      return false
    }
    
  }

  min() {
    if(!this.treeRoot){
      return null
    }
    if(!this.treeRoot.left){
      return this.treeRoot.data
    }
    return searchMin(this.treeRoot)
    function searchMin(node){
      if(!node.left){
        return node.data
      } else return searchMin(node.left)
    }
  }

  max() {
    if(!this.treeRoot){
      return null
    }
    return searchMax(this.treeRoot)
    function searchMax(node){
      if(!node.right){
        return node.data
      } else return searchMax(node.right)
    }
    
  }
}

module.exports = {
  BinarySearchTree
};

tree = new BinarySearchTree;

tree.add(30);
tree.add(20);
tree.add(40);
tree.add(50);
tree.add(30);
tree.root(35) 
//console.log(tree.root())
console.log(tree.has(30))
console.log(tree.find(40))
console.log(tree.max())