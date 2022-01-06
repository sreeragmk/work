class Person{
    bike(){
        console.log("passion pro");
    }
}

class child extends Person{
    bike(){
        super.bike()
        console.log("royal enfield");
    }
}
var ch=new child()
ch.bike()