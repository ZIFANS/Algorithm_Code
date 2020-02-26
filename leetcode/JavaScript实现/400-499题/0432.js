// 别人的代码，要理解下
var AllOne = function() {
    this.first = this.last = null
    this.lvHead = {} // 每层头节点
    this.lvLast = {} // 每层尾节点
    this.data = {}
    
    this.remove = function(node) {
        let f = this.lvHead[node.val]
        let l = this.lvLast[node.val]
        
        // 从链表中删除
        if(node.prev) node.prev.next = node.next
        if(node.next) node.next.prev = node.prev
        
        // 维护头尾
        node == this.first ? this.first = node.next : ''
        node == this.last  ? this.last  = node.prev : ''
        
        // 维护每一层头尾
        if(f == l) this.lvHead[node.val] = this.lvLast[node.val] = null
        else if (f == node) this.lvHead[node.val] = node.next
        else if (l == node) this.lvLast[node.val] = node.prev
        
    }
    
    // 在pos位置上的type方向上插入node节点
    // type==0表示左边, type==1表示右边
    this.add = function(pos, type, node) {
        
        let f = this.lvHead[node.val]
        let l = this.lvLast[node.val]
        
        if(pos == null) {
            if(!this.first) {
                this.first = this.last = node
                this.lvLast[node.val] = this.lvHead[node.val] = node
            } else {
                let f = this.first
                node.next = f
                f.prev = node
                this.first = node
                this.lvHead[node.val] = node
            }
            return
        }
        
        if(type == 1) {
            let next = pos.next
            node.next = next
            node.prev = pos
            pos.next = node
            next ? next.prev = node : ''
            
            if (f == null) {
              this.lvHead[node.val] = this.lvLast[node.val] = node
            } else {
              this.lvHead[node.val] = node   
            } 
            pos == this.last ? this.last = node : ''
        } else if(type == 0) {
            let prev = pos.prev
            node.next = pos
            node.prev = prev
            pos.prev = node
            prev ? prev.next = node : ''
            
            if (l == null) {
              this.lvHead[node.val] = this.lvLast[node.val] = node
            } else {
              this.lvLast[node.val] = node   
            } 
            pos == this.first ? this.first = node : ''
        }
    }
};

AllOne.prototype.inc = function(key) {
    let node = null
    if(!this.data[key]) {
        this.data[key] = node = {key:key, val: 1, next: null, prev: null}
        this.add(null, 1, node)
    } else {
        node = this.data[key]
        let newNode = {key:key, val: node.val + 1, next: null, prev: null}
        this.data[key] = newNode
        this.add(this.lvLast[node.val], 1, newNode)
        this.remove(node)
        this.data[key] = newNode
    }
};


AllOne.prototype.dec = function(key) {
    if(!this.data[key]) {
        return
    } else {
        let node = this.data[key]
        let newNode = {key:key, val: node.val - 1, next: null, prev: null}
        if(newNode.val) {
            this.data[key] = newNode
            this.add(this.lvHead[node.val], 0,  newNode)
        } else {
            this.data[key] = null
        }
        this.remove(node)
    }
};

AllOne.prototype.getMaxKey = function() {
    return this.last ?  this.last.key : ''
};

AllOne.prototype.getMinKey = function() {
    return this.first ?  this.first.key : ''
};
