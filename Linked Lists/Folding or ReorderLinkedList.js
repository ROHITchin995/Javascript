// You are given the head of a linked-list. The list can be represented as:
// L0 → L1 → ... → Ln - 1 → Ln
// Reorder the list to be on the following form:
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.


const SinglyLinkedList = require("./singlyLinkedList.js")
const Node = require("./node.js")

let nums = new SinglyLinkedList()

for(let i = 1; i <= 5; i++) {
    nums.insertAtEnd(new Node(i))
}

const reorder = function(nums) {
    // Partition nums at middle into left and right
        let [left, right] = partition(nums)
        console.log("Left is")
        left.print()
        console.log("Right is")
        right.print()
    // Reverse right part
        let reverseRight = reverse(right)
        console.log("Reverse of right is")
        reverseRight.print()
    // Merge left and right
    
    
        const final = new SinglyLinkedList()
        final.head = merge(left.head, reverseRight.head)
        final.length = left.getLength() + reverseRight.getLength()
    
        left.head = null
        left.length = 0
        reverseRight.head = null
        reverseRight.length = 0
        console.log("The Merge of two list is")
        final.print()
        return final
    }
    
    const merge = function(head1, head2) {
        if (head1 == null) return head2
        if (head2 == null) return head1
    
        temp1 = head1.next
        temp2 = head2.next
    
        head1.next = head2
        head2.next = merge(temp1, temp2)
    
        return head1
    }
    
    const partition = function(nums) {
        let left = new SinglyLinkedList()
        left.head = nums.gethead()
        let mid = Math.floor(nums.getLength()/2)
        left.length = mid
        let curr = nums.gethead()
        let prev = null
        while(mid--) {
            prev = curr
            curr = curr.next        
        }
        let right = new SinglyLinkedList()
        right.head = curr
        right.length = nums.getLength() - Math.floor(nums.getLength() / 2)
        prev.next = null
    
        nums.head = null
        nums.length = 0
        
        return [left, right]
    }
    
    // const reorderNums = reorder(nums)
    