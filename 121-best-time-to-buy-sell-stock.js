/**
 * @param {number[]} prices
 * @return {number}
 */
// brute force: iterate first loop as buy (get smallest integer), loop through again to get sell price (max integer)
// greedy algo: keep track of the current solution (profit) and eventually build up to the most optimal as we iterate
var maxProfit = function(prices) {
    // original price
    let buyPrice = prices[0]
    // keep track of profit
    let profit = 0
    // iterate array and see if there is profit
    for (i = 0; i < prices.length; i++){
        // if profit
        if (buyPrice < prices[i]){
            // Track profit
            let tempProfit = prices[i] - buyPrice
            // if current profit is higher than global profit, set global profit to current profit
            if (tempProfit > profit) {
                profit = tempProfit
            }
            
        // if no profit then set buy price to current price
        } else {
            buyPrice = prices[i]
        }
    }
    // return the profit
    return profit
};