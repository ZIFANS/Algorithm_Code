// 1、排序 + 截取数组
var getLeastNumbers = function(arr, k) {
    arr.sort((a, b) => {
        return a - b;
    });

    return arr.slice(0, k);
};

// 2、最大堆
var getLeastNumbers = function (arr, k) {
    if (k > arr.length)
        return [];

    let ajustHeap = function (arr, index, length) {
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
    };

    // 构建大根堆
    let createHeap = function (arr, length) {
        for (let i = Math.floor(length / 2) - 1; i >= 0; --i) {
            ajustHeap(arr, i, length);
        }
    };

    createHeap(arr, k);

    for (let i = k; i < arr.length; i++) {
        // 当前值比最小的k个值中的最大值小
        if (arr[i] < arr[0]) {
            [arr[i], arr[0]] = [arr[0], arr[i]];
            ajustHeap(arr, 0, k);
        }
    }
    return arr.slice(0, k);  // return arr.splice(0, k);

};

// 3、快速排序
var getLeastNumbers = function(arr, k) {
    let quickSort = function (arr) {
        if (arr.length <= 1)
            return arr;
        
        let pivot = arr.splice(Math.floor(arr.length / 2), 1)[0];
        let left = [], right = [];

        for (let i = 0; i < arr.length; ++i) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        return quickSort(left).concat([pivot], quickSort(right));
    };

    return quickSort(arr).slice(0, k);
};
