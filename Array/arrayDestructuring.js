// This is the default Method that we can Do In Every language

// const array1 = ['Ashok', 'Sauta'];
// let value2 = console.log("Value 1:" + array1[0]);
// let value3 = console.log("Value 2:" + array1[1]);


// let array1 = ['Ashok', 'Sauta', 'Kauro', 'Kaley'];
// let [value1, value2, value3, value4] = array1;
// console.log("Value 1:" + value1);//it will store the 0 index value='Ashok'
// console.log("Value 2:" + value2);//it will store the 1 index value='Sauta'
// console.log("Value 3:" + value3);//it will store the 2 index value='Kauro'
// console.log("Value 4:" + value4);//it will store the 3 index value='Kaley'

// console.log("... Method || Rest Method");

// let array2 = ['Grisma', 'Muney', 'Pagalni', 'Gafadi'];
// let [zero, ...rest] = array2;//in this ... Method the first element will store in zero and the rest of the element will store in rest
// console.log(zero);
// console.log(rest);


// let array3 = ['Grisma', 'Muney', 'Pagalni', 'Gafadi'];
// let [hello, , resT] = array3;//in this method there is , comma which will skip the one value of array3 and third value will store in resT 
// console.log(hello);
// console.log(resT);
let yourName = prompt("enter your name");
let yourAge = prompt("enter your age");
let yourGender = prompt("Enter your gender");
const details = ["Your Name is:", "Your Age is:", "Your Gender is:"];
let [namee, age, gender] = details;
console.log(namee + yourName);
console.log(age + yourAge);
console.log(gender + yourGender);
