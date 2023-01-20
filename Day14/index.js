// // HashMap
// // Set

// // let set = new Set();
// // set.add(10);
// // set.add(20);
// // set.add(30);
// // set.add(40);
// // set.add(50);

// // var entries = set.entries();
// // console.log(entries.next().value)
// // var getValues = set.values();
// // console.log(getValues)
// // set.delete(10);
// // set.clear();
// // console.log(set.has(10))


// // let set1 = new Set();
// // let arr = [10,20,30,40,50]
// // let tar = 30;
// // function twoSum(arr,tar){
// //     set1.add(arr[0])
// //     for(let i=1;i<arr.length;i++){
// //         let val = tar-arr[i];
// //         if(set1.has(val)){
// //             return [val,arr[i]]
// //         }else{
// //             set1.add(arr[i])
// //         }
// //     }

// // }
// // console.log(twoSum(arr,tar))

// let nums = [9,6,4,2,3,5,7,0,1];

// var missingNumber = function(nums) {
//     let set = new Set(nums)
//     let n = nums.length;
//     for(let i =0; i<= n;i++){
//         if(!set.has(i)) return i
//     }

// }
// console.log(missingNumber(nums))
let arr = [1,2,3,4,5]
function miniMaxSum(arr) {
    let min = null;
    let max = 0;
    for(let i = 0;i<arr.length;i++){
        let val = 0;
        for(let j = 0;j<arr.length;j++){
            if(j == i){
                continue
            }else{
                val += arr[j]             
            }
        }
        if(min == null){
            min = val;
            max = val
        }else if(val < min){
            min = val
        }
        if(max<val){
            max = val;
        }
    }
    
    return `${min} ${max}`    

}

console.log(miniMaxSum(arr))