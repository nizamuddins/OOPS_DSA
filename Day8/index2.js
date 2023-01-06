let nums = [
    5,
    7,
    7,
    8,
    8,
    10
];

let target = 7;

function search(nums,target){
    let l = 0;
    let r = nums.length-1;
    let result = [];
    let r1 = 0;

    First(nums,target,l,r);
    function  First(nums,target,l,r){
        while(l<=r){
            let mid = Math.floor((l+r)/2);
            if(nums[mid] == target){
                result[0] = mid;
                r = mid-1
            }else if(target>nums[mid]){
                l = mid+1
            }else{
                r = mid-1
            }
        }
        l = 0;
        r = nums.length-1
    }
    Second(nums,target,l,r)
    function  Second(nums,target,l,r){
        while(l<=r){
            let mid = Math.floor((l+r)/2);
            if(nums[mid] == target){
                result[1] = mid;
                l = mid+1
            }else if(target>nums[mid]){
                l = mid+1
            }else{
                r = mid-1
            }
        }

    }

    if(result.length != 0){
        for(let i of result){
            r1 += i
        }       
        return r1-1;
    }else{
        return -1;
    }

}
console.log(search(nums,target))