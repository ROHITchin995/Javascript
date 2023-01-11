const reverse = function(stack) {
    const reverseStack = new Stack()
    while(!stack.isEmpty()) {
        reverseStack.push(stack.pop())
    }
    return reverseStack
}
