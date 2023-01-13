// Revison oops
class student{
    constructor(eng,math,sceince,social,hindi,telugu){
        this.eng = eng;
        this.math = math;
        this.sceince = sceince;
        this.social = social;
        this.hindi = hindi;
        this.telugu = telugu
    }
    getmarks() {
        return (this.eng +this.math+this.sceince+this.sceince+this.hindi+this.telugu)/6;
    }
}
const student1 = new student(10,20,10,20,10,10);
console.log(student1.getmarks())
