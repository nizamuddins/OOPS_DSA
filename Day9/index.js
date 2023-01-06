// Sorting Bubble Sort

let arr = [
    5,
    4,
    3,
    2,
    1,
    19
];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr)
let arr2 = [
    5,
    4,
    3,
    2,
    1,
    19
];

for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] > arr2[j + 1]) {
            let temp = arr2[j];
            arr2[j] = arr2[j + 1];
            arr2[j + 1] = temp;
        }
    }
}
console.log(arr2)

//  insertionSort

let array = [19, 5, 8, 6];

let insertSorting = (a) => {
    let n = a.length;
    for (let i = 1; i < n; i++) {
        let temp = a[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (temp < a[j]) {
                a[j + 1] = a[j];
            } else {
                break;
            }
        }
        a[j + 1] = temp;

    }
    return a;
};

console.log(insertSorting(array));

let arr4 = [
    3,
    2,
    2,
    2,
    0,
    0
];

function Sorting(arr4) {
    for (let i = 0; i < arr4.length - 1; i++) {
        for (let j = i + 1; j < arr4.length; j++) {
            if (arr4[i] >= arr4[j]) {
                let temp = arr4[i];
                arr4[i] = arr4[j];
                arr4[j] = temp;
            }
        }
    }
    return arr4
}
console.log(Sorting(arr4))

let arrArr = [1, 2, 2, 5];
let target = 2;

function UpperBound(arrArr, target) {
    let l = 0;
    let r = arrArr.length - 1;
    let r1 = 0;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arrArr[mid] == target) {
            r1 = mid;
            l = mid + 1
        } else if (target > arrArr[mid]) {
            l = mid + 1;
        } else {
            r = mid - 1
        }

    }
    return arrArr[r1+1];
}

console.log(UpperBound(arrArr,target))
