const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
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
          console.log(current)
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
