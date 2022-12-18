console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promisewifeBringingTicks= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('ticket ');
    }, 3000);
});
promisewifeBringingTicks.then((t)=>{
    console.log(`person3: shows ${t}`)
});
console.log('person4: shows ticket');
console.log('person5: shows ticket');


console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promisewifeBringingTicks= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('ticket ');
    }, 3000);
});

const getPopcorn= promisewifeBringingTicks.then((t)=>{
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
});
const getButter= promisewifeBringingTicks.then((t)=>{
    console.log('husband: we should go in');
    console.log('wife: no i need butter');
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
});


getButter.then((t)=>console.log(t));
console.log('person4: shows ticket');
console.log('person5: shows ticket');


console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promisewifeBringingTicks= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('ticket ');
    }, 3000);
});

const getPopcorn= promisewifeBringingTicks.then((t)=>{
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
});
const getButter= promisewifeBringingTicks.then((t)=>{
    console.log('husband: we should go in');
    console.log('wife: no i need butter');
    return new Promise((resolve,reject)=>resolve(`${t} butter`));
});
const getColdDrinks= promisewifeBringingTicks.then((t)=>{
    console.log('husband: we should go in');
    console.log('wife: no i need coldDrink');
    return new Promise((resolve,reject)=>resolve(`${t} coldDrinks`));
});

getColdDrinks.then((t)=>console.log(t));
console.log('person4: shows ticket');
console.log('person5: shows ticket');
