class Solution {
public:
     bool prime(int n)
    {
        if(n==0 || n==1)
            return false;
        int k=sqrt((double)n);
        for(int i=2;i<=k;++i)
        {
            if(n%i==0)
                return false;
        }
        return true;
    }
    int countPrimes(int n)
    {
        int count1=0;
        for(int i=1;i<n;++i)
        {
            if( prime(i) )
            {
                ++count1;
            }
        }
        return count1;
    }
};
