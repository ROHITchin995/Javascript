const insertElementAtBottomRecurrsion = function(stack, element) {
    // console.log(stack.data)
    if (stack.isEmpty()) stack.push(element)
    else {
        let current = stack.pop()
        insertElementAtBottomRecurrsion(stack, element)
        stack.push(current)
    }
    // console.log(stack.data)
}