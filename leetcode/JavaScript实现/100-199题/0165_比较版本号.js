var compareVersion = function(version1, version2) {
    let arr1 = version1.split('.').map((data) => {
        return +data;
    });
    let arr2 = version2.split('.').map((data) => {
        return +data;
    });
    let maxLen = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLen; ++i) {
        let val1 = arr1[i] || 0;
        let val2 = arr2[i] || 0;
        if (val1 > val2) {
            return 1;
        }
        else if (val1 < val2) {
            return -1;
        } else if (val1 === val2) {
            continue;
        }
    }

    return 0;
};