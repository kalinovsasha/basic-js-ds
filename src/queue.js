const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

class Queue extends ListNode{

  getUnderlyingList() {
    return this.que
  }
  enqueue(value) {
    if (this.que==null) {
      this.que =  new Queue(value)
    } else {
      let current = this.que;

      while(current) {
        if (!current.next) {
          current.next =new Queue(value)
          break;
        }
        current = current.next;
      }
    }
  }
  dequeue() {
    const value = this.que.value;
    this.que = this.que.next;
    return value;
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(1);
queue.enqueue(1);
console.log(queue.getUnderlyingList())
module.exports = {
  Queue
};
