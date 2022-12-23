// two ways to create objects
// object literal

let person = {
    name:"nizam",
    age:21,

    phone_number:{
        mobile:"654274",
        landline:"235"
    },
    calling_method:function (){
        return `th name of the person is ${person.name}`
    }
}

console.log(person.calling_method());


// object constructur
function Person(age,name){
    this.name=name;
    this.age = age;
    this.func=()=>{
        console.log(this.name)
    }
}

let obj1 = new Person(21,"nizam");
obj1.func();


// classes

class User{
    constructor(name,id,city){
        this.name =name;
        this.id = id;
        this.city = city;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }
}

let User1 = new User("nizam",096,"hyderabad");
let User2 = new User("saber",097,"bengluru");

console.log(User1.name);
console.log(User2.getId())
