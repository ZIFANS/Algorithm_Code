// 1、别人的思路
var surfaceArea = function(grid) {
    // 表面积统计
    let surfaceAreaAmuont = 0;

    // 遍历，依次计算每个位置上立方体的表面积
    for(let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            // 该位置的立方体个数
            const CubesAmount = grid[i][j];

            if (!CubesAmount) {
                // 如果这个位置不存在立方体，则跳过
                continue;
            }

            // 堆叠立方体的表面积 = 2（头部和底部的面）+ 4（每个立方体的四个侧面）* 立方体个数
            surfaceAreaAmuont += 2 + 4 * CubesAmount;

            /*
            关键点
            重叠面积的计算
            假设有两个相邻的立方体，叠放个数分别为2，5
            所以这两个立方体的重叠的个数，就是底部的那两个立方体，即2
            就可以得知对于这个位置的立方体，它有两个重叠面

            故只要依次计算出该位置立方体和其前后左右方位的立方体相互重叠的个数
            就可以计算出这个立方体的表面积
            */

            // 如果左侧有立方体
            if (i - 1 >= 0) {
                // 扣除重叠面积
                surfaceAreaAmuont -= Math.min(CubesAmount, grid[i - 1][j]);
            }
            // 如果下侧有立方体
            if (j - 1 >= 0) {
                // 扣除重叠面积
                surfaceAreaAmuont -= Math.min(CubesAmount, grid[i][j - 1]);
            }
            // 如果右侧有立方体
            if (i + 1 < grid.length) {
                // 扣除重叠面积
                surfaceAreaAmuont -= Math.min(CubesAmount, grid[i + 1][j]);
            }
            // 如果上侧有立方体
            if (j + 1 < grid.length) {
                // 扣除重叠面积
                surfaceAreaAmuont -= Math.min(CubesAmount, grid[i][j + 1]);
            }
        }
    }

    return surfaceAreaAmuont;
};
