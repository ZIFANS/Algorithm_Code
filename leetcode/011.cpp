class Solution {
public:
    int maxArea(vector<int>& height) {
    int len=height.size(),ans=0;
    int i=0,j=len-1;
    while(i<j)
    {
        ans=max( ans, min(height[i],height[j])*(j-i) );
        height[i]<height[j]?i++:j--;
    }
    return ans;
    }
};
