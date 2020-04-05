// 1、暴力直接法，
var defangIPaddr = function(address) {
    let ans = "";

    for (let i = 0; i < address.length; ++i) {
        if (address[i] === '.') {
            ans += "[.]";
        } else {
            ans += address[i];
        }
    }

    return ans;
};

// 2、split join
var defangIPaddr = function(address) {
    return address.split('.').join('[.]');
};

// 3、正则
var defangIPaddr = function(address) {
    return address.replace(/\./g, "[.]");
};