const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

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
////////////////////////////Solution//////////////////////////////
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
      current=l;
    }
    prev=current  
    current=current.next
  }  
  return l
}
/* /Test/
let initial = convertArrayToList([1, 2, 3, 3, 4, 5]);
const expected = convertArrayToList([1, 2, 4, 5]);
console.log(removeKFromList(initial, 3))
console.log(removeKFromList(initial, 3).next)
console.log(removeKFromList(initial, 3).next.next)
console.log(removeKFromList(initial, 3).next.next.next)
*/
module.exports = {
  removeKFromList
};
