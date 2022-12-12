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
