// HashMap
// Set

let set = new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(40);
set.add(50);

var entries = set.entries();
console.log(entries.next().value)
var getValues = set.values();
console.log(getValues)
set.delete(10);
set.clear();
console.log(set.has(10))


let set1 = new Set();
let arr = [10,20,30,40,50]
let tar = 30;
function twoSum(arr,tar){
    set1.add(arr[0])
    for(let i=1;i<arr.length;i++){
        let val = tar-arr[i];
        if(set1.has(val)){
            return [val,arr[i]]
        }else{
            set1.add(arr[i])
        }
    }

}
console.log(twoSum(arr,tar))

// let nums = [9,6,4,2,3,5,7,0,1];

// var missingNumber = function(nums) {
//     let set = new Set(nums)
//     let n = nums.length;
//     for(let i =0; i<= n;i++){
//         if(!set.has(i)) return i
//     }

// }
// console.log(missingNumber(nums))


// let arr = [[11,2,4],
// [4,5,6],
// [10,8,-12]];

// function diagonalDifference(arr) {
//     let l = 0;
//     let r = 0;
    
//     for(let i = 0;i<arr.length;i++){
//         l += arr[i][i];
//     }
//     let k = arr.length-1;
//     for(let j = 0;j < arr.length;j++){
//         while(k >= 0){
//             r += arr[j][k];;
//             k--;
//             break;
//         }
//     }
    
//     let diff = l-r;
//     if(diff < 0){
//         let val = String(diff).split('');
//         val.shift(); 
//         diff = +(val.join(''))
//     }
//     return diff; 
//  }
//  console.log(diagonalDifference(arr))


// function staircase(n) {
//     let star = 1;
//     var string = '';
//     for(let i = 0;i < n;i++){
//         let j = 0;
//         while(j<n-star){
//             string += " ";
//             j++;
//         };

//         let k = 0;
//         while(k<star){
//             string += "#";
//             k++;
//         }
//         console.log(string);
//         string = '';
//         star++;
//     }
// }
// staircase(10)
// let candles = [3,2,1,3]
// function birthdayCakeCandles(candles) {
//     let max = 0;
//     for(let i = 0;i<candles.length;i++){
//         if(max<candles[i]){
//             max = candles[i]
//         }
//     }
//     let count = 0;
//     for(let j = 0;j<candles.length;j++){
//         if(candles[j] == max){
//             count++;
//         }
//     }
//     return count;
// }
// birthdayCakeCandles(candles)

