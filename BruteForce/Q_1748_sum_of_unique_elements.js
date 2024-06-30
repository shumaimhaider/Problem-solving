/** Q-1748 Sum of Unique Elements
 * https://leetcode.com/problems/sum-of-unique-elements/submissions/
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let hash = new Map()
    let sum = 0
    for(let i = 0; i < nums.length; i++){
        if (hash.get(nums[i])){
             hash.set(nums[i], hash.get(nums[i])+1)
        }else{
            hash.set(nums[i], 1)
        }
    }
    
    for(let[key, count] of hash){  // calculating sum of unique elements
        if (count == 1){
            sum += key
        }
    }
    
    return sum
};