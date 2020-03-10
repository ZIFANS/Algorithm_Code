// 一行的正则搞定
var isMatch = function (s, p) {
    return new RegExp("^" + p + "$").test(s);
};
function countingSort(arr, maxValue) {
    let bucket = new Array(maxValue + 1),
        sortedIndex = 0,
        arrLen = arr.length,
        bucketLen = maxValue + 1;

    for (let i = 0; i < arrLen; ++i) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }

    for (let i = 0; i < bucketLen; ++i) {
        while (bucket[i] > 0) {
            arr[sortedIndex++] = i;
            bucket[i]--;
        }
    }
    return arr;
}