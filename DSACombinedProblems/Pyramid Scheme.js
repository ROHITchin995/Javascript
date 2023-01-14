/**
 * Problem Statement:
There is a pyramid scheme consisting of N brokers. The company has decided to give bonuses to all the 
brokers in the scheme who have some number of brokers under them in the pyramid
1 is the founder of the scheme so all the brokers are under him in the pyramid

    1 
    |  
    V  
    3
   |  |
   V  V
   2  4 -> 5

   For example in the diagram above
1 has 4 brokers(3,2,4,5) under him
3 has 3 brokers(2,4,5) under him has 0 brokers under him
2
4 has 1 broker (5) under him
5 has 0 brokers under him
So broker 3 will get the bonus
Note: 1 and 0 are not prime
Input Format
The first line of the input contains an integer N
The next line contains N-1 space-separated integers: for each broker 2,3,...,n the broker who is directly above them in the pyramid scheme.
Output Format
In the first line print an integer X, denoting the number of brokers getting the bonus
In the next line print X space-separated integers in ascending order denoting the brokers getting the bonus

 */

let start = new Array(1000001);
let end = new Array(1000001);
//storing dfs order
let dfs_order = []
let adj = []

for (let i = 0; i < 1000001; i++) {
    adj.push([])
    
}
let visited = new Array(1000001);
visited.fill(false);

let dfs = (a, b) => {
    //keep track of node visited
    visited[a] = true;
    b += 1;
    start[a] = b;
    dfs_order.push(a);
    for (let i = 0; i < adj[a].length; i++) {

        if (!visited[adj[a][b]]) {
            b = dfs(adj[a][i], b)
        }
    }
    end[a] = b;
    return b
}

let Print = (n) => {
    let str;
    for (let i = 1; i < n; i++) {
        str = "";
        //if node is a leaf node then start[i] is equal to end[i] if(start[i]!=end[i])
        if(start[i]!=end[i])
        { 
            str += "brokers under " + i + "are : ";
            for (let j=start[i] + 1; j < end[i] + 1; j++)
            {
                str += dfs_order[j - 1] + " ";
            }
            console.log(str)
        }
    }
}

let n = 10, c = 0;
adj[0].push(1)
adj[1].push(3)
adj[3].push(2)
adj[3].push(4)
adj[4].push(5)


dfs(0,c)
Print(n)