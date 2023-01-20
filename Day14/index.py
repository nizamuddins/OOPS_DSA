nums = [3,2,1,]
class Solution:
    def missingNumber(self, nums):
        set = {nums[0]};
        for i in range(1,len(nums)):
            set.add(nums[i]);
        print(set)    
        for i in range(0,(len(nums)+1)):
            if (i in set) == False:
                return i
        
result = Solution();
print(result.missingNumber(nums))        