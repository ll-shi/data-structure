function swap(arr,a,b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function quickSort(arr){
    detail1(arr,0,arr.length);
};
// 快速排序关键在与获取到断点与退出，有序就退出。
// 左闭右开原则
function detail1(arr,begin,end){
    // 第一步有序就返回(出口)
    if(end - begin <= 1){
        // 排序元素只有一个或者，begin==end 表示已经有序
        return;
    }
    // 初始化左右指针
    var left = begin;
    var right = end;
    var leader = arr[begin];
    // 找到point
    var point = getPoint(arr,left,right,leader);
    swap(arr,begin,point);
    // 递归
    detail1(arr,begin,point);
    detail1(arr,point + 1, end);
}
function getPoint(arr,left,right,leader){
    var point =null;
    while(left < right){
        while(arr[++left] < leader && left < right);
        while(arr[--right] > leader && right > left);
        // 因为arr[--right] left == right 或者 right == left - 1 都表示找到断点
        // left == right 表示right在移动的时候移动到left，
        // right == left - 1 表示left移动到right，但是还要进行一个right指针左移导致right < left
        if(left < right){
            swap(arr,left,right);
        }
    }
    point = left == right ? right - 1 : right;
    return point;
}
var arr = [45,2,8,-23,5,80];
quickSort(arr);
console.log(arr);
