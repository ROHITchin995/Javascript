/**
 * Given a sorted array linked list you have to remove the duplicate elements from it.
Input:
head: [1,2,2,3,3,3,4]
Output:
[1,2,3,4]
Explanation :
Unique elements in the linked list 1,2,2,3,3,3,4 is 1,2,3,4
Approach:
Iterate over the linked list from left side. Starting from the left most node, if the value of the next node is
similar to the current node then we will skip it, else we will add it to the address of the current node and
move the pointer to that node.


 */

deleteDuplicates(){
    if (this.head == null ||
        this.head.next == null)
        return this.head;
    let temp = this.head;
    while (temp.next != null) {
        if (temp.data ==
            temp.next.data)
            temp.next =
                temp.next.next;
        else
            temp = temp.next;
    }
    return this.head;
}
