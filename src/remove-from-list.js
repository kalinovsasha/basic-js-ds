const { NotImplementedError } = require('../extensions/index.js');
 const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}
let initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
initial = convertArrayToList([1, 2, 3, 3, 4, 5]);
const expected = convertArrayToList([1, 2, 4, 5]);
///////////////////////////////////////////////////////////
function removeKFromList(l, k ) {
  let current=l;
  let prev;
 while(current){
    if(current.value==k){
      if(prev){
        prev.next=current.next;
      } else{
        l=current.next
      }
    }
    prev=current  
    current=current.next
  } 
    
  return l
}

console.log(removeKFromList(initial, 3))
console.log(removeKFromList(initial, 3).next)
console.log(removeKFromList(initial, 3).next.next)
console.log(removeKFromList(initial, 3).next.next.next)

module.exports = {
  removeKFromList
};
