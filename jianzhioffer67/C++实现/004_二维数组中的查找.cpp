/* 
题目描述：

在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

*/

/*
思想：
根据数组的特点，取数组中最右的数a[i][j]和target比较，若target大于a[i][j]，则向下比较一行，
反之向左比较一列。
*/ 

class Solution {
public:
    bool Find(int target, vector<vector<int> > array) {
        int rows = array.size(), cols = array[0].size();
        int i = 0, j = cols - 1;
        while( i <= rows - 1 && j >= 0){
            if( target == array[i][j]) {
                return true;
            } else if( target > array[i][j]) {
                i++;
            } else {
                j--;
            }
        }
        return false;
    }
};