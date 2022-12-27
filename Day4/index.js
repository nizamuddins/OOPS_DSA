let arr = [
    1,
    0,
    1,
    1,
    0,
    1
];
console.log(arr);
console.log(sort(arr))

function sort(array) {
    let length = array.length;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            count++;
        }
    }
    let i = 0;
    for (; i < count; i++) {
        array[i] = 0;
    }
    for (let j = i; j < length; j++) {
        array[j] = 1;
    }

    return array

}

// ----------------

let arr1 = [
    1,
    0,
    1,
    2,
    0,
    1,2,2
];
console.log(arr1);
console.log(sort(arr1))

function sort(array) {
    let length = array.length;
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            count1++;
        }
        if(array[i]== 1){
            count2++;
        }
    }
    let i = 0
    for (; i < count1; i++) {
        array[i] = 0;
    }
    let j = i
    for (; j <= length-count1; j++) {
        array[j] = 1;
    }
    for (let k = count1+count2; k < length; k++) {
        array[k] = 2;
    }

    return array

}

// sortColors=====================

let arr2 = [1,1,1,0,2,0,2];
var sortColors = function(array) {
    let length = array.length;
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            count1++;
        }
        if(array[i]== 1){
            count2++;
        }
    }
    let i = 0;
    for (; i < count1; i++) {
        array[i] = 0;

    }
    let j = i
    for (; j < length; j++) {
        array[j] = 1;
    }

    for (let k = count1+count2; k < length; k++) {
        array[k] = 2;
    }

    return array

}
console.log(sortColors(arr2))

// maxSubArray-------------------------

let nums = [-2,-1];
var maxSubArray = function(nums) {
    let c = 0;
    var maxint = -9764455650646;
    let max = maxint;
    for(let i=0;i<nums.length;i++){
        
        c += nums[i];
        if(max<c){
            max = c;
        }
        if(c<0){
            c=0;
        }
    }
    if(nums.length == 0){
        return []
    }
    return max;
};

console.log(maxSubArray(nums));