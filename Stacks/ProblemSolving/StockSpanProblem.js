//Brute-Force Method
function stockSpanProblem(arrs) {
    const result_array = [];
    for (var start = 0; start < arrs.length;
   start++) {
    var flag = true;
    var count = 0;
    for (var j = start; j >= 0; j--) {
    if (arrs[j] <= arrs[start]) {
    count++;
    }
    else {
    flag = false;}}}
}

//Using Stack
function stockSpanProblem(arrs) {
    const stack = new Stack_a();
    const result_array = [];
   
    for (let start = 0; start <
   arrs.length; start++) {
    if (stack.isEmpty()) {
    result_array.push(-1);
    stack.push([arrs[start],
   start])
    } else if (!stack.isEmpty())
   {
    while (!stack.isEmpty()
   && arrs[start] > stack.peek()[0]) {
    stack.pop();
    }
    if (stack.isEmpty())result_array.push(stack.peek()[1]);
    stack.push([arrs[start],
   [start]]);
    }
    }
   
    const output = [];
    for (let start = 0; start <
   result_array.length; start++)
    output.push(start -
   result_array[start]);
   
    return output;
   }
   const data = [100, 80, 60, 70, 60, 75, 85];
   console.log(stockSpanProblem(data));
   
