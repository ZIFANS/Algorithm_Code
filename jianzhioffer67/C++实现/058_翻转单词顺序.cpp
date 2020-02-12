/*
题目描述：
牛客最近来了一个新员工Fish，每天早晨总是会拿着一本英文杂志，
写些句子在本子上。同事Cat对Fish写的内容颇感兴趣，有一天他向Fish借来翻看，但却读不懂它的意思。
例如，“student. a am I”。后来才意识到，这家伙原来把句子单词的顺序翻转了，
正确的句子应该是“I am a student.”。Cat对一一的翻转这些单词顺序可不在行，你能帮助他么？
*/

/*
思想：别人的思路
*/

//翻转str从s到e的部分
class Solution {
public:
    string ReverseSentence(string str) {
        int len = str.size();
        if(len == 0)
            return "";
        ReverseWord(str, 0, len - 1); //先整体翻转
        int s = 0, e = 0;
        int i = 0;

        while(i < len) {
            while(i < len && str[i] == ' ') //空格跳过
                ++i;
            e = s = i; //记录单词的第一个字符的位置
            while(i < len && str[i] != ' ') { //不是空格 找单词最后一个字符的位置
                i++;
                e++;
            }
            ReverseWord(str, s, e - 1); //局部翻转
        }
        return str;
    }
    void ReverseWord(string &str, int s, int e) {
        while(s < e) 
            swap(str[s++], str[e--]);
    }
};


// 一个个处理
class Solution {
public:
    string ReverseSentence(string str) {
        string res = "", tmp = "";
        for(unsigned int i = 0; i < str.size(); ++i){
            if(str[i] == ' ') {
                res = " " + tmp + res;
                tmp = "";
            }
            else tmp += str[i];
        }
        if(tmp.size()) res = tmp + res;
        return res;
    }
}; 