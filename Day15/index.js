// Map
// map1.set(1,"a");
// console.log(map1)

let arr = [2,7,11,15];
let tar = 9;

function twoSum(arr,tar){
    const map1 = new Map();
    for(let i = 0;i<arr.length;i++){
        let val = tar-arr[i]
        if(!map1.has(val)){
            map1.set(val,i);
    console.log(map1)

        }else{
            return [i,map1.get(val)]
        }
    }
    
}
console.log(twoSum(arr,tar))