let name={
    firstName:"Sachin",
    lastName:"tendulkar"
}
let printFullName=function(age){
    console.log(this.firstName+" "+this.lastName+ " is "+age);
}

printFullName.call(name, 20);

let name2={
    firstName:"Virat",
    lastName:"Kohli"
}

printFullName.call(name2,30);

printFullName.apply(name2,[20]);
let printMyName=printFullName.bind(name2);
console.log(printMyName(20));
printMyName(20);

//  Currying 
let multiply =function(x,y){
    console.log(x*y);
}


let multiplyByTwo= multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree= multiply.bind(this, 3);
multiplyByThree(5);

// Another Moethod
let multiply=function(x){
    return function(y){
        console.log(x * y);
    }
}


let multiplyByTwo= multiply(2);
multiplyByTwo(5);

// this in global scope
this.table="window table";

console.log(window.table);

// this inside an object 
let johnsRoom={
    table:'johns table'
}
console.log(johnsRoom.table)

// this inside a method
let johnsRoom={
    table:'johns table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
}
johnsRoom.cleanTable();

// this insidde an inner function
this.table="window table";

const cleanTable=function(soap){
    
    const innerFunction=(_soap)=>{
        console.log(`cleaning ${this.table}`);
    }
    innerFunction(soap)
};
cleanTable("some soap");

// this inside a constructor
let createRoom=function(name){
    this.table=`${name}s room`
}
const cleanTable=function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
}
const jillsRoom =new createRoom('jill');
cleanTable.call(jillsRoom,'some soap');

// this inside a class
class createRoom{
    constructor(name){
        this.table=`${name}s table`
    }
    cleanTable(soap){
        console.log(`cleaning ${this.table} using ${soap}`);
    }
}
const jillsRoom=new createRoom('jill');
const johnRoom=new createRoom('john');
jillsRoom.cleanTable('some soap');
johnRoom.cleanTable('some soap');


class student  
  {  
    
    constructor(name,age,phonenumber,marks)  
    {  
      this.name=name;
      this.age=age;
      this.phonenumber=phonenumber;
      this.marks=marks;
    }
    checkElegiblity(){
        if(this.marks>40){
            console.log('eligible')
        }
        else{
            console.log('not elegible');
        }
    }
    printDetails(){
        console.log(`${this.name} of age ${this.age} has scored ${this.marks}`)
    }
  }
  const od=new student('od',21,'87846488',50);
  od.checkElegiblity();
  od.printDetails();
  const john=new student('john',22,'87846488',64);
  john.checkElegiblity();
  const jill=new student('jill',23,'87846488',32);
  jill.checkElegiblity();
  const sam=new student('sam',24,'87846488',77);
  sam.checkElegiblity();
  const tom=new student('tom',25,'87846488',10);
  tom.checkElegiblity();


class student  
  {  
    
    constructor(name,age,phonenumber,marks)  
    {  
      this.name=name;
      this.age=age;
      this.phonenumber=phonenumber;
      this.marks=marks;
    }
    checkElegiblity(){
        if(this.marks>40){
            console.log('eligible')
        }
        else{
            console.log('not elegible');
        }
    }
    let elegibleForPlacement=(compMarks)=>{
        if(this.marks>compMarks){
            console.log("Elegible for placement");
        }
        else{
            console.log("Not elegible for placement");
        }
    }
    printDetails(){
        console.log(`${this.name} of age ${this.age} has scored ${this.marks}`)
    }
  }
  const od=new student('od',21,'87846488',50);
  od.elegibleForPlacement(45);

  const john=new student('john',22,'87846488',64);

  const jill=new student('jill',23,'87846488',32);

  const sam=new student('sam',24,'87846488',77);
  
  const tom=new student('tom',25,'87846488',10);
