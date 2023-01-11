//Given the head of a singly linked list, reverse the given linked list
const SinglyLinkedList = require("./singlyLinkedList.js")
const Node = require("./node.js")

let nums = new SinglyLinkedList()

for(let i = 1; i <= 5; i++) {
    nums.insertAtEnd(new Node(i))
}

const reverse = function(nums) {
    // nums.print()
    const reverseNums = new SinglyLinkedList()

    while(!nums.isEmpty()) {
        let curr = nums.gethead()
        nums.removeAtStart()
        reverseNums.insertAtStart(curr)
    }
    return reverseNums
}

// console.log(`The original list is`)
// nums.print()
// console.log(`The reversed list is`)
let reverseNums = reverse(nums)
// reverseNums.print()

for (let i = 1; i <= 5; i++) {
    nums.insertAtEnd(new Node(i))
}