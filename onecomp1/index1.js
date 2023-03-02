
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


// Question 5
// Take a integer as input and return the number of zeroes in the input.
// Constraints:
// 0 < N <= 1000000

// let a= 1230034003005;

// let arr=a.toString();
// let count =0;
// //using loop
// for(let i=0; i<=arr.length; i++){
//     if(arr[i] == 0){
//         count += 1
// ;
//     }
// }
// console.log(count);

//Using for loop
// let counts=0;
// for(let val of arr){
//     if(val == 0){
//         counts += 1
//     }
// }
//for in Loop
// for(let val in arr){
//     if(arr[val] == 0){
//         counts += 1
//     }
// }
// console.log(counts);

//Using fuction or While Loop counting zeros
// const checkZero =(num)=>{
// let count =0;
// let digit ;
// console.log('counting digit ' +digit);
// while(num){
//      digit = num % 10;
// if(digit == 0){
//     // checkZero(num);
//     count +=1;
// }
// num = Math.floor( num /10);
// }
// console.log('zero count '+ count);
// }
// checkZero(20063400567300232);

// const primeNumber = (num)=>{
//     let count =0;
//     let arr=[];
//     let newnumber= num -1;
//     if(newnumber >0){
//         primeNumber(newnumber);             
//     }
//     console.log(newnumber, num);
// }
//  primeNumber(10);

// function primeNum(minnum, maxnum)
// {
//     var store  = [], i, j, primes = [];
//     for (i = 2; i <= Math.min(minnum, maxnum); ++i) 
//     {
//         if (!store [i]) 
//           {
//             primes.push(i);
//             for (j = i << 1; j <= Math.min(minnum, maxnum); j += i) 
//             {
//                 store[j] = true;
//             }
//         }
//     }
//     console.log(primes);
//     // return primes;
// }
// primeNum(100, 200)


// Question 7
// Take an integer and print 'YES' if the input integer is an armstrong number, otherwise print 'NO'.

// var n =153;
// let key =153;
// let digit;
// let sum=0;
// while(n){
//     digit = n % 10;
//     sum += digit * digit * digit;
//     n=Math.floor(n/10);
// }

// if(key == sum){
//     console.log(`number is an armastrong number${n}`);
// }else{
//     console.log('Not armstrong number');
// }
//console.log(sum);

//Using for loop
// let num = 153;
// let sum=0;
// let arr=num.toString().split('');
// for(let val of arr){
//   sum += val * val * val;
// }
// console.log(sum);

// const NumberTake = (num)=>{
//     let newNum=num -1;
//     let arr=[];
//     let arr1 =[];
//     let arr2 = [];
//     if(newNum >0){
//         NumberTake(newNum);
//     }
//     if(num % 3==0){
//         arr.push(num);
//     }else if(num % 5 == 0){
//         arr1.push(num);
//     }else if(num % 15 == 0){
//         arr2.push(num);
//     }
//     console.log(`World ${arr}`);
//     console.log(`Hello ${arr1}`);
//     console.log(`HelloWorld ${arr2}`);
// }
// NumberTake(100)

// let num = 199;
// let arr=num.toString().split('');
// let sum1 =0;
// let sum2= 0;
// for(let val of arr){
//     sum1 += parseInt(val);
// }
// console.log(sum1);


// let a=1999,sum=0,temp=0,z=a
  
// while(a>0 )
// {
//   let last=a%10 //9
//   a=parseInt(a/10)
//   let first=a % 10
//   // console.log(first)
//   sum=first+last
//   a=parseInt(a/10)
//   if(sum>=10)
//   {
//     last=sum%10
//     sum=parseInt(sum/10)
//     first=sum%10
//     sum=first+last
    
//       if(sum<=9){
//           sum=sum+a
//               if(sum>=10)
//               {
//                 let b=sum
//                 last=b%10
//                 b=parseInt(b/10)
//                 first=b%10
//                 sum=first+last
//                 break
//     }
//   }
//   }
//   else if(sum>=2){
//     sum=sum+a
//     if(sum>=10)
//     {
//       let b=sum
//       last=b%10
//       b=parseInt(b/10)
//       first=b%10
//       sum=first+last
//     }
//   }
// }
// if(sum==1)
// {
//   console.log(z,sum,"mars number")
// }
// else{
//   console.log(z,sum,"not a mars number")
// }


//Mars Number 

// let num = 5999; let sum=0; let digit; let sum1=0;  let num1 = num;

// while(num){
//   let first_digit= num % 10;
//    num =parseInt(num / 10);
//    let last_digit= num % 10;
//    sum = first_digit + last_digit;
//   num =Math.floor(num/10);
//   if(sum >= 10){

//     first_digit = sum % 10;
//     sum = parseInt(sum / 10);
//     last_digit = sum % 10;
//     sum = first_digit + last_digit;
//   }
//         if(sum<=9){
//           sum=sum+num
//               if(sum>=10)
//               {
//                 let b=sum
//                 last_digit=b%10
//                 b=parseInt(b/10)
//                 first_digit=b%10
//                 sum=first_digit+last_digit;
//                 break
//     }
//   } else if(sum>=2){
//      sum=sum+a
//      if(sum>=10)
//      {
//        let b=sum
//        last_digit=b%10
//        b=parseInt(b/10)
//        first_digit=b%10
//        sum=first_digit+last_digit
//      }
//    }
// }


// if(sum==1)
// {
//   console.log(num1,sum,"mars number")
// }
// else{
//   console.log(num1,sum,"not a mars number")
// }

// Questions 
// Print the pattern given below, using loops.

//method 1;

// for(let i =0; i<= 5; i++){
//   console.log('******');
// }


// Question 2
// Print the pattern given below, using loops.
// Input:
// No input is required.
// Output:
// *
// **
// ***
// ****
// ***** 

// let row ='*';
// let n=5;
// for(let i=0; i<=n; i++){
//     row= '';
//     for(let j=0; j<=i; j++){
//         row='*' + row;
//         // console.log(row);
//     }
//     console.log(row);
// }


// Question 3
// Print the pattern given below, using loops.
// Input:
// No input is required.
// Output:
// 1
// 12
// 123
// 1234
// 12345

// let row='';
// let n =5;
// for(let i=0; i<=n; i++){
//     row='';
//     for(let j=1; j<=i; j++){
//         row =row + j;
//     }
//     console.log(row);
// }


// Question 4
// Print the pattern given below, using loops.
// Input:
// No input is required.
// Output:
// 1
// 22
// 333
// 4444
// 55555

// let row ='';let n=9;
// for(let i=1; i<=n; i++){
//     row='';
//     for(let j=1; j<=i; j++){
//             row=row + i;
//     }
//     console.log(row);
// }

// Question 5
// Print the pattern given below, using loops.
// Input:
// No input is required.
// Output:
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// let n=5;
// let count=0;
// let row='';
// for(let i=1; i<=5; i++){
//     row='';
//     for(let j=1; j<=i; j++){
//         count = count + 1;
//             row =  row + count + ' ';
//     }
//     console.log(row);
// }

// Question 6
// Print the pattern given below, using loops.
// Input:
// No input is required.
// Output:
// 1
// 01
// 101
// 0101
// 10101
// 010101

// let row = '';
// let n = 5; let x=0;
// let y =0;

// for(let i=1; i<=n; i++){
//     row='';
//     if(i % 2 ==0){
//         x =1;
//         y =0;
//     }else{
//         x = 0;
//         y = 1;
//     }
//     for(let j=1; j<=i; j++){
//         if(j % 2 == 0)
//         {
//             // return x;
//          row = row + x;
//         }
//         else
//         {
//             // return y;
//             row = row + y;
//         }
        
//     }
//     console.log(row);
// }


// Question 8
// Print the pattern given below, using loops.
// Input:
// No input is required.
// Output:
// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

//  let n = 5;

//  let count =5;
//  let messege = "";

//  for(let i = 1; i<= n; i++){
//      for(let j=1; j<=i; j++){
       
//         if(j==1){
//           count = 5;
//            messege += count; 
//            count --;
//         }else{
//             messege += count ;
//             count --;
//         }
//      }
//     messege += '\n';
//  }
//  console.log(messege);

// Question 7
// Print the pattern given below, using loops.
// Input:
// No input is required.
// Output:
// 1
// 23
// 123
// 1231
// 23123

// let n = 5;
// let count = 1;

// let messege = '';
// for(let i=1; i<=n; i++){
//     messege='';
//     for(let j=1; j<=i; j++){
//         // messege = '';
//          messege = messege + j;
//         if(i > 3){
//             messege = messege + j;
//             count ++;
//         }else if(i==1){
//            messege = messege + 1;
//         }else{
//             messege =messege + j;
//             count++;
//         }
//     }
//     console.log(messege);
// }

// Question 10
// Print the pattern given below, using loops.
// Input:
// No input is required.
// Output:
//     1
//    12
//   123
//  1234
// 12345

// let n = 5; 
// let mess= '';
// let mess1 = ' ';

// for(let i=1; i<= n; i++){
//    mess='';
//    for(let k=n; k>=i; k--){
//       mess +=mess1;
//    }
//    for(let j =1; j<=i; j++){
//      mess += j;
//    }



//    console.log(mess);
// }

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// let n=5;
// let mess='';
// let count=1
// let mess1='*';

// for(let i=1; i<=n; i++){
//    mess ='';
//    for(let j=1; j<=i; j++){
//       mess += '*';
//    }
//    for(let k=n; k>=i; k--){
//       mess += ' ';
//    }
//    console.log(mess);
// }
// for(let i=1; i<=n-1; i++){
//    mess ='';
//    for(let k=n-1; k>=i; k--){
//       mess += '*';
//    }
//    for(let j=1; j<=i; j++){
//       mess += ' ';
//    }
//    console.log(mess);
// }

// let n=5;
// let mess=" ";

// for(let i=1; i<=n; i++){
//    mess ='';
//    for(let j=1; j<=i; j++){
//       mess += '*';
//    }
//    for(let k=n; k>=i; k--){
//       mess += ' ';
//    }
//    console.log(mess);
// }

// for(let i=1; i<=n; i++){
//    mess='';
//    for(let j=i; j<=n; j++){
//     mess += '*';
//    }
//  console.log(mess);
// }

// let n=5;
// let mess='';

// let count =1;

// for(let i=n; i>=1; i--){
//    mess='';
//    for(let j=i; j>=1; j--){
//       mess += j;
//    }
//    console.log(mess);
// }

// let m=5;
// let mess1='';

// let count1 =1;

// for(let i=1; i<=m; i++){
//    mess='';
//    for(let j=m; j>=i; j--){
//       mess += j;
//    }
//    console.log(mess);
// }


// let a=5;
// let mess2='';

// let count2 =5;

// for(let i=1; i<=a; i++){
//    mess='';
//    for(let j=1; j<=i; j++){
//       mess += count2;
//       count2 --;
//    }
//    console.log(mess);
// }

//Diamond and Equilateral triangle;

// let n = 5;
// let mess='';
// let count =1;
// for(let i=1; i<=n; i++){
//    // mess= "";
//    for(let j=1; j<= n-i; j++){
//       mess += ' ';
//    }
//    for (let k=1; k<=2*i-1; k++){
//       mess += '*';
//    }
//   mess +='\n';
// }

// // console.log(mess);

// // let n = 5;
// // let mess='';
// // let count =1;
// for(let i=n; i>=1; i--){
//    // mess= "";
//    for(let j=n-i; j>=1; j--){
//       mess += ' ';
//    }
//    for (let k=2*i-1; k>=1; k--){
//       mess += '*';
//    }
//   mess +='\n';
// }

// console.log(mess);

//Pattern of ven numbers

// let n=5;
// let mess="";

// let count = 2;
// for(let i=1; i<=n; i++){
//    mess =" ";
//    for(let j=n; j>=i; j--){
//       mess += " ";
//    }

//    for(let k=1; k<=i; k++){
//       mess += k * 2;
//       count += 2;
//    }
//    console.log(mess);
// }

//Rectangle parameters Pattern Prints

// let n =5;
// let mess = '';
// let count =1; 
// for (let i=1; i<=n; i++){
//    mess =" ";
//    for(let j=1; j<=n; j++){
//       if(i == 1 || j==1  || i ==n || j ==n){
//          mess += "*";
//       }else{
//          mess += " ";
//       }
     
//    }
//    console.log(mess);
// }

//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

// let n=5; 
// let mess = "";
// let count =1;

// for(let i=1; i<=n; i++){
//    for(let j=1; j<=n-i; j++){
//        mess +=" ";
//    }
//    for(let k=1; k<= 2*i-1; k++){
//       mess += '*';
//    }
//    mess += '\n';
// }

// for(let i=n; i>=1; i--){
//    for(let j=n-i; j>=1; j--){
//        mess +=" ";
//    }

//    for(let k=2*i-1; k>= 1; k--){
//       mess += '*';
//    }
//    mess += '\n';
// }
// console.log(mess);


//Reverse Array 

// const reverseArray =(a)=>{

//    console.log(a.reverse());
// }

//  reverseArray([3, 4, 5, 6]);


const reverseArray =(arr) =>{
   
   let temp;
   let lindex=0;
   let rindex = arr.length -1;

   while(lindex < rindex){
      temp = arr[lindex];
      arr[lindex] = arr[rindex];
      arr[rindex] =temp;
      
      lindex ++;
      rindex --;
   }
   console.log(arr);
}
reverseArray([2, 3, 4, 5, 6, 7])