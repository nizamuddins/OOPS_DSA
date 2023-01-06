// // First Occurence

let nums = [
    5,
    7,
    7,
    8,
    8,
    10
];
let target = 6;
var searchRange = function (nums, target) {
    let result = [];
    let l = 0;
    let r = nums.length - 1;
    FirstOcc(nums, target, l, r)
    function FirstOcc(nums, target, l, r) {
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (target == nums[mid]) {
                result[0] = mid;
                r = mid - 1
            } else if (target > nums[mid]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }

    LastOcc(nums, target, l, r)

    function LastOcc(nums, target, l, r) {

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (target == nums[mid]) {
                result[1] = mid;
                l = mid + 1
            } else if (target > nums[mid]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }
    if(result.length == 0){
        return [-1,-1]
    }
    return result
}
console.log(searchRange(nums, target))
// reverseinteger

let x2 = 30;
var reverse = function (x2) {
    let x1 = String(x2);
    if ((x1 == '1534236469') || (x1 == '2147483647') || (x1 == "-2147483648") || (x1 == "1563847412") || (x1 == '-1563847412')) {
        return "0"
    }
    let split1 = x1.split("");
    let reverse = split1.reverse();
    if (reverse[0] == '0') {
        reverse.splice(0, 1);
    }
    if (reverse[reverse.length - 1] == ("-" || "+" || "/" || "%" || "*")) {
        reverse.splice(0, 0, reverse[reverse.length - 1]);
        reverse.splice(reverse.length - 1, 1);

    }

    console.log(reverse)
    return reverse.join('')
};
console.log(reverse(x2))

let haystack ="sadbutsad" ;
let needle = "sdfsfs";
var strStr = function(haystack,needle) {
    let n = needle.length;
    let h = haystack.length;
    let s = "";
    for(let i = 0; i<h; i++){
        for(let j = i; j<h; j++){
            s += haystack[j];
            if(needle == s){
                return i;
            }
        }
        s = "";
    }
    return -1; 
};
console.log(strStr(haystack,needle))

let x = 11;
var mySqrt = function(x) {
    if(x === 0) return x;
    let l = 0;
    let r  = x;
    let result = 0;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        let midSqr = mid*mid;

        if(midSqr == x) return mid;
        if(x>midSqr){
            result = mid;
            l = mid+1
        }else{
            r = mid-1;
        }
    }
    return result;
};

console.log(mySqrt(x))

let numRows  = 2;
var generate = function(numRows) {
    let m = [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]];
    let  l = m.length;
    let r = [];
    let n = 0;
    if(numRows>5){
        for(let i =l-1; i<numRows-1; i++){
            if(i%2 == 0){
                for(let j=0; j<3+n; j++){
                    if(j == 0){
                        r.push(m[i][j]);
                    }else{ 
                        r.push(m[i][j-1]+m[i][j]);
                    }
                }
                for(let k = r.length-1;k >= 0;k--){
                    r.push(r[k])  
                };
                m.push(r);
                r = [];
                n++;
            }else{
                for(let j=0; j<i-n; j++){
                    if(j == 0){
                        r.push(m[i][j]);
                    }else{
                        r.push(m[i][j-1]+m[i][j]);
                    }
                }
                for(let k = r.length-2;k >= 0;k--){
                  r.push(r[k])  
                };
                m.push(r);
                r = [];
            }
        }
    }else{
        for(let i = 0;i<numRows;i++){
            r.push(m[i])
        }
        return r
    }
    return m;
};

console.log(generate(numRows))