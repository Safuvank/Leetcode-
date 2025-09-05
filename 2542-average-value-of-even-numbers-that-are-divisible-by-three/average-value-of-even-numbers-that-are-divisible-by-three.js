/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum = 0;
    let count = 0;
    for(let num of nums){
        if(num % 3 === 0 && num % 2 === 0){
            sum = sum + num;
           count++;
        }
        
    }
        if(count === 0){
            return 0;
        }
        return Math.floor(sum/count)
     
};