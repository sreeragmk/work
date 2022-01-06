// var student={
//     name:"ahaan",
//     age:25,
//     course:"ms",
//     markInMaths:30
// }
// console.log(student.course);
// console.log("genter" in student);
// student.gender ="male"
// console.log(student);
// student["total"]=150
// console.log(student);
// if(student.total>145){
//     student.grade="Aplus"
// }
// else{
//     student.grade="A"
// }
// console.log(student);

// student.weight=30
// console.log(student);
// console.log("height" in student);
// if(student.weight==30){
//     student.height="60cm"
// }
// else{
//     student.height="50cm"
// }
// console.log(student);

// if("markInMaths" in student){
//     student.markInMaths+=30
// }
// else{
//     student.markInMaths=300
// }
// console.log(student);


// var text="hello hai hello hai"
// var wc={}
// text.split(" ").map(wrd=>wrd in wc?wc[wrd]+=1:wc[wrd]=1)
// console.log(wc);
// var words=text.split(" ")
// console.log(words);
// for(let word of words){
//     if(word in wc){
//         wc[word]+=1
//     }
//     else{
//         wc[word]=1
//     }
// }
// console.log(wc);

// var tap="eee www eee rrr ttt rrr uuu iii ppp iii ttt www qqq eee www ttt iii ppp"
// var wc={}
// var words=tap.split(" ")
// console.log(words);
// for(let word of words){
//     if(word in wc){
//         wc[word]+=1
//     }
//     else{
//         wc[word]=1
//     }
// }
// console.log(wc);
// tap.split(" ").map(wrd=>wrd in wc?wc[wrd]+=1:wc[wrd]=1)
// console.log(wc);

// var text="ABABBC"
// var wc={}
// for(let char of text){
//     if(char in wc){
//         console.log("recursive cheractor is",char);
//         break;
//     }
//     else{
//         wc[char]=1
//     }
// }
// console.log(wc);
// var op=[]
// text.split("").map(wd=>wd in wc?op.push(wd):wc[wd]=1)
// console.log(op[0]);
// console.log(op);
// console.log(wc);
var dataset=[
    
    {district:"palakkad",temparature:30},
    {district:"tvm",temparature:31},
    {district:"palakkad",temparature:31},
    {district:"tvm",temparature:29},
    {district:"ekm",temparature:28},
    {district:"ekm",temparature:31},


]
//palakkad:31
var weather_data={}
for(let data of dataset){
    let distName=data.district
    let curTemp=data.temparature
    if(distName in weather_data){
        let oldTemp=weather_data[distName]
        if(curTemp>oldTemp){
            weather_data[distName]=curTemp
        }
    }
    else{
        weather_data[distName]=curTemp   //p:30,t:31
    }
}
console.log(weather_data);