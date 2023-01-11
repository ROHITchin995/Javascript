// 1. Given an array of integers nums and an integer limit, return the size of the longest non-empty subarray
// such that the absolute difference between any two elements of this subarray is less than or equal to the
// limit
var longestSubarray = function(nums, limit) {
let left = 0, right = 0, max = [], min = [], num = 0
while (right < nums.length) {
num = nums[right++]
while (max.length && num > max[max.length - 1]) max.pop()
while (min.length && num < min[min.length - 1]) min.pop()
max.push(num)
min.push(num)
if (max[0] - min[0] <= limit) continue
num = nums[left++]
if (max[0] == num) max.shift()
if (min[0] == num) min.shift()
}
return right - left
}
let nums = [8,2,4,7], limit = 4;
console.log(longestSubarray(nums,limit));