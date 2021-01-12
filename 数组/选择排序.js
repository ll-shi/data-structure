function compare(a,b){
    if(a>b){
        return true;
    }else{
        return false;
    }
}
function exchange(arr,a,b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// 任何一种排序算法，都没有优势之分，只有是否合适的场景。
function sort(arr){
    for(var i = 0; i < arr.length; i++){
        var maxIndex = 0;
        for(j = 0; j < arr.length - i; j++){
            if(compare(arr[maxIndex],j)){
                maxIndex = j;
            }
        }
        exchange(arr,maxIndex,arr.length - 1 - i);
    }
}