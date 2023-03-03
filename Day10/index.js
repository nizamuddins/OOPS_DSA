// SelectionSort

let arr = [6,5,4,3,2,1]
function SelectionSort(arr){
    let i  = 0;
    while(i<arr.length){
        let min_ind = i;
        let j = i+1;
        while(j<arr.length){
            if(arr[j]<arr[min_ind]){
                min_ind = j;
            }
            j++;
        }
        let temp = arr[i];
        arr[i] = arr[min_ind];
        arr[min_ind] = temp;
        console.log(arr)
        i++
    }
return arr
}
console.log(SelectionSort(arr))

// mergeSort
let nums1 = [0,0,2,4,0,0];let m = 2;let nums2 = [1,2,3,5];let n = 4
var merge = function (nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
 
    while (i < nums1.length) {
        if(nums1[i] != 0){
            let s = i
            let f = 0;
            while(s<m){
                let val = nums1.splice(s,1)
                nums1.splice(f,0,val[0]);
                s++;
                f++;
            }
            let k  = m;
            while(k<nums1.length){
                nums1.pop();
                k = k-1;
                k++
            }
        break
        }else{
            nums1.splice(i,1);
            i = i-1
        }
        i++;
    }
    let p = 0;
    while (p < nums2.length) {
        nums1.push(nums2[p]);
        p++;
    }
    if (nums1.length > 1) {
        let k = 0;
        while (k < nums1.length) {
            let min_ind = k;
            let l = k + 1;
            while (l < nums1.length) {
                if (nums1[l] < nums1[min_ind]) {
                    min_ind = l
                }
                l++;
            }
            let temp = nums1[k];
            nums1[k] = nums1[min_ind];
            nums1[min_ind] = temp;
            k++;
        }
    }
    
    return nums1;
};
console.log(merge(nums1, m, nums2, n))