/*
题目描述：
地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，
每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 
例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。
但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？
*/

/*
思路：dfs,搜索四个方向，vis记录该方格是否被搜索过，
预判方格是否合法，合法就从该方格接着搜索
*/

const int MAXN = 100;
int dx[] = {0, 1, 0, -1}, dy[] = {1, 0, -1, 0};
int vis[MAXN][MAXN] = {0};
int sum;

class Solution {
public:
    void DFS(int x, int y, int k, int m, int n) {
        vis[x][y] = 1;
        for(int i = 0; i <= 3; ++i) {
            int newx = x + dx[i], newy = y + dy[i];
            if(vis[newx][newy] == 0 && newx >= 0 && newx < m && newy >= 0 && newy < n &&
            (newx%10+newx/10+newy%10+newy/10 <= k)) {
                ++sum;
                DFS(newx, newy, k, m, n);
            }
        }
    }
    int movingCount(int threshold, int rows, int cols) {
        if(threshold < 0)
            return 0;
        memset(vis, 0, sizeof(vis));
        sum = 1;
        DFS(0, 0, threshold, rows, cols);
        return sum;
    }
};