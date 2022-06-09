class Person {
  static gender = 'male';
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  introduction() {
    console.log(`my full name is : ${this.fname} ${this.lname}`);
  }
  get fullName() {
    //this is return as a property,not a method
    console.log(`my get FullNmae output : ${this.fname} ${this.lname}`);
  }
}

class Employee extends Person {
  #salary; //encapsulation,private properties
  constructor(fname, lname, title, salary) {
    super(fname, lname);
    this.title = title;
    this.#salary = salary; //encapsulation
  }

  introduction() {
    console.log(
      `my full details : ${this.fname} ${this.lname} ${this.title} ${this.salary}`
    );
  }
  showSalary() {
    console.log('my real salary is :', this.#salary);
  }
  #showTitle() {
    //private method
    console.log('my tittle is :', this.title);
  }
  showTitle1() {
    this.#showTitle();
  }
  static showGender(){
      console.log(`my gender is :${Employee.gender}`);
  }
}

const tom = new Person('tom', 'hanks');
const sajeewa = new Employee('sajeewa', 'garusinghe', 'engineer', 100000);
console.log(tom.fname);
sajeewa.introduction();
sajeewa.salary = 12;
console.log('my fake saary is :', sajeewa.salary); //this will print externally assigned value.not real one
sajeewa.showSalary;
sajeewa.showTitle1();
sajeewa.fullName; //get mthod store values as properties
console.log(Employee.gender);
Employee.showGender();
