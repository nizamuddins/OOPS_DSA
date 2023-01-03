// First Occurence

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