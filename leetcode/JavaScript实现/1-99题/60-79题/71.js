var simplifyPath = function(path) {
    let stack = [];
    let pathArr = path.split('/');

    for (let item of pathArr) {
        if (item === '' || item === '.') {
            continue;
        } else if (item === '..') {
            stack.pop();
        } else {
            stack.push(item);
        }
    }
    return '/' + stack.join('/');
};
