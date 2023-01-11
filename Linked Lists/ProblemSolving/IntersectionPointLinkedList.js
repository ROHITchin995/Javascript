//Given the head of a linked list, return the node where the cycle begins.
const SinglyLinkedList = require("./singlyLinkedList.js")
const Node = require("./node.js")

let nums = new SinglyLinkedList()

for(let i = 1; i <= 5; i++) {
    nums.insertAtEnd(new Node(i))
}


const getIntersection = function(nums1, nums2) {
    let n1 = nums1.length
    let n2 = nums2.length

    if (n1 < n2) return getIntersection(nums2, nums1)

    let cur1 = nums1.gethead(), cur2 = nums2.gethead()

    while(n1 > n2) {
        cur1 = cur1.next
        n1--
    }

    while(cur1 != null && cur2 != null && cur1 != cur2) {
        cur1 = cur1.next
        cur2 = cur2.next
    }

    return cur1
}

let nums1 = new SinglyLinkedList()

for(let i = 0; i <= 5; i++) {
    nums1.insertAtEnd(new Node(i))
}

let nums2 = new SinglyLinkedList()
nums2.insertAtStart(new Node(8))
nums2.insertAtStart(new Node(7))
nums2.head.next.next = nums1.gethead().next.next
nums2.insertAtStart(new Node(9))
nums2.updateLength()
nums1.print()
nums2.print()

console.log(`The Common point is ${getIntersection(nums1, nums2).data}`)
