
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

// const reverseArray =(arr) =>{ 
//    let temp;
//    let lindex=0;
//    let rindex = arr.length -1;
//    while(lindex < rindex){
//       temp = arr[lindex];
//       arr[lindex] = arr[rindex];
//       arr[rindex] =temp;    
//       lindex ++;
//       rindex --;
//    }
//    console.log(arr);
// }
// reverseArray([2, 3, 4, 5, 6, 7])

/**
 * count objects; 
 * 
 * where Object X == Object Y;
 * 
 * Two objects;
 * 
 */
 

// let object1 = [1, 2, 3, 4, 5, 6, 7];
// let object2 = [1, 3, 4, 4, 5, 7, 8];
// let count = 0;
// for(let i=0; i<=object1.length - 1; i++){
//   for(let j=i; j<=object2.length -1; j++){
//     if(object1[i] == object2[j]){
//       count ++ ;
//     }
//   }
// }
// console.log(count);



/** 
 * PolyGon Perrimeter Calculation
 * 
 * 1. Take dimentions of polygon.
 *    a. Create a class constuctors to take polygon dimentions
 * 2. Calculate Perimeter of poilygon.
 *     a. Take class or function to calculate perimeter
 * 
 */ 


// let pDimention = new Object();

// pDimention.width=parseInt(12);
// pDimention.height =parseInt(13);
// pDimention.length =parseInt(14);

//  pDimention.perimeter = pDimention.width + pDimention.length + pDimention.height;
//  console.log(pDimention.perimeter);
//  console.log(pDimention);

//  const objects = {
//   width:parseInt(15), 
//   length:parseInt(16),
//   height:parseInt(17),
//     perimeterss: function(){
//       return this.width + this.length + this.height;
//     }
//   }
 
//   console.log(objects.perimeterss());
 


/**
 *An array 
 1. Multiply by 2 if even numbers 
 2. multiply by 3 if odd numbers 
 */

//  const Arrayfunction =(arr) =>{
//   let newArr=[];
//   let arr2 =[];
//   // newArr = Arrayfunction (arr-1);
//   for(let i=0; i<= arr.length -1 ; i++){
//    if(arr[i] % 2 == 0){
//      arr2.push(arr[i] * 2)
//    }else{
//     arr2.push(arr[i] * 3)
//    }
//   }
//   console.log(arr2);
//  } 
//  Arrayfunction([1, 2, 3, 4, 5, 6, 7]);

/**
 * Sorting Algorithm
 * 1. looping each elements - loop
 * 2. comparison two contiguios element 
 */

//Bubble sort  -> Time Complexity - worst case {O(n^2)} in reverse ordering 
//Best Time complexity in increasing order arrangements - {O(n)}. 

// let array = [6,8,1, 2, 5, 7, 9, 8];
// let n = array.length;
// let temp;
// for(let i=0; i<=n ; i++){

//   for(let j=0; j<=n-i-1; j++){
//     if(array[j] > array[j+1]){
//       temp = array[j];
//       array[j] = array[j+1];
//       array[j+ 1] = temp;
//     }
//     // console.log(temp);
//   }

// }
//  console.log(array);  


/**
 * Vowels And Consonants
 * 
 */

// let arrStr =  ['a', 'b', 'c', 'd', 'e', 'i', 'p', 'u', 'w'];

// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let arr =[];
// let count =0;
// for(let i=0; i<=arrStr.length-1; i++){
//     for(let j=0; j<=vowels.length - 1; j++){
//         if(arrStr[i] == vowels[j]){
//              arr +=arrStr[i] +'is Vowels' + '\n';
//              count++;
//              console.log(count);
//         }

//     }
// }
// console.log(`${arr}`, count);

// let vowels = ['a','e', 'i', 'o', 'u'];

// let arrStr = ['q', 'w','e', 'r', 't','y', 'u'];
// let str = [];
// for(let i=0; i<=arrStr.length - 1; i++){
//     if(vowels.includes(arrStr[i])){
//         // str=  arrStr.indexOf('a');
//       str += arrStr[i] + ' '+ 'is vowel' + '\n' + '\n';
//     }else{
//         str += arrStr[i] +' ' + 'is Consonants' + '\n' + '\n';
//     }
// }
// console.log(str);


/** Selection Sorting 
 * Time complexity -> {O(n^2)}
 * Space Complexity => {O(1)};
 * 
 */

// const sortedArr =(arr, p, q) => {
//     var temp = arr[p];
//       arr[p] = arr[q];
//       arr[q] = temp;
//     //   console.log(temp);
// }
// const SelectionSort=(arr, n) =>{     
//     var min_idx;
//     for(var i=0; i<=n-1; i++){
//     //    console.log(min_idx + ' before assign');
//         min_idx = i;
//         // console.log(min_idx + 'after assign');
//         for(var j= i+ 1; j<=n; j++){
//             if(arr[j] < arr[min_idx]){
//                 min_idx = j;
//             }
//         }
//         sortedArr(arr, min_idx, i);
//     }
// }
// function printArray(arr, size){
//     for(let i=0; i< size; i++){
//         console.log(arr[i] + ' ' );
//     }
// }
// var arr = [64, 25, 12, 22, 11];
// var n= 5;
// SelectionSort(arr, n)
// console.log('sorted Array');
// printArray(arr, n);


/** Insertion Sorting Algorithm
 * 
 * 1. Select two Contiguous   element of an array and compare;
 * 2. swap if required
 */


// const insertionSort = (arr, n) =>{
//     let i, key, j;
//     for(i=1; i< n; i++){
//         key=arr[i];
//         j=i - 1;

//         /** Move elements of arr[0....i-1], that  are greater than key, to one position ahead of their current position*/
//         while(j>= 0 && arr[j] > key){
//             arr[j + 1] = arr[j];
//             j=j - 1;
//         }
//         arr[j + 1] = key;
//     }
// }



// const printSortedArray=(arr, n) =>{

//     let i;
//     for(i=0; i<n; i++)
//     {
//         console.log(arr[i]);
//     }
// }

// let arr = [3, 67, 98, 9, 43, 1, 89];
// let n = arr.length;
// insertionSort(arr, n)
// printSortedArray(arr, n);

// const mergeSort =(arr, l, m, r) => {
//     var n1= m - l + 1;
//     var n2 = r - m;

//     //create Temp Arrays

//     var L = new Array(n1);
//     var R = new Array(n2);

//     //Copy data into left and right array;
//     for(var i = 0; i < n1; i++){
//         L[i] = arr[l + i];
//         for(var j=0; j < n2; j++){
//             R[j] = arr[m + 1 + j];
//         }
//     }

//     //Merge Temp Array Back into arr[1...r];

//     //Initial index of first subarray

//     var i = 0;
//     //Initial index of second subarray
//     var j = 0;
    
//     //Initial index of merged subarray
//     var k = l;

//     while(i < n1 && j < n2){
//         if(L[i] <= R[j]){
//             arr[k] = L[i];
//             i++;
//         }else{
//             arr[k] = R[j];
//             j++;
//         }
//         k++;
//     }

//     //Copy the remaining elements of 
//     //L[], if there are any

//     while(i<n1){
//         arr[k] = L[i];
//         i++;
//         k++;
//     }

//     //Copy the remaining elements of 
//     //R[], if there are any

//     while(j< n2) {
//         arr[k] = R[j];
//         j++;
//         k++;
//     }
// }

// function mergeSorting(arr, l, r){
//     if(l>=r){
//         return;
//     }
//     var m =l+ parseInt((r-l)/2);
//     mergeSorting(arr, l, m);
//     mergeSorting(arr, m + 1, r);
//     mergeSort(arr, l, m, r);
// }


// //UTILITY FUNCTION

// function printSortedarray(A, size){
//     for(var i=0; i< size; i++){
//         console.log(A[i] + " ");
//     }
// }

// var arr = [12, 23, 32, 11, 4, 6, 5, 10];
// let arr_size= arr.length;
// console.log('Given Array');
// printSortedarray(arr, arr_size);

// console.log('Sorted Array');

// mergeSorting(arr, 0, arr_size - 1);

// // console.log('sorted Array');

// printSortedarray(arr, arr_size);

// // Merge sort methods 2;
// function mergeing (left, right) {
//     let arr = [];

//     while(left.length && right.length ){
//         if(left[0] < right[0]){
//             arr.push(left.shift())
//         }else{
//             arr.push(right.shift())
//         }
//     }

//     return [...arr, ...left, ...right]
// }

// function mergeSort1(array){
//     const half = array.length / 2 ;

//     //Base or Terminating Case
//     if(array.length <=1){

//         return array;
//     }

//     const left = array.slice(0, half)
//     const right =array.slice(half)
//        return mergeing(left, right)
//     return mergeing(mergeSort1(left), mergeSort1(array))
// }

// array=[4, 5, ,2, 6, 8, 5, 2, 1, 7];
// console.log(mergeSort1(array));,


//Merge Sort Method 3

// function merge(left, right){
//     let sortedArr = [];

//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             sortedArr.push(left.shift());
//         }else{
//             sortedArr.push(right.shift());
//         }
//     }

//     return [...sortedArr, ...left, ...right]
// }

// function mergeSort(arr){
//     if(arr.length <=1){
//         return arr;
//     }
//     let mid =Math.floor(arr.length / 2);

//     let left = mergeSort(arr.slice(0, mid))
//     let right = mergeSort(arr.slice(mid));

//     return merge(left, right)
// }

// arr=[4, 6, 2, 1, 8, 3, 9, 2]

// console.log(mergeSort(arr))


/**
 * Quick Sorting
 */

// function quickSort(array){
//     if(array.lenght <= 1){
//         return array;
//     }else{
//         var pivot = array[0];
//         var left = [];
//         var right = [];
//         for(var i=1; i < array.lenght; i++){
//             if(array[i] < pivot){
//                 left.push(array[i]);
//             }else{
//                 right.push(array[i]);
//             }
//         }
//         return quickSort(left).concat(pivot, quickSort(right))
//     }
// }

//  array = [10, 2, 4, 12, 34, 21, 76, 9, 8];

// var sortedArray = quickSort(array)
// console.log(sortedArray);


// quick Sorting

// var items = [5, 3, 7, 6, 2, 9];

// function  swap(items, leftindex, rightindex){
//     var temp = items[leftindex];
//     items[leftindex] =items[rightindex];
//     items[rightindex] = temp;
// }

// function partition(items, left, right){
//     var pivot  = items[Math.floor((right + left)  / 2)];
//     i = left;
//     j= right;

//     while(i <= j){
//         while(items[i] < pivot){
//             i++;
//         }
//         while(items[j] > pivot){
//             j--;
//         }
//         if(i <= j){
//             swap(items, i, j)
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(items, left, right){
//     var index;
//     if(items.length > 1){
//         index = partition(items, left, right)

//         if(left < index - 1){
//             quickSort(items, left, index - 1);
//         }
        
//         if(index < right){
//             quickSort(items, index, right)
//         }
//     }
//     return items;
// }

// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray);


// function partition(arr, start, end){
//     const pivotValue = arr[end];
//     let pivotIndex = start;
//     for(let i=start; i<end; i++){
//         if(arr[i] < pivotValue){
//             [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
//             pivotIndex ++;
//         }
//     }
//     [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
//     return pivotIndex;
// }

// function quickSortRecursive(arr, start, end){
//     if(start >= end){
//         return;
//     }
//     let index = partition(arr, start, end);

//     quickSortRecursive(arr, start, index -1);
//     quickSortRecursive(arr, index + 1, end);
// }

// array = [7, -2, 4, 1, 6, 5, 0, -4, 2]
// quickSortRecursive(array, 0, array.length - 1);

// console.log(array);

// Quick sort methods (incomplete)

// function QuickSort(Arr){
//     if(Arr.length <= 1){
//         return Arr;
//     }

//     const pivot = Arr.length - 1;
    
//     const leftArr = [];
//     const rightArr = [];

//     for(let i =0; i< Arr.length - 1; i++){
//         Arr[i] < pivot ? leftArr.push(Arr[i]) : rightArr.push(Arr)
//     }

//     return [...QuickSort(leftArr), pivot, ...QuickSort(rightArr)];
// }

// const items = [1, 5, 2, 99, 81, 100, 144, 121, 91, 85, 74, 10];

// console.log(QuickSort(items));

/**  HeapSorting */

// function sort(arr){
//     var N = arr.length;
//     for(var i = Math.floor(N/2) - 1; i>=0; i--){
//         heapify(arr, N, i);
//     }

//     for(var i=N - 1; i > 0; i--){
//         var temp = arr[0];
//         arr[0] = arr[i];
//         arr[i] =temp;

//         heapify(arr, i, 0);
//     }
// }

// function heapify(arr, N, i){
//     var largest = i;
//     var l = 2 * i + 1;
//     var r = 2 * i + 2;

//     if(l <N && arr[l] > arr[largest]){
//         largest = l;
//     }

//     if(r < N && arr[r] > arr[largest]){
//         largest = r;
//     }

//     if(largest !=i){
//         var swap = arr[i];
//         arr[i] = arr[largest];
//         arr[largest] =swap;

//         heapify(arr, N, largest);
//     }
// }

// function printArr(arr){
//     var N=arr.length;
//     for(var i=0; i < N; ++i){
//         console.log(arr[i] + " ");
//     }
// }

// var arr= [12, 11, 13, 5, 6, 7]

// var N = arr.length;

// sort(arr);
// console.log("sorted Array is");
// printArr(arr, N);



/**Heap Sort */

// class MaxHeap{
//     constructor () {
//         this.heap = [];
//     }

//     parentIndex(index){
//         return Math.floor((index-1)/2);
//     }

//     leftChildIndex(index) {
//         return (2*index + 1)
//     }

//     rightChildIndex(index){
//         return (2*index + 2)
//     }

//     swap(a, b){
//         let temp = this.heap[a];
//         this.heap[a] = this.heap[b];
//         this.heap[b] = temp;
//     }

//     insert(item){
//         this.heap.push(item);
//         var index =this.heap.length - 1;
//         var parent = this.parentIndex(index);
//         while(this.heap[parent] && this.heap[parent] < this.heap[index]){
//             this.swap(parent, index);
//             index = this.parentIndex(index);
//             parent = this.parentIndex(index)
//         }
        
//     }

//     delete() {
//         var item = this.heap.shift();
//         this.heap.unshift(this.heap.pop());
//         var index =0;
//         var leftChild =this.leftChildIndex(index);
//         var rightChild = this.rightChildIndex(index);
//         while(this.heap[leftChild] && this.heap[leftChild ] > this.heap[index] || this.heap[rightChild] > this.heap[index]){
//               var max =leftChild;
//               if(this.heap[rightChild] && this.heap[rightChild] > this.heap[max]){
//                   max = rightChild
//               }
//               this.swap(max, index);
//               index = max;
//               leftChild = this.leftChildIndex(max);
//               rightChild = this.rightChildIndex(max);

//         }
//         return item;
//     }
// }

// function heapSort (arr){
//     var sorted = [];
//     var heap1 = new MaxHeap();
//     for(let i=0; i<arr.legth; i++){
//         heap1.insert(arr[i]);
//     }
//     for(let i=0; i<arr.length; i++){
//         sorted.push(heap1.delete());
//     }
//     return sorted;
// }


// let arr = [1,3, 2, 5, 6, 4, 8, 7, 9]

// // arr = heapSort(arr);

// console.log(heapSort(arr));f

// const maxHeapify = (arr, n, i) => {
//     let largest = i;
//     let l = 2 * i + 1; //left child index
//     let r = 2 * i + 2; //right child index

//     //If left child is smaller  than root

//     if(l < n && arr[l] > arr[largest]) {
//         largest = l;
//     }

//     //If right child is smaller than smallest so far 

//     if( r < n && arr[r] > arr[largest]){
//         largest = r;
//     }

//     //If smallest is not root 

//     if(largest !=i){
//         let temp = arr[i];
//         arr[i] = arr[largest];
//         arr[largest] = temp;

//         //Recursively heapify the affected sub tree

//         maxHeapify(arr, n, largest);
//     }
// }
// //main function to do heap sort

// const heapSort = (arr, n) => {
//     //Build heap (rearrange array)
//    for(let i = parseInt(n / 2 - 1); i >= 0; i --){
//     maxHeapify(arr, n, i);
//    }

//    //One by one extract an element from heap
//    for(let i = n -1; i >= 0; i--){
//     //Move current root to end
//     let temp = arr[0];
//     arr[0] =arr[i];
//     arr[i] = temp;

//     //call max heapify on the reduced heap

//     maxHeapify(arr, i , 0);
//    }
// }

// const arr = [4, 5, 7, 2, 3, 8];
// heapSort(arr, arr.length);
// console.log(arr);


// const minHeapify = (arr, n, i) => {
//     let smallest = i;
//     let l = 2 * i + 1; //left child index
//     let r = 2 * i + 2;  //right child index

//     //If left child is smaller than root

//     if(l < n && arr[l] < arr[smallest]){
//         smallest = l;
//     }

//     //If right child smaller than smallest so for

//     if(r < n && arr[r] < arr[smallest]){
//         smallest = r;
//     }

//     //If smallest is not root

//     if(smallest != i){
//         let temp = arr[i];
//         arr[i] = arr[smallest];
//         arr[smallest] = temp;

//         //Recursively heapify the affected sub-tree

//         minHeapify(arr, n, smallest);
//     }
// }

// //main function to do heap sort

// const heapSort = (arr, n) => {
//     //Build heap (rearrange array)
//     for(let i= parseInt(n/2 - 1); i >=0; i--){
//         minHeapify(arr, n, i);
//     }

//     //One by one extract an element from heap

//     for(let i =n-1; i>=0; i--){
//         //Move current root to end
//         let temp = arr[0];
//         arr[0] = arr[i];
//         arr[i] = temp;

//         //call max heapify on the reduced heap
//         minHeapify(arr, i, 0);class
//     }
// }

// const arr = [4, 6, 4, 3, 1, 8, 7, 5];
// heapSort(arr, arr.length);
// console.log(arr);



//Radix sort algorithm

//A utility function to get maximum value in arr [];

// function getMax(arr, n){
//     let mx = arr[0];
//     for(let i=1; i < n; i++){
//         if(arr[i] > mx){
//             mx = arr[i]
//         }
//         //return mx;
//     }
//     return mx;
// }

// //A function to do counting sort of arr[] according to 
// //the digit represented by exp.

// function countSort(arr, n, exp){
//     let output = new Array(n);
//        let i; 
//        let count = new Array(10);
//        for(let i=0; i < 10; i++){
//         count[i] = 0;

//        }

//        //Store count of occurences in count[]

//        for(i=0; i<n; i++){
//         let flr = Math.floor(arr[i]/exp);
//         count[flr % 10] ++;
//        }

//        //Change count[i] so that count[i] now contains 
//        //actual position of this digit in output[]

//        for(i=1; i < 10; i++){
//         count[i] += count[i - 1];
//        }

//        //Build the output array

//        for(i = n -1; i >=0; i --){
//         let flr =Math.floor(arr[i]/exp);
//         output[count[flr % 10] - 1] = arr[i];
//         count[flr % 10] --;
//        }

//        //copy the output array to arr[], so that arr[] now
//        //contains sorted numbers according to current digit

//        for(i=0; i< n; i++){
//         arr[i] = output[i];
//        }
// }

// //The main function to that sorts arr[] of size n using 

// //Radix sort 

// function radixsort(arr, n){
//     //Find the maximum number to know number of digits

//     let m = getMax(arr, n);

//     //Do counting sort for every digit, Note That
//     // Instead of passing digit number, exp is passed.
//     //exp is 10^i where i is cirrent digit number

//     for(let exp =1; Math.floor(m/exp) > 0; exp *=10){
//         countSort(arr, n, exp);
//     }

// }

// //A utility function to print an array 

// function print(arr, n){
//     for(let i=0; i< n; i++){
//         console.log(arr[i] + " ");
//     }
// }

// let arr = [170, 45, 75, 90, 802, 24, 2, 66];

// let n = arr.length;

// radixsort(arr, n);
// print(arr, n);

// function getDigit(num, place) {
//     return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
// }

// console.log(getDigit(43263, 0));

// function digitCount(num) {
//     if(num === 0){
//         return 1;
//     }

//     return Math.floor(Math.log10(Math.abs(num))) + 1
// }

// console.log(digitCount(0));

// console.log(digitCount(21));

// function mostDigits(nums) {
//     let maxDigits = 0;

//     for(let i=0; i< nums.length; i++){
//         maxDigits = Math.max(maxDigits, digitCount(nums[i]))
//     }
//     return maxDigits;
// }

// console.log(mostDigits([44, 849, 1, 3333]));

// function radixSort(arrOfNums){
//     let maxDigitCount = mostDigits(arrOfNums)

//     for(let k=0; k < maxDigitCount; k++){
//         let digitBuckets =Array.from({length:10}, () => [])

//         for(let i =0; i<arrOfNums.length; i++){
//             let digit = getDigit(arrOfNums[i], k)

//             digitBuckets[digit].push(arrOfNums[i])
//         }

//         //New order after each loop

//         arrOfNums = [].concat(...digitBuckets)
//     }

//     return arrOfNums;
// }

// console.log(radixSort([1, 33, 444, 0, 3, 2]));

// const unsortedArr = [31, 27, 28, 42, 13, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48]

// const getNum = (num, index) => {
//     const strNum = String(num);
//     let end = strNum.length - 1;
//     const foundNum = strNum[end - index];

//     if(foundNum === undefined) {
//         return 0;
//     }else{
//         return foundNum;
//     }
// }

// console.log(getNum(4353, 2));

// const largestNum = arr => {
//     let largest = "0";

//     arr.forEach(num => {
//         const strNum = String(num);

//         if(strNum.length > largest.length){
//             largest = strNum;
//         }
//     })
//     return largest.length;
// }    

// const radixSort = arr => {
//     let maxLength = largestNum(arr);

//     for(let i=0; i < maxLength; i++) {
//         let buckets = Array.from({length:10}, ()=>[]);
//         for(let j=0; j < arr.length; j++){
//             let num = getNum(arr[j], i);

//             if(num !== undefined){
//                 buckets[num].push(arr[j]);
//             }
//         }
//         arr = buckets.flat();
//     }
//     return arr;
// }

// console.log(radixSort(unsortedArr));



