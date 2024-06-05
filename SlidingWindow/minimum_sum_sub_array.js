function MinimumSumSubbArray(nums,k) {
    if (nums.length < 1) {
        return -1
    }
    
    var sum = 0
    for (let i = 0; i < nums.length; i++) {  // computing sum first window
        sum += nums[i]
    }

    var currentSum = sum
    for (let i = k ; i < nums.length; i++) {
        currentSum += nums[i] - nums[i-k] // subtracting first element of last window and adding new element into new window
        if ( currentSum < sum ){
            sum = currentSum
        }
    }

    return sum
}