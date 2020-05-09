class Solution:
    def twoSum(self, nums, target):
        
        # optimized approach
        hashmap = {}
        
        for idx, val in enumerate(nums):
            hashmap[val] = idx
            
        '''
            hashmap = {
            2:0
            7:1
            11:2
            15:3
            }
        
        '''    
        
        
        
        for idx,val in enumerate(nums):
            temp = target - val
            
            if temp in hashmap and idx != hashmap[temp]:
                return [idx, hashmap[temp]]
        
        return [-1, -1]
    
    
    '''
    idx = 0
    val = 2
    temp = target- val = 9 - 2 = 7
    
    
    '''
