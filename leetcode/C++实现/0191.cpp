class Solution {
public:
    int hammingWeight(uint32_t n) {
        int count1=0;
        uint32_t temp=n;
        while(temp!=0)
        {
            int m;
            m=temp%2;
            temp=temp/2;
            if(m==1)
                count1++;
        }
        return count1;
    }
};