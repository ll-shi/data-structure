var arr = [5,3,6,9,0,-1,4];
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
function sort(arr){
    for(var i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length - 1 - i; j++){
            if(compare(arr[j], arr[j+1])){
                exchange(arr, j, j + 1)
            }
        }
    }
}
sort(arr);
console.log(arr);