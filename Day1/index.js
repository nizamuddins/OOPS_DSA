// 1. N natural numbers.

function natural(number) {
    let i = 0;
    while (i <= number) {
        console.log(i);
        i++;
    }
}

natural(100)

// 2. program that takes a number as input and prints its multiplication table
// upto 10.

function multi(number) {
    for (let i = 1; i <= number; i++) {
        console.log(`${number}*${i}=${number * i}`)

    }
}
multi(10);

// 3. Program to reverse an array.

let array = [1, 2, 3, 4, 5];
let array2 = [];
function reverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        array2.push(array[i]);
    }
}
reverse(array);

console.log(array2)

// 4. Average sum of elements of an array.

let arr = [1, 2, 3, 4, 5];
let sum = 0;
function Avgsum(arr1) {
    for (let i = arr1.length - 1; i >= 0; i--) {
        sum += arr[i];
    }
}
Avgsum(arr);

console.log(sum);

// 5. Elements greater than avg sum of an array

let arr2 = [1, 2, 3, 4, 5];
let sum2 = 0;
function greater(arr1) {
    for (let i = arr1.length - 1; i >= 0; i--) {
        sum2 += arr[i];
    }
    for (let j = 0; j < arr1.length; j++) {
        if (arr2[j] > sum2) {
            return arr2[j];
        } else {
            return 'There is no element greater than avg sum of an array'
        }
    }

}
let result = greater(arr2);

console.log(result)

// 6. Find the largest element in an array.

let arr3 = [1, 2, 3, 4, 5, 16,45];
function largestEle(arr1) {
    let largest = 0;
    for (let i = 0; i < arr1.length; i++) {
        if(largest<arr3[i]){
            largest = arr3[i];
        }
    }
    return largest;
}
console.log(largestEle(arr3));

// 7. Find the largest second element in an array.

let arr4 = [1, 2, 3, 4, 5, 16,45,65];
function secondlargestEle(arr1) {
    let largest = 0;
    for (let i = 0; i < arr1.length; i++) {
        if(largest<arr4[i]){
            largest = i;
        }
    }
    console.log(largest)
    arr4[largest] = 0;
    largest = 0;
    for (let j = 0; j < arr1.length; j++) {
        if(largest<arr4[j]){
            largest = arr4[j];
        }
    }
    return largest;
}
console.log(secondlargestEle(arr4));


// 8. Program to find the smallest number among three numbers.

function largestAmg3(num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log(num1)
    }else if(num2>num1 && num2>num3){
        console.log(num2)
    }else{
        console.log(num3)
    }

}

largestAmg3(4,33,7)

// 9. Find the given element in an array and return it's index if present else -1;


let arr5 = [1, 2, 3, 4, 5, 16,45];
function elementFind(arr1,num) {
    
    for (let i = 0; i < arr1.length; i++) {
    var flag = 0
        if(num == arr5[i]){
                flag = 1;
                break;
            }

    }
    if(flag == 1){
        return num;
    }else{
        return -1
    }
}
console.log(elementFind(arr5,2));