
// Question 1
// Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.
// Constraints:
// 1 <= a,b <= 1000

// let input =[];
// let a =parseInt(input[0]);
// // let b =parseInt(input[1]);
// let a =parseInt(30);
// let b =parseInt(20);
// // let sum, sub, multi, divide, module;
// if(a>=1 && a<=1000 && b>=1 && b<=1000){
//     let sum=a+b;
//     let sub=a-b;
//     let multi=a*b;
//     let divide=a/b;
//     let module=a%b;
//     console.log(sum, sub, multi,divide, module);
// }


// Question 2
// Take two numbers and only print the integer part when a is divided by b

// Constraints:
// 0 <= a <= 1000
// 0 < b <= 1000


// let input =[];
// let a=parseInt(input[0]);
// let b=parseInt(input[1]);
// let a=50;
// let b=20;
// let divide=0;

// divide = Math.floor(a/b);
// console.log(divide);


// Question 3
// Take two numbers a,b and print the exponential power of the first number raised by the second

// Constraints:
// 0 < a, b <= 1000

// let a=8;
// let b=3;
// let pow=1;
//simple Method
// console.log(a**b);
//js method
// pow=Math.floor(Math.pow(a, b));
// console.log(pow);

//looping method
// for(let i=1; i<=b; i++){
//   pow *=a;
// }
// console.log(pow);

//Recursion Method

// function Pow(a, b){
//     let pow=a;
// if(b == 0) {
//     return 1;
// }
//     pow =pow  *  Pow(a, b-1);
//     // console.log(pow);
//     return pow;   
// }
// console.log(Pow(8,3));
//console.log(Pow(8, 3));


// Question 4
// Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b;
// Constraints:
// 0 <= a <= 1000
// 0 < b <= 1000

// let a=70;
// let b=40;

// let divide =0;

// divide=a/b;
// //split method
// let arr=divide.toString().split('.');

// console.log(arr[1])

// let a= 120; //cost price
// let b= 200; //selling price

// let profit=0;
// profit = (b-a);
// let proft_per = (profit * 100)/a
// console.log(proft_per.toFixed(4));



// Question 7
// Take a number and print out the last digit of the number
// Constraints:
// 0 < number <= 1000000

// let a = 13456789;
// let arr =a.toString().split('');
//  let m=arr.length;
// console.log(arr[m-1]);

// let a = 13456789.78;
// //using split method
// let arr =a.toString().split('');
//  let m=arr.length;
//  console.log(arr[m-1]);
//  //Using Slice Methods
//  let last_digit =a.toString().slice(-1);
//  console.log(last_digit);
 
//  //division methods
//  let modulo = a % 10;
//  console.log(modulo);


// Question 9
// Take a 2 digit number and print the reverse of that number
// Constraints:
// 9 < number < 100

// let a = 467;
//reverse method
// let arr1= a.toString().split('');
// let rev = arr1.reverse().join('');
// console.log(rev);
//loop method
// let arr2=[];
// let dig =[];
// let digit = a.toString();
// for(let val of digit){
//      arr2.push(val);
// }
// console.log(arr2);
// for(let i=arr2.length; i>0; i--){
//    dig =arr2.pop(arr2[i]);
//    console.log(dig);
// }
//console.log(dig);



// Question 12
// Enter 2 numbers a,b - exchange their values without using third variable and print them
// Constraints:
// 0 < a,b < 1000

// let a = 30;
// let b = 40;
// a=a+b;
// b=a-b;
// a=a-b;

// console.log(a, b);


// Question 13
// Write a program to take two integers as input and print the HCF and LCM of the two numbers.
// Constraints:
// 0 <= a,b <= 100

// let a = 105;
// let b = 49;
// let lcm ;
// let hcf;

// for(let i =1; i<= a && i <= b; i++){
//     if(a % i == 0 && b % i == 0){
//         hcf = i;
//     }
// }
// lcm = (a*b)/hcf;

// console.log(hcf, lcm);

//While Loop 

// let x=35;
// let y=49;

// while(x != y){
//     if(x > y){
//         x -= y;
//     }else{
//         y -= x;
//     }
// }
// console.log(x, y);

// Question 2
// Take a number as input and return the sum of all of its digits.
// Constraints:
// 0 <= num <= 100000

// let a= 3233;

// //using string looping methods

// let arr = a.toString().split('');
// let sum=0;
// //using loop
// for(let val of arr){
//     sum +=parseInt(val);
// }
// console.log(sum);
// let sum1=0;
// //using Map methods;
// arr.map((value)=>{
//     sum1 +=parseInt(value);
// })
// console.log(sum1);

//using recursion

// function sumOfdigit(num){
// var digit;
// var sum = 0;
//  while(num){
   
//     digit = num % 10;
//     num =Math.floor(num /10);
//     sum +=digit;
  
//     // console.log('sum of digits1', sum);
//  }
//  console.log('sum of digits2', sum);
// }
// sumOfdigit(2343);

// Question 3
// Take a number and return all the even digits of the number.
// Constraints:
// 0 <= number <= 10000

// const EvenDigits=(num)=>{
//     let digit;
//     let evenNum=[];
//     while(num){
//         digit =num % 10;
//      if(digit %2 ==0){
//         evenNum.push(digit);
//      }
//      num=Math.floor(num/10);
//     }
//     console.log(evenNum);
// }
// EvenDigits(432345);

// Question 4
// Take an integer an return 'YES' if the input is a palindrome, or 'NO' if it is not.

//Using split and reverse methods

// let a=12334543321;

// let arr=a.toString().split('')
// let m = Math.floor(arr.length / 2);
// //  let rev=arr.reverse().join('');
// //  if(a == rev){
// //     console.log('Palindrome'+ " Yes");
// //  }else{
// //     console.log("Not");
// //  }

// //Palindrome Using Loops
// let arr1=[];
// let arr2=[];
// for(let i=0 ; i<=m; i++){
//     arr1.push(arr[i]);
// }
// for(let j=arr.length-1; j>=m; j--){
//     arr2.push(arr[j])
// }
// console.log(arr1, arr2);
// if(arr1.join('') == arr2.join('')){
//     console.log("Yes");
// }