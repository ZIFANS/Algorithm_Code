// 自己的代码，
// 第一想法就是先把数组扁平化，然后排序。
var kthSmallest = function(matrix, k) {
    let aftersort = flat(matrix).sort((a, b) => { 
        return a - b;
    });
    return aftersort[k - 1];
};
function flat(arr) {
  const result = []; 
  const stack = [].concat(arr);  // 将数组元素拷贝至栈，直接赋值会改变原数组
  //如果栈不为空，则循环遍历
  while (stack.length !== 0) {
    const val = stack.pop(); 
    if (Array.isArray(val)) {
      stack.push(...val); //如果是数组再次入栈，并且展开了一层
    } else {
      result.unshift(val); //如果不是数组就将其取出来放入结果数组中
    }
  }
  return result;
}

// 第一种想法确实简单，但是感觉做算法题不能这样。还是老老实实用二分
/*
矩阵最左上角为最小值，最右下角为最大值，我们在此范围内进行二分搜索，取中间数mid，然后在每行中查找mid，
这里使用upper_bound，在每行查找第一个大于mid的元素，如果目标数比该行的尾元素大，则upper_bound返回该行元素个数，
如果目标数比改行第一个元素小，则uppper_bound返回0，遍历完所有行可以确定mid是第几小的数，然后与k进行比较，进行二分查找，
left和right最终相等，会变为数组中第k小的数。
*/

// 第三种想法， 别人的，用最大堆。但是js建立最大堆挺麻烦的。
var kthSmallest = function(matrix, k) {
    let heap = buildHeap(matrix, k);
    return heap[1];
};
var buildHeap = function(matrix, k) {
    let heap = [0, matrix[0][0]];
    for(let i = 0;i<matrix.length; i++){
        for(let j = 0; j < matrix.length;j++){
            if(i===0 && j===0) continue;
            // 比堆顶元素大,则不入堆
            if(heap[1] < matrix[i][j] && heap.length > k){
                continue;
            } else{
                if(heap.length <= k) {
                    // 堆未满,入堆
                    insert(matrix[i][j]);
                } else {
                    // 堆已满,删除堆顶后入堆.
                    remove();
                    insert(matrix[i][j]);
                }
            }
        }
    }
    function insert(ele){
        heap.push(ele);
        let child = heap.length - 1;
        // 插入从下往上建堆
        while(child > 0) {
            let parent = parseInt(child / 2);
            if(parent > 0 && heap[parent] < heap[child]){
                [heap[child], heap[parent]] = [heap[parent], heap[child]];
                child = parent;
            } else {
                break;
            }
        }
    }
    function remove(){
        heap[1] = heap[heap.length - 1];
        heap.pop();
        let i = 1;
        // 删除 从上往下建堆
        while(true) {
            let maxPos = i;
            if(i * 2 < heap.length && heap[i] < heap[i * 2]){
                maxPos = i * 2
            } 
            if(i * 2 + 1 < heap.length  && heap[maxPos] < heap[i * 2 + 1]){
                maxPos = i * 2 + 1;
            }
            if(maxPos === i) break;
            [heap[i], heap[maxPos]] = [heap[maxPos], heap[i]];
            i = maxPos;
        }
    }
    return heap;
}
