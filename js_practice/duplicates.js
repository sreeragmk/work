var arr1=[10,23,12,14,20]
var arr2=[10,20,12,14,23]
arr1.sort((i,j)=>i-j)
arr2.sort((i,j)=>i-j)
var low=0,upp=0;
var count=0
while((low<arr1.length) && (upp<arr2.length)){
    //case1
    if(arr1[low]==arr2[upp]){
        console.log(`common elements are ${arr1[low]}`);
       low++;
       upp++;
    }
    else if(arr1[low]>arr2[upp]){
        upp++;
    }
    else if(arr1[low]<arr2[upp]){
        low++;
    }
    count++;
}
console.log(count);
