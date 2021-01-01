# 1、循环暴力解法
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        len1 = len(nums)
        ans = []

        for i in range(len1):
            for j in range(i + 1, len1):
                if nums[i] + nums[j] == target:
                    ans.append(i)
                    ans.append(j)
        

        return ans
    
# 2
