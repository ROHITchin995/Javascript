//Given a stream of characters, find the first non repeating characters from the stream
/**
 * Example:
Input: abab
Output: a a b -1
Input: abacacb
Output: a a b b b b -1

 */

const Queue = require("queue")
const Deque = require("deque")

const insert = function(element, freqMap) {
    if(element in freqMap) freqMap[element]++
    else freqMap[element] = 1
}

const getFirstNonRepeating = function(s) {
    const freq = {}
    const q = new Queue()
    let result = ""
    for(let ch of s) {
        insert(ch, freq)
        while(!q.isEmpty() && freq[q.getFront()] > 1) q.dequeue()
        if(freq[ch] == 1) q.enqueue(ch)
        console.log(q.getFront())
        result += `${q.getFront()}, `
    }
    return result
}

const s = "abaabca" 

// console.log(`The first non-repeating of the` 
//             +`stream ${s} are ` +
//             `${getFirstNonRepeating(s)}`)
