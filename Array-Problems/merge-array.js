
/*
 two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
 representing the number of elements in nums1 and nums2 respectively.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

*/

var merge = function(nums1, m,nums2,n){
    let j=0
    for(let i=m;i<=(m+n-1);i++){
      nums1[i]=nums2[j]
      j+=1
    }
    nums1.sort((a,b)=>{
      return a-b
    })
  
    return nums1
  
  }

