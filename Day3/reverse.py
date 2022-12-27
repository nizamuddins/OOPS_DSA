# # revreArray
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(reverseA(arr));
function reverseA(array) {
    let arr2 = [];
    let n = array.length;
    let index = 0;
    for (let i = n - 1; i >= 0; i--) {
        arr2[index++] = array[i];
    }
    return arr2
}
# reverse within array
let arr2 = [1,2,3,4,6,7,8,9];

console.log(arr2);
console.log(reverseA(arr2));

function reverseA(array) {
    let n = array.length;
    let i = n - 1;
    while (i >= 0) {
        let j = n - 1 - i;
        if (i == j || j == i + 1) 
            return array 
            while (j < n) {
                let x = array[j];
                array[j] = array[i];
                array[i] = x;
                break;
            }
        i--;
    }
}