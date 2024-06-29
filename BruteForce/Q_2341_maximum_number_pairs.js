
/**  
 *  Q-2341 https://leetcode.com/problems/maximum-number-of-pairs-in-array/
 *  Optimized solution
 * @param {number[]} nums
 * @return {number[]}
 */

var numberOfPairs = function (nums) {
    let count = 0
    nums.sort((a, b) => a - b)  // sorting array in ascending order

    for (let i = 0; i < nums.length;) {
        if (nums[i] == nums[i + 1]) {         // finding pair and removing from array 
            count++
            nums.splice(i, 2)                 // remove the pair with out incrementing
        } else {
            i++                           // incrementing if pair cannot be created
        }
    }

    return [count, nums.length]
};

/**
 * Q-2341 https://leetcode.com/problems/maximum-number-of-pairs-in-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    let countLeftOver = 0
    let numberOfPairs = 0
    let hash = new Map()

    // creating hash for the frequency of each element
    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            hash.set(nums[i], hash.get(nums[i]) + 1)
        } else {
            hash.set(nums[i], 1)
        }
    }

    for (let value of hash.values()) {
        numberOfPairs += Math.floor(value / 2);    // finding number of pairs
        countLeftOver += value % 2;                // finding left over elements
    }

    return [numberOfPairs, countLeftOver]
};