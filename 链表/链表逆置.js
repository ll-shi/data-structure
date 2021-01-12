function Node(value){
    this.value = value;
    this.next = null;
}
// 逆置链表只要返回链表的根节点即可。
function reverse(root){
    if(root.next.next == null){
        // 当前节点表示倒数第二个节点。
        root.next.next = root;
        return root.next;
    }else{
        var result = reverse(root.next);
        root.next.next = root;
        root.next = null;
        return result;
    }
}

// 其实跟上面一样，由于是引用对象，可以简化成上面写法。
function detail(root){
    var prev = root;
    if(root.next.next == null){
        prev.next.next = root;
        return {
            root : prev.next,
            work : prev
        };
    }else{
        var result = detail(root.next);
        result.work.next = prev;
        prev.next = null;
        result.work = prev;
        return result;
    }
}
function myReverse(root){
    return detail(root).root;
}
function query(root){
    if(!root){
        return;
    }else{
        console.log(root.value);
        query(root.next);
    }
}

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);
a.next = b;
b.next = c;
c.next = d;
// query(reverse(a));
query(myReverse(a))