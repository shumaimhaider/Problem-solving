
/*Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]

*/
var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == val){
            nums.splice(i,1)
        }
        i--
    }
}

nums = [3,2,2,3], val = 3

console.log(removeElement(nums, val))