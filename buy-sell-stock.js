/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5

 */
var maxProfit = function(prices) {
    let minimumPrice = prices[0]
    let maxProfit = 0
    if(prices.length <= 1){
        return 0;
    }
    
    for(let i = 1; i < prices.length; i++){
        let profit = prices [i] - minimumPrice
        
        if(profit > maxProfit){
            maxProfit = profit
        }
        
        if(prices[i] < minimumPrice){
            minimumPrice = prices[i]
        }
    }
    
    return maxProfit
};