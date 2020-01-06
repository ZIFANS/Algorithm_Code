class Solution 
{
public:
    bool isValid(string s) 
    {
      std::stack<char> c;
      for(unsigned int i=0;i<s.length();++i)
      {
          if(s[i]=='('  ||  s[i]=='{' || s[i]=='[' )
          {
              c.push(s[i]);
          }
          else
          {
              if(c.empty())
                  return false;
              char temp=c.top();
               if( (temp=='('&& s[i]==')') ||  ( temp=='[' && s[i]==']' )  || (temp=='{' && s[i]=='}')     )
               {
                   c.pop();
               }
              else
              {
                  return false;
              }
          }
      }
       return c.empty();
    }
};