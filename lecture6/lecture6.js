// var x = 15;
// {
//   let x = 5;
//    console.log(x);
//   const x=5;
//   console.log(x);
//   x=6;
//   console.log(x);
// }
// console.log(x);


var x = function(x,y){
 return x+y;
};
// const x=(x,y)=>{
//   x+y;
// };
const x=(x,y)=>x+y;
console.log(x,(5,6));


const q1=["Jan","Feb","Mar"];
const q2=["Apr","May","Jun"];
const q3=["July","Aug","Sept"];
const q4=["Oct","Nov","Dec"];

const year=[...q1,...q2,...q3,...q4];
console.log(year);


const myNumbers = [25, 12, 50, 77, -1);
let maxValue = Math.max(...myNumbers);
console.log(maxValue);


const myNumbers = [25, 12, 50, 77, -1];
let sum = 0;
for (let num of myNumbers){
  sum=sum+num;
}
console.log(sum);


const name = "CipherSchools";
let text = "";
for (let ch of name){
  text+=ch+" ";
}
console.log(text);

//Map
const fruits=new Map([
  ["apples",500],["bananas",300,["oranges",200]
  ]);
console.log(fruits);
console.log(fruits.get{"oranges"});

//Sets
const letters=new Set();
letters.add("a");
letters.add("b");
letters.add("a");
console.log(letters);


class Car{
  constructor(name,mfgYear){
    this.name=name;
    this.mfgYear=mfgYear;
}
}
const myCar1=new Car{"Mercedes",2022};
const myCar2=new Car{"Porsche",2020};
console.log(myCar1,myCar2);

//Promises
const myPromise=new Promise((resolve,reject)=>{
  setTimeout(() =>{
    console.log("Inside Promise");
    resolve();
  },2000);
});
};

myFunction()
.then(()=>{
  console.log("Resolved");
})
.catch(()=>{
  console.error("Rejected");
});



//Rest Operator
const addNumbers =(...args)=>{
	let sum =0;
	for(let arg of args){
		sum += arg;
	}
	return sum;
};
console.log(addNumbers(1,2,3,4,5,6));








































