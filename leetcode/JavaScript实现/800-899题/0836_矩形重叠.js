// 1.检查位置-逆向思维
/*
1、找到矩形不重叠的条件即上下左右均不重叠
2、再对条件取反
*/
var isRectangleOverlap = function(rec1, rec2) {
    return !(rec1[2] <= rec2[0] ||  // left;
             rec1[3] <= rec2[1] ||  // bottom
             rec1[0] >= rec2[2] ||  // right
             rec1[1] >= rec2[3]);   // top
            
};


// 2. 检查区域-正向思维
var isRectangleOverlap = function(rec1, rec2) {
    return (Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0]) && Math.min(rec1[3], rec2[3]) >
            Math.max(rec1[1], rec2[1]));
};
