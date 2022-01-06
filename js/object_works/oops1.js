class Person{

    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender
    }
    printPerson(){
        console.log(this.name,this.age,this.gender);
    }
}




var obj=new Person("ram",30,"male")
obj.printPerson()

var obj1=new Person("akhi",38,"male")
obj1.printPerson()
