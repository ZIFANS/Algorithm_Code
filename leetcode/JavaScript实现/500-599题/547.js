// DFS ，深度优先遍历
var findCircleNum = function(M) {
    let n = M.length;
    if (n === 0)
        return 0;
    let count = 0;
    let DFS = (i) => {
        for (let j = 0; j < n; ++j) {
            if (M[i][j] === 1 && !visited[j]) {
                visited[j] = true;
                DFS(j);
            }
        }
    };
    let visited = {};
    for (let i = 0; i < n; ++i) {
        if (!visited[i]) {
            DFS(i);
            ++count;
        }
    }
    return count;
};


// BFS，广度优先遍历
var findCircleNum = function(M) {
    let n = M.length;
    if (n === 0)
        return 0;
    let count = 0;
    let BFS = (i) => {
        let queue = [i];
        while (queue.length > 0) {
            let adjacentPoint = queue.pop();
            for (let j = 0; j < n; ++j) {
                if (M[adjacentPoint][j] === 1 && !visited[j]) {
                    visited[j] = true;
                    queue.push(j);
                }
            }
        }
    };
    let visited = {};
    for (let i = 0; i < n; ++i) {
        if (!visited[i]) {
            BFS(i);
            ++count;
        }
    }
    return count;
};