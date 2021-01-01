# 用Set
# 空间复杂度：O(N)
class Solution:
    def findRepeatNumber(self, nums: List[int]) -> int:
        dic = set()

        for num in nums:
            if num in dic:
                return num
            dic.add(num)
        

        return -1



