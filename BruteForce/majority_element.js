/*
 
  Input: nums = [3,2,3]
 Output: 3
 */

var majorityElement = function(nums) {
    let numsMaps = new Map()
    
    let maxOccurrence = 0;
    let majorityElement = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(!numsMaps.has(nums[i])){
            numsMaps.set(nums[i],0)
        }
        numsMaps.set(nums[i], numsMaps.get(nums[i])+1)
        if(numsMaps.get(nums[i]) > maxOccurrence){
            maxOccurrence = numsMaps.get(nums[i])
            majorityElement = nums[i]
        } 
    }
    
    return majorityElement
}