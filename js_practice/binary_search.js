var arr=[2,5,7,3,8,9,10]
var element=100
var flag=0
let count=0
arr.sort((i,j)=>i-j)
let low=0,upp=arr.length-1;

while(low<=upp){
    let mid=Math.floor((low+upp)/2)

    //case 1
    if(element==arr[mid]){
        flag=1
        break
    }
    else if(element>arr[mid]){
        low=mid+1
    }
    else if(element<arr[mid]){
        upp=mid-1

    }
    count++
}
console.log(count);
console.log(flag==1?"f":"nf");

