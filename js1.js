//single line command

/* 
multi line command
*/

/*
//--hello world print--
console.log("Hello World!");
console.clear();

//--variables in javascript--
a=10;//shortcut way of assing variable values
let b=1;
b=5;//let is possible to change or modify variable values
const c=2;//const is cannot change or modify variable values

//--variable name coditions--
let _$Dd1="hello";//expect keywors, numbers not allowed in first, special characters only _ and $ allow, capital letters also allow in first
console.log(a,b,c, _$Dd1);

//--primitive data types-- number,string,boolean,null,undefined,symbol
//--number--
let S1=0xff; //hexadecimal number 
console.log(typeof S1,S1);
let num1 =10_00_000 // 1.5e12 => means 1.5*10 pow 12
console.log(num1);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE * 10); //-5/0, 5/0
let num2 = 10505050505050505050550505;
let num3 = 10505050505050505050550505n;//=> n=> represents big int , num3+2n is valid, num3+2 is invalid
console.log(num2,num3+2n);

//--string--
a = "abc";
b = "def";
console.log(a,b,a+b,a+" "+b);
console.log("hi\n hello \"INDIA\"");// => \t-table, \v-verticle line, \b-remove next one character

//--boolean--
let booli =5>6;
console.log(booli,typeof booli);

//--null--
let name = null;
console.log(name,typeof name)

//--undefined--
let name1;
console.log(typeof name1);

//--number spacial case (symbol / NaN)--
let num=5;
console.log(num/"Hi",typeof (num/"Hi"));

//--type conversion--
let num1 = 8;
str1 = String(num1);
console.log(num1,str1, typeof num1,typeof str1);
let str2 ="10";
num2 = Number(str2);
console.log(typeof num2);

//--type coercion--
let x;
console.log(x,typeof x);
x=4;
console.log(x,typeof x);

x=x+"i think its string yes";
console.log(x,typeof x);

x=x-2;
console.log(x,typeof x);

let y=8;
y=y+" ";
y1=y-2;
console.log(y,typeof y, y1,typeof y1);
y2 = y+2;
console.log(y2,typeof(y2));
y3 = +y+2;
console.log(y3,typeof(y3));

let z1 = Number("123 num");
let z2 = parseInt("123 num");
let z3 = parseInt("n123 num");
console.log(z1,z2, typeof z1, typeof z2, z3, typeof z3);

//--! operator-- arithmatic,incriment and decriment,relational,equality,assignment,logical,bitwise,conditonal,ternary operator
let x=6;
x= !x;
console.log(x,typeof x);

//--convert number to boolean--
console.log(Boolean(7), Boolean(-0), Boolean(-1), Boolean(null), Boolean(undefined),Boolean(NaN));// try 0 and 0n is false, all other strings also true

//--arithmatic operations--
//a+b, a-b, a/b, a*b,{a**3, a*a*a, Math.Pow(a,3)} a%b,
//short hand opertion a+=2 means a=a+2
console.log(false+false, false+true, true+true);

//--incriment and decriment operator--
let num=4;
console.log(num, num++, num--, ++num, --num);//(number,post increament,post decrement,pre increment,pre decrement);

//--relational operators--
//a>b, a<b, a>=b, a<=b, 

//--equality operator--
//a==b, "3"==3, "2">1, "hi">"hello", 2>"abc"
console.log(3===3, "3"===3, ''==false, ''===false);

//--assignment operator--
//a=4;

//--logical operator--
//and &&, or ||, not !
console.log(~true, ~false, !true, !false);

//--bitwise operator--
//and a&b, nand !(a&b), or a|b, nor !(a|b), xor a^b, xnor !(a^b)

//--conditional statements(operator)-- if,if else, if else if, switch case condition
if(2>0)
    console.log("2 is greter");
console.log("close end");

if(0>2)
    console.log("0 is greter");
console.log("close end");

if(2>3){
    console.log("2 is greter");
}
else{
    console.log("3 is greter");
};
console.log("close end");

if(2>6){
    console.log("2 is greter");
}
else if(4>6){
    console.log("4 is greter");
}
else{
    console.log("6 is greter");
};
console.log("close end");

//--ternary operator--
//odd_or_even = num%2 === 0 ? "Even" : "Odd";

//--switch cases--
let day ="monday";
switch(day){
    case "monday":{
        console.log("6am");
        break;
    }
    case "tuesday":{
        console.log("7am");
        break;
    }
    case "wednesday":{
        console.log("8am");
        break;
    }
    case "thursday":{
        console.log("9am");
        break;
    }
    case "friday":{
        console.log("10am");
        break;
    }
    case "saturday":{
        console.log("11am");
        break;
    }
    case "sunday":{
        console.log("12pm");
        break;
    }
    default:{
        console.log("please enter a day");
        break;
    }
}

//--template literal--
let n1=5;
let n2=7;
let res=n1+n2;
console.log("sum of "+n1+" and "+n2+" is "+res);
console.log("sum of",n1,"and",n2,"is",res);
console.log(`sum of ${n1} and ${n2} is ${res}`);
console.log(`hi
hello`);// instead of \n new line

//--loops-- while,do while,for loop
//--while loop--{initialization, condition, increment or decrement}
let i=1;
while(i<=5){
    console.log("hi",i);
    i++;
}

//--do while--
let i = 10;
do{
    console.log("hi",i);
    i++;
}while(i<=5);

//--for loop--
for(let i=1; i<=5; i++){
    console.log("hi",i);
}
//another way
let i=1;
for(;i<5;){
    console.log("hi",i);
    i++;
}
//infinate way of condition
let i=1;
for(;;){
    console.log("hi",i);
    i++;
}

//--object data type-- "object in javascript is consist of key value pairs javascript is not oop language but it is object based programming language"
let studnt ={}
console.log(studnt, typeof student);

let student ={
    name: "ram",
    roll_no:202301,
    ph_no:9999999999,
    "work exp":4
}
console.log(student);
console.log(student.name,student.roll_no,student["work exp"]);

let input ="name";
let student ={
    name: "ram",
    roll_no:202301,
    ph_no:9999999999,
    "work exp":4
}
console.log(student.input,student["input"],student[input]);

let std1 = {
    name: "ram",
    roll_no:123,
    skills:{
        python:".py",
        javscript:".js",
        sql:".db"
    }
}
console.log(std1,std1.skills,std1.skills.sql);
console.log(std1.skills.python.length, std1?.skills?.python?.length);

let std1 = {
    name: "ram",
    roll_no:123,
    skills:{
        python:".py",
        javscript:".js",
        sql:".db"
    }
}
delete std1.roll_no
console.log(std1);

//--for in loop--
let std1 = {
    name: "ram",
    roll_no:123,
    skills:{
        python:".py",
        javscript:".js",
        sql:".db"
    }
}

for(let i in std1){
    console.log(i, std1[i]);
};

//--functions-- "function is a object data type"
function greet(){
    console.log("hello world!");
}
greet();

//--return--
function greet(){
    return "hello world!";
}
let str = greet();
console.log(str);

//--passing a value--
function greet(names){
    return `hello ${names}`;
}
let names = "ram";
let str = greet(names);
console.log(str);

//--functions expressions--
let add = function(n1,n2){
            return n1+n2;
        }
let res = add(2,3);
console.log(res);

//--passing a different variables--
function greet(nam){
    let num = 5;//local variable
    console.log(names,num);
    return `hello ${nam}`;
}
let num = 3;//global variable
let names = "ram";
let str = greet(names);
console.log(str,num);

//--passing a default values--
function add(n1,n2,n3=0){
    console.log(n1,n2,n3);
    return n1+n2+n3;
}
let res1 = add(2,3);
let res2 = add(2,3,4)
console.log(res1,res2);

//--normal functon and arrow functon--
let greet = function(user){
    console.log("hello "+user);
    return 1;
}
console.log(greet("ram"));

let greet = (user) =>{
    console.log("hello "+user);
    return 1;
}
console.log(greet("ram"));

//--one line statement easy way in arrow function--
let add = (n1,n2) => n1+n2;    
console.log(add(4,5));

//--function object--
let lap = {
    cpu: "i5",
    ram: "8gb",
    brand: "dell",

    greet: function(){
        console.log("hello world!");
    }
}
lap.greet();

//--this keyword not used--
let lap = {
    cpu: "i5",
    ram: "8gb",
    brand: "dell",

    getConfig: function(){
        let storage = 128;
        console.log(lap.cpu,storage);
    }
}
lap.getConfig();

//--this keyword--
let lap1 = {
    cpu: "i5",
    ram: "8gb",
    brand: "dell",

    getConfig: function(){
        let storage = 128;
        console.log(this.cpu,storage);
    }
}
lap1.getConfig();

let lap2 = {
    cpu: "i7",
    ram: "12gb",
    brand: "hp",

    getConfig: function(){
        let storage = 128;
        console.log(this.cpu,storage);
    }
}
lap2.getConfig();

if(lap1.cpu > lap2.cpu){
    console.log(lap1);
}
else{
    console.log(lap2);
}

//--third function used to compare lap1 and lap2 function--
let get_new_lap = function(lap1,lap2){
    if(lap1.cpu > lap2.cpu){
        console.log(lap1);
    }
    else{
        console.log(lap2);
    }
}

let lap1 = {
    cpu: "i5",
    ram: "8gb",
    brand: "dell",

    getConfig: function(){
        let storage = 128;
        console.log(this.cpu,storage);
    }
}
lap1.getConfig();

let lap2 = {
    cpu: "i7",
    ram: "12gb",
    brand: "hp",

    getConfig: function(){
        let storage = 128;
        console.log(this.cpu,storage);
    }
}
lap2.getConfig();

get_new_lap(lap1,lap2);

//--comparing inside a function "this" and "other"--
let lap1 = {
    cpu: "i8",
    ram: "8gb",
    brand: "dell",

    comparing: function(other){
        if(this.cpu > other.cpu){
            console.log(this);
        }
        else{
            console.log(other);
        }
    },

    getConfig: function(){
        let storage = 128;
        console.log(this.cpu,storage);
    }
}
//lap1.getConfig();

let lap2 = {
    cpu: "i7",
    ram: "12gb",
    brand: "hp",

    getConfig: function(){
        let storage = 128;
        console.log(this.cpu,storage);
    }
}
//lap2.getConfig();

lap1.comparing(lap2);

//--blue print constructor function--
function users(name,skill){
    this.name = name;
    this.skill = skill;

    this.work = function(){
        console.log("always code somthings");
    }
    //return 1;
}
let users1 = new users("ram","js");
let users2 = new users("ravi","java");
users2.skill = "python";
console.log(users1,users2);
users1.work();

//--arrays--
let ar1 = new Array();
let ar2 = [];
console.log(ar1, typeof ar1, ar2, typeof ar2);

//
let ar = [1,2,3];
console.log(ar.length);
ar.push("hi",3);// ar[3]="hi"
ar[0]=0;
console.log(ar,ar[-1],ar[3],ar[5]);

//--array is a collection of all ath type of data becz its an object--
let data = ["hi",12,0,{name: "ram"},function(){ console.log("hello");}];
console.log(data);
data[4]();

//--array methods--
let data = [1,2,3,4];
//console.log(data.push(5,6));
//console.log(data.pop());
//console.log(data.shift());
//console.log(data.unshift(0));
//console.log(data.splice(1));//(strart index, end index, addinng some values,,,,,)
//console.log(data.splice(2,1));
//console.log(data.splice(2,1,11,12,13));
console.log(data);

//--array with loops--
let nums = [];
nums[0]=10;
nums[99]=20;
console.log(nums,nums.length);

//--for of loop--
let nums = [];
nums[0]=10;
nums[99]=20;
for(let i in nums){
    console.log(i);
}

//--for in loop--
let nums = [];
nums[0]=10;
nums[99]=20;
for(let i of nums){
    console.log(i);
}

//--distructure array--
let data = [1,2,3,4];
//console.log(data,data[0],data[1],data[2],data[3]);
//let [a,b,c,d] = data;//[1,2,3,4]
console.log(a,b,c,d);
//let [a,b,,d] = data;//console.log(a,b,d);
let [a,b,c] = data;//console.log(a,b,c);

//--swap--
let a=10;
let b=20;
[a,b]=[b,a];
console.log(a,b);

//--split--
//let word1 = "my name is ram!".split("");
let word1 = "my name is ram! iam interested in coding".split(" ");
let [a,b,, ...d]=word1;//trhee dot variable -> reamining all values holds in d
console.log(a,b);
console.log(d);
*/

/*
//--even or odd number
console.log("Enter a number:");
num=4.0;
if(num%2===0){
    console.log("Even");
}
else if(num%2 != 0){
    console.log("Odd");
};

//--greter number find in three numbers
console.log("Enter num1, num2, num3");
num1=4
num2=4
num3=4
if(num1>=num2 && num1>=num3){
    console.log("num1 is greter");
}
else if(num2>=num3){
    console.log("num2 is greter");
}
else{
    console.log("num3 is greter");
}
*/

/*
//--array methods--
let nums = [45,50,51,60,65];
//console.log(nums);
nums.forEach((n,i,nums) => {
    console.log(n,i,nums);
});

//--arrays values comparing--
let num1 = [45,50,51,60,65];
let num2 = [40,51,50,61,65];
num1_greater_count = 0;
num2_greater_count = 0;
nums.forEach((n,i) =>{
    if(num1[i]>num2[i]){
        num1_greater_count+=1;
    }
    else if(num1[i]<num2[i]){
        num2_greater_count+=1;
    }
});
console.log(num1_greater_count,num2_greater_count);

//--filter, map, reduce--
let nums = [45,50,51,60,65];
//console.log(nums.filter(n => n%2 ===0));
//nums.filter(n => n%2 !== 0).forEach(i => { console.log(i); });
nums.filter(n => n%2 !== 0)
    .map(m => m*2) //n,m,i are same we can use any one is also possible we replace m,i to n
    .forEach(i => {
    console.log(i); 
});

//--reduce--
let nums = [1,2,3,4,5];
let res = nums.filter(n => n%2 === 0)
    .map(m => m*2) 
    .reduce((a,b) => a+b);//only even multiple numbers added
console.log(res);

//--set--
let nums = new Set("helloo"); // set is based on class so it will assign on the basis of constructor
nums.add(4);
nums.add("naveen");
nums.add(3);
nums.add(3);
console.log(nums);

nums.forEach(n => 
    console.log(n)
);

//--has()--
let nums =new Set("hii");
nums.add(4);
nums.add("naveen");
nums.add(3);
nums.add(3);
console.log(nums.has(3),nums.has(100),nums.has("naveen"));

//--map set--
let mapping = new Map();
mapping.set("naveen","js");
mapping.set("kiran","java");
mapping.set("ram","py");
//console.log(mapping.keys());
//console.log(mapping.values());
//console.log(mapping.has("kiran"));
//console.log(mapping.get("ram"));
mapping.set("kiran","ml");

for(let [key,val] of mapping){
    console.log(key,":",val);
}

mapping.forEach((val,key) => {
    console.log(key,":",val);
});

//--recursion--
let num =1;
function show(){
    console.log("hi",num);
    num++;
    if(num<=10000)
        show();
}
show();

//--factorial--
function fact(n){
    if(n === 0)
        return 1;
    else
        return n*fact(n-1);
}
res = fact(5);//171 ->infinity
console.log(res);

//--user input--
var c="hello world";//variable keyword var
const prompt = require("prompt-sync")();

let inp;
inp = prompt("entre your name:");
console.log(`your name is ${inp}`);

//--logical shift and arithmatic shift operators--
//console.log(7>>2);//logic right shift
//console.log(3<<2);//logic left shift
console.log(-7>>>2);//sign propagating right shift

//--decimal to binary conversion--
let num = 10;
let cary = ""
while(num > 0){
    let c = num%2;
    cary+=String(c);
    num = (num-c)/2;
}

function reverse_of_string(cary){
    if(cary == "")
        return "";
    else
        return reverse_of_string(cary.substr(1)) + cary.charAt(0);//"hello".substr(1) = "ello", "hello".charAt(0) = "h"
}
console.log(reverse_of_string(cary));

//--reverse of string--
let str = "visual studio code";
let ar = str.split("");
ar1 = ar.reverse();
rev_str = ar1.join("");
console.log(rev_str);

//--another method--
let str = "visual studio code";
let rev_str = "";
for(let i = str.length-1; i>=0; i--){
    rev_str += str[i];
}
console.log(rev_str);
*/
