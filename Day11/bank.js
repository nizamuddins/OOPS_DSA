class bankEmpys{
    constructor(empName,empId,branch,yrOfjoin){
        this.empName = empName;
        this.empId = empId;
        this.branch = branch;
        this.yrOfjoin = yrOfjoin;
    }
    empDetails(){
        console.log(`Name of employee ${this.empName}\nemployee id is ${this.empId}\nBranch of employee is ${this.branch}\njoining of empolyee is ${this.yrOfjoin}`)
    }
}
const employee1 = new bankEmpys("Nizam",12345,"Mehdipatnam",2001);
console.log(employee1.empDetails());
