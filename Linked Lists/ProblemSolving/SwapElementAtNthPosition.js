//Given two linked list, you are supposed to swap the element at nth position from both left and right.

/**
 * Input:
1,2,3,4,5
2
Output
1,4,3,2,5
Explanation:
2nd element is 2 and the 2nd last element is 4, on swapping the nodes we get the resultant as 1,4,3,2,5
Approach:
To solve this problem we can use two pointer techniques. Point first pointer to the head, while the second pointer
to the right.
1. Take a pointer `x` at the beginning and move it in the forward direction for n steps.
2. Take two more pointers `y` and `z. Move y to the nth position from the beginning and then move both
`y`and `z`together till the time `y` reaches the last node.
3. Once z and x are in position, swap the elements.

 */

swapElements(n){
    if(this.head==null)
    return
    if(n<1 || n>= this.length)
    return
    let ptr_x = this.head;
    let prev_ptr_x = null;
    for(let i=1;i<n;i++){
    prev_ptr_x = ptr_x
    ptr_x = ptr_x.next;
    }
   
    let ptr_y = ptr_x;
    let ptr_z = this.head;
    let ptr_z_prev = null;
    while(ptr_y.next != null){
    ptr_z_prev = ptr_z
    ptr_z = ptr_z.next;
    ptr_y = ptr_y.next;
    }
    if(prev_ptr_x== null){

        ptr_z.next = ptr_x.next;
        this.head = ptr_z;
        ptr_x.next= null;
        ptr_z_prev.next = ptr_x;
       
        }
        else if(ptr_z_prev== null){
        prev_ptr_x.next = ptr_z;
       
        ptr_x.next = ptr_z.next;
        ptr_z.next= null;
        this.head=ptr_x;
        }
        else{
            let temp = ptr_z.next;
            prev_ptr_x.next = ptr_z
            ptr_z.next = ptr_x.next
            ptr_z_prev.next = ptr_x
            ptr_x.next = temp;
            }
           
           
            }
                     