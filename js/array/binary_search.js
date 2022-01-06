var arr=[2,5,6,8,9,10,12]
var low=0,upp=arr.length-1;
flag=0;
let count =0;
var element=12;
while(low<=upp){
    let mid=Math.floor((low+upp)/2)
    if(element==arr[mid]){
        flag=1;
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
console.log(flag==0?"nf":"f");
console.log(count);