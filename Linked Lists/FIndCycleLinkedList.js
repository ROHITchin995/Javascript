//Given head, the head of a linked list, determine if the linked list has a cycle in it.

const SinglyLinkedList = require("./singlyLinkedList.js")
const Node = require("./node.js")

let nums = new SinglyLinkedList()

for(let i = 1; i <= 5; i++) {
    nums.insertAtEnd(new Node(i))
}

const isCircular = function(nums) {
    let fast = nums.gethead(), slow = nums.gethead()
    while(fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            return true
        }
    }
    return false
}

nums = new SinglyLinkedList()
for (let i = 0; i <= 5; i++) {
    nums.insertAtEnd(new Node(i))
}
tail = nums.gethead()

while(tail.next != null) {
    tail = tail.next
}

tail.next = nums.gethead().next.next

// 0 -> 1 ->2 -> 3 -> 4 -> 5
//          ^--------------|
// find Starting Point of a cycle in the LinkedList

const getLoopStart = function(nums) {
    let slow = nums.gethead(), fast = nums.gethead()
    while(fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next
        if(fast == slow) {
            break
        }
    }
    fast = nums.gethead()

    while(fast != null) {
        fast = fast.next
        slow = slow.next
        if (fast == slow) {
            return fast
        }
    }
    return null
}