// 自己的代码，第一想法
var getLeastNumbers = function(arr, k) {
    arr.sort((a, b) => {
        return a - b;
    });
    return arr.slice(0, k);
};


// 别人的最大堆 多看几次
var getLeastNumbers = function (arr, k) {
    if (k > arr.length) {
        return [];
    }
    createHeap(arr, k);
    for (let i = k; i < arr.length; i++) {
        // 当前值比最小的k个值中的最大值小
        if (arr[i] < arr[0]) {
            [arr[i], arr[0]] = [arr[0], arr[i]];
            ajustHeap(arr, 0, k);
        }
    }
    return arr.splice(0, k);
};

// 构建大顶堆
function createHeap(arr, length) {
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        ajustHeap(arr, i, length);
    }
}

function ajustHeap(arr, index, length) {
    for (let i = 2 * index + 1; i < length; i = 2 * i + 1) {
        if (i + 1 < length && arr[i + 1] > arr[i]) {
            i++;
        }
        if (arr[index] < arr[i]) {
            [arr[index], arr[i]] = [arr[i], arr[index]];
            index = i;
        } else {
            break;
        }
    }
}