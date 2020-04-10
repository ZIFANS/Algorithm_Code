class Solution {
public:
    string reverseWords(string s) {
        reverse(s.begin(), s.end());
        int n = s.size();
        int pos = 0;

        for (int begin = 0; begin < n; ++begin) {
            if (s[begin] != ' ') {
                if (pos != 0) {
                    s[pos++] = ' ';
                }
                int end = begin;
                while (end < n && s[end] != ' ') {
                    s[pos++] = s[end++];
                }
                reverse(s.begin() + pos - (end - begin), s.begin() + pos);
                begin = end;
            }
        }

        s.erase(s.begin() + pos, s.end());
        return s;
    }
};
