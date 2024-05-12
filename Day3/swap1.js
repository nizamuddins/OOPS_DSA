// deleteElemets by swapping

let array = [1, 4, 6, 7, 9];
let num = 4;

console.log(deleteEle(array, num))
function deleteEle(arr, target) {
    let i = 0;
    let n = arr.length;
    for (; i < n; i++) {
        if (target == arr[i]) {
            break;
        }
    };
    if (i == n-1) 
        return arr;
    for (let j = i; j < n-1; j++) {
        arr[j] = arr[j + 1]
    }
    return arr
}
