function Node(value){
   this.value = value;
   left = null;
   right = null;
}

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);
var e = new Node(5);

a.left = b;
a.right = c;
b.left = d;
c.right = e;

// 前序遍历
function query(root){
    if(!root){
        return;
    }
    console.log(root.value);
    query(root.left);
    query(root.right);
}

// 中序遍历
function query1(root){
    if(!root){
        return;
    }
    query1(roo.left);
    console.log(root);
    query1(root.right);
}

// 后序遍历
function query2(root){
    if(!root){
        return;
    }
    query2(root.left);
    query2(root.right);
    console.log(root);
}
query(a);
