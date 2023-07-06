// try{
//     throw new AggregateError([new Error ("some error")], "Hello");
// }catch(e){
//         console.log(e instanceof AggregateError);
//         console.log(e.message);
//         console.log(e.name);
//         console.log(e.errors);
// }

// try{
//     throw new AggregateError(
//         //An iterate of errors
//         new Set([new Error("some error"), new Error("another error")]), "Multiple errors thrown",
//     );
// } catch (err) {
//     console.log(err.errors);
// }

// const sum = new Function('a', 'b', 'return a + b');
// console.log(sum(2, 6));

// const sumOfArray = new Function(
//     "const sumArray =(arr) => arr.reduce((previousValue, currentValue) =>previousValue + currentValue); return sumArray",
// )();
// console.log(sumOfArray([1, 2, 3, 4]));

// const sumOfArray = new Function(
//     "const sumArray = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue); return sumArray",
//   )();
  
//   // call the function
//  console.log( sumOfArray([1, 2, 3, 4]));

// Find Largest Number

// const findLargestNumber = new Function(
//     "function findLargestNumber(arr) {return Math.max(...arr)}; return findLargestNumber");

// console.log(findLargestNumber.call({}).call({}, [2, 4, 1, 8, 5]));

// const sayHello = new Function(
//     "return function(name){return `Hello, ${name}`}"
// )();

// console.log(sayHello("world"));


/**  Object.getOwnPropertyDescriptor */

// let user = {
//     name : "Jhon"
// };

// let descriptor =Object.getOwnPropertyDescriptor(user, 'name');

// console.log(JSON.stringify(descriptor, null, 2));

/**
 * property descriptor
 * {
 *    "value": "Jhon",
 *    "writable": "true",
 *    "enumerable" : true,
 *    "configurable": true,
 * }
 */

/**
 * Non-writable
 */

// let user = {
//     name: "Jhon"
// };

// Object.defineProperty(user, "name", {
//     writable:false
// })
// user.name = "Pete"; 

// console.log(user);


/**  ** */


let user = { };

Object.defineProperty(user, "name", {
    value:"Jhon"
})