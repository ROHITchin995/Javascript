/**
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
 */

var searchRange = function(nums, target) {
    var res = [-1, -1];
    if (nums == null || nums.length == 0)
        return res;
    let n = nums.length;
    let left = searchLeft(nums, target);
    let right = searchRight(nums, target);
    console.log(left);
    console.log(right);
    if (left >= 0 && right < n && nums[left] == target && nums[right] == target) {
        res[0] = left;
        res[1] = right;
    }
    return res;

 }

function searchLeft(a, target) {
    let lo = -1;
    let hi = a.length;
    while (hi > lo + 1) {
        let mid = lo + Math.floor((hi - lo) / 2) 
        if (ok1(a[mid], target)) {
            hi = mid;
        } else {
            lo = mid;
        }
    }
    if (hi == a.length) return -1;
    return a[hi] == target ? hi : -1;
}

// Is number at least equal to the target
// FFFF'T'TTTTT
function ok1(x, target) {
    return x >= target;
}

function searchRight(a, target) {
    let lo = -1;
    let hi = a.length;
    while (hi > lo + 1) {
        let mid = lo + Math.floor((hi - lo) / 2) 
        if (ok2(a[mid], target)) {
            hi = mid;
        } else {
            lo = mid;
        }
    }
    if (hi - 1 >= 0 && a[hi - 1] == target) {
        return hi - 1;
    }
    return -1;
}

// Is number greater than the target
// FFF'F'TTTTT
function ok2(x, target) {
    return x > target;
}