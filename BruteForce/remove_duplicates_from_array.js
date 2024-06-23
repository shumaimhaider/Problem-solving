/** 
Given an integer array nums sorted in non-decreasing order, 
remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same.
Then return the number of unique elements in nums.
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
 */

var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]==nums[i+1]) {
            nums.splice(i,1)
            i--
        }
    }
};