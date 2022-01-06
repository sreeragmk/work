//map ---all
//filter----condition
//reduce   complare 2...n1,n2
//sort     compare 2...n1,n2
//find----only 1
//some   --yes/no
var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
    
]
var mob_names=mobiles.map(n1=>n1[1])
console.log(mob_names);
var id=mobiles.map(m1=>m1[0]+1)
console.log(id);