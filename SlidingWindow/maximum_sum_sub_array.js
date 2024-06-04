
  var maximumSumSubarray=function(K, Arr, N) {
    if (N<K){
         return -1
     }
     
     let sum=0;
     for(let i=0; i< K ;i++){
         sum+=Arr[i]
     }
     
     let currentSum=sum
     for(let i=K; i < N; i++){
         currentSum += Arr[i] - Arr[i-K]   // subtarcting last window first element and adding new element
         sum = Math.max(sum, currentSum)
     }
     
    return sum
 };
