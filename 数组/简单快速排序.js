function quickSort(arr){
    if(arr == null || arr.length < 1) return [];
    var leader = arr[0];
    var left = [];
    var right = [];
    for(var i = 0; i< arr.length-1; i++){
        if(compare(leader,arr[i+1])){
            left.push(arr[i+1]);
        }else {
            right.push(arr[i+1]);
        }
    };
    left = quickSort(left);
    right = quickSort(right);
    // 这里因为更改了arr的引用值，所以上面必须加上left = ...; right = ...; 
    arr = [...left,leader,...right];
    return arr;
}

function compare(a,b){
    if(a > b){
        return true;
    }else{
        return false;
    }
}

var arr = [4,2,9,3,5,0];
console.log(quickSort(arr));
