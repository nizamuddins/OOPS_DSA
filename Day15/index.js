// Map
// map1.set(1,"a");
// console.log(map1)

let arr = [2,7,11,15];
let tar = 13;

function twoSum(arr,tar){
    const map1 = new Map();
    for(let i = 0;i<arr.length;i++){
        if(tar == arr[i]) return [i]
        let val = tar-arr[i]
        if(!map1.has(val)){
            map1.set(arr[i],i);
        }else{
            return [map1.get(val),i]
        }
    }
}
console.log(twoSum(arr,tar)) 