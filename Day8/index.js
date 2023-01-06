// BinarySeacrh without r index
let nums =[4,5,6,7,0,1,2]
let target = 6;
var search = function(nums, target) {
    let l = 0;
    let out = -1
    let ind = 1;
    let r= 0;
    if(nums[0] == target) return 0
    while(nums[ind] <= target){
        r  = ind;
        ind*=2;
    }
    let val = search2();  
    if(val != undefined){
        return val
    }
    function search2(){
        while(l<=r){
            let mid = Math.floor((l+r)/2);
            if(nums[mid] == target) return mid;
            if(nums[mid]>=nums[l]){
                if(target >= nums[l] && target<nums[mid]){
                    r = mid-1;
                }else{
                    l = mid+1;
                }
            }else{
                if(target > nums[mid] && target<=nums[r]){
                l = mid+1;
            }else{
                r = mid-1
        }
    }
      
    }
  }

    return out
};
console.log(search(nums,target))


