class Bank{
    constructor(employee_name,unique_id,branch_id){
        this.employee_name=employee_name;
        this.unique_id = unique_id;
        this.branch_id = branch_id;
    }
    getName(){
        return this.employee_name;
    };

    getId(){
        return this.unique_id
    }
}

let employee1 = new Bank("Md Nizam",16091973396,'icic_10034');

console.log(`Name of employee is ${employee1.employee_name} and its id is ${employee1.unique_id} and its branch id is ${employee1.branch_id}`)

console.log(employee1.getName());
console.log(employee1.getId());


// function overloading

function Person(age,name,number){
    this.name=name;
    this.age = age;
    this.number = number;
    this.func=()=>{
        console.log(this.name)
    }
}


function Person(age,name){
    this.name=name;
    this.age = age;
}

let User1 = new Person(21,'nizam','94915894319');
let User2 = new Person(12,"saber");

console.log(User1);
console.log(User2)
