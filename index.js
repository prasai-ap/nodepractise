//Q1
function sumEvenNumbers(arr) {
    return arr.filter(num=>num%2===0).reduce((acc,num)=>acc+num,0);
}

console.log(sumEvenNumbers([1,2,3,4,5,6]));
console.log(sumEvenNumbers([7,9,11]));

//Q2
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));

//Q3
function fibonacci(n){
    let seq=[0,1];
    for (let i=2;i<n;i++) {
        seq.push(seq[i-1]+seq[i-2]);
    }
    return seq.slice(0,n);
}

console.log(fibonacci(5));
console.log(fibonacci(10));

// Q4
function factorial(n){
    return n===0 ? 1:n*factorial(n-1);
}

console.log(factorial(5)); 
console.log(factorial(7)); 

// Q5
function reverseString(str){
    let reversed='';
    for (let char of str) {
        reversed=char+reversed;
    }
    return reversed;
}

console.log(reverseString("hello"));
console.log(reverseString("world")); 

// Q6 
function max(a,b){
    return a>b ? a:b;
}

console.log(max(10,5));
console.log(max(3,8));

// Q7
function fizzbuzz() {
    for (let i=1;i<=100;i++) {
        console.log(i%15 === 0 ? "FizzBuzz":i%3===0 ? "Fizz":i%5===0 ? "Buzz":i);
    }
}
fizzbuzz();

// Q8
function isPrime(num){
    if (num < 2) return false;
    for (let i=2;i<=Math.sqrt(num);i++){
        if (num%i===0) return false;
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));

// Q9
function charCount(str){
    return str.split('').reduce((acc, char)=>{
        acc[char]=(acc[char]||0)+1;
        return acc;
    }, {});
}

console.log(charCount("hello")); 

// Q10
function multiplicationTable() {
    for (let i=1; i<=10;i++) {
        let row='';
        for (let j=1;j<=10;j++) { 
            row += (i*j).toString().padStart(4, ' ');
        }
        console.log(row);
    }
}

multiplicationTable();

// Q11
function countdown(n) {
    if (n<1) return;
    console.log(n);
    setTimeout(()=>countdown(n-1),1000);
}

countdown(10);

// Q12 
const chalk = require('chalk');
console.log(chalk.blue('This is a styled message using Chalk!'));

// Q13
const chalk=require('chalk');
const readline=require('readline');
const rl=readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter your name: ",(name)=>{
    console.log(`Hello,${chalk.green(name)}!Welcome!`);
    rl.close();
});

// Q14
const moment=require('moment');
console.log("Current Date and Time:", moment().format('YYYY-MM-DD HH:mm:ss'));

// Q15
require('dotenv').config();
console.log("Loaded ENV Variables:",process.env);

// Q16
const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=>console.log("Fetched Data:",response.data))
    .catch(error=>console.error("Error fetching data:",error));

// Q17
const _ = require('lodash');
console.log(_.chunk([1,2,3,4,5,6],2));

// Q18
const {format,differenceInDays}=require('date-fns');
const today=new Date();
const givenDate=new Date('2025-01-01');
console.log("Formatted Date:",format(today,'yyyy-MM-dd'));
console.log("Days Difference:",differenceInDays(givenDate,today));

// Q19
function mockApiCall() {
    setTimeout(()=>console.log("API response received!"),2000);
}
console.log("Making API call...");
mockApiCall();

// Q20
setTimeout(()=>console.log("Executed after 0ms"),0);
setTimeout(() =>console.log("Executed after 10ms"),10);
setTimeout(() =>console.log("Executed after 5ms"),50);
