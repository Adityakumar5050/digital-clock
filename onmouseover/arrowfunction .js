// flat arrow function or a arrow function
// for example.

// var pratibha = ()=>{
//     aditya = "pratibha"
//     kumar = " das"
//     return aditya+kumar
// }
// console.log(pratibha())

// let pratibha = "aditya"
// let kumar = " ko Chuma chaiye pratibha jalde do "
// const chaudhary = ()=>{return pratibha+kumar} 
// console.log(chaudhary())

// function sum ( x ,y){
                                                //  retun comes in curly braces 
//     return x +y
// }
//  console.log(sum(20,30))


// let a =10
// let b =20
// var sum = ()=> a+b
// console.log(sum())

// next example
  
// var sum= (a,b)=> a+b
// console.log(sum(20,50))


// call back function       
// step 1 :- first executed the first function after that its come to next function
// step 2 :- any function that is passed as an  argumnet is called a callback function

// lets see with exaples 
// var FunA = ()=>{
//     setTimeout(function(){
//         console.log(`my name is aditya kumar how are you `)
//         funB();                                                        // its a trick to do this 
//     },3000)
   
// }
// var funB = ()=>{
//     console.log(`my name is prtibha  `)
// }
// FunA();
// const FunA = ()=>{
//     setTimeout(function(){
//         console.log(`my name is aditya kumar hello soniya whats your name please tell me na `)
//         FunB();
//     },3000);
        
// }
// const FunB = ()=>{
//     console.log(`and whats you another girl whats your name ?`)
// }
// FunA();


// const FunA =( friend, busyRightNow)=>{
//     console.log(`my name is aditya kumar and right now im talking to ${friend} i'll call you later `)

// busyRightNow();

// }
// const funB =()=>{
//     console.log(`hii i was busy that time sorry bor yaa tell me what happen`)
// }
// FunA("pratibha",funB)


// higher order function
// that means  a function retuning  a function retuning a function is called higher oder function

// const  functionHaiPgal = (name )=>{
//     if(name === "aditya"){
//         return function(topic){
//             console.log(`hi ${name} .what your ${topic}.please explain it`)
//         }
//     }if(name === "soniya"){
//         return function(topic){
//             console.log(`hi ${name} .what your ${topic}.please explain it`)
//         }
//     }if(name === "pratibha"){
//         return function(topic){
//             console.log(`hi ${name} .what your ${topic}.please explain it`)
//         }
//     }else{
//         return function(){
//             console.log("welcome to my world")
//         }
//     }
// }
// // functionHaiPgal("aditya")("tumse")
// // functionHaiPgal("soniya")("tumse")
// // functionHaiPgal("pratibha")("tumse")

// const person1 = functionHaiPgal("aditya")
// person1("higher order")
// person1(" call back function")
// person1("statemnet")
// person1("expresssion function")


// .map () .filter().reduce()

// // [1,2,5,8,9,44,5]
// const arr =[1,2,5,8,9,44,60]
// function sunoNaZara(x){
//     return x*1
// }
// const Newarr = arr.map(sunoNaZara)
// console.log(arr)


// const ManJaoNa = [ 20,30,40,80,920,60]
// function fiveTimes (x){ return x**2}
// const hoJayeGA=ManJaoNa.map(fiveTimes)

// console.log(hoJayeGA)
// const ManJaoNa = [ 20,30,40,80,920,60]

// const hoJayeGA=ManJaoNa.map( (x)=> x**2)

// console.log(hoJayeGA)


// filter
// what filter does its filter the array 
// const arr =[1,2,5,8,9,44,60]
// function oddOne(x){
//     return x%2
// }
// const busBaatBanGayi = arr.filter(oddOne)
// console.log(busBaatBanGayi)

// const arr =[1,2,5,8,9,44,60]
// function oddOne(x){
//     return x%2===0
// }
// const busBaatBanGayi = arr.filter(oddOne)
// console.log(busBaatBanGayi)



// const dilChain = [10,20,30,40,50,60,70,80,90,50]
// const sukoon =dilChain.filter((x)=>x%2===0)
// // console.log(sukoon)
// const Chain
// const dilChain = [10,20,30,40,50,60,70,80,90,50]
// const manJaoNa =dilChain.filter((x)=>x>10)
// console.log(manJaoNa)


// // reduce

// let arr =[1,2,3,4,5,6,7,8,9]
// let sum = arr.reduce((acc ,curr)=>{
//     debugger;
//     return acc +curr;
// })
// console.log(sum)



// // object freeze
// const profile= {
// name:"aditya",
// address:{
//     city:"mathura",
//     pincode:[281004]
// }
// }

// Object.freeze(profile)
// console.log(Object.isFrozen(profile))
// profile.name ="pratibha"
// console.log(profile)
// profile.address.city="agra"
// console.log(profile)
// profile.address.pincode=[2556554]
// console.log(profile)


// function statement
//function expression
//function declartion
// anonymous function
// named function
// diiferent between parameters and arguments 
// first class function
// arrow function
//call back function
// higher order function
// .map()
//.filter()
//.reduce 
//.find()
//.forEach
//.findIndex()
//.scope
// Object.freeze
// const myData ={
//   name :"aditya",
//   phoneNumber:{
//     number:[6386516635],
//     city:"mathura"
//   }

// }

// Object.freeze(myData)
// console.log(Object.isFrozen(myData))
// // myData.phoneNumber.number=[7084568525]
// // myData.name="pratibha"
// // console.log(myData)
// myData.phoneNumber=soniya
// console.log(myData)

// Object.isSealed(myData)
// function Statment

// mene koi function or usko name deiya usko hum function statemnet bolte hai 
// if we write a function keyword and we give a name  so this is know as function statemnet 
// function statement

// aditya();
// sum();
// function aditya (){
//     console.log(`pratibha tum na mujse bahut petoge ab samjhe `)
// }


// // function expresssion
// var sum = function (){
//     console.log(` pratibha ab k mute hua na mic phir tum dkhna `)
// }
 
// function declartion=function statemnet

// anonymous function
//  the function without name is know as anonymous function.....
// name function expression
// var b = function xyzmndskvn(){
//     console.log(`tum man jao samjhe bahut der ho gayi tum ko samjh rahi ho na . mobile rakh do or yaha dhyn do  `)
// }
// b();
  

//  difference b/w parmeters arguments

// the value which we passed inside the function are know as arguments
// The variables that are defined and these labels and indentifers with the those value are know as parameters
// The values that are declared within a function when the function is called are known as an argument. 
// The variables that are defined when the function is declared are known as parameters

// var a = function (x,y){
//     debugger;
//     return x+y
// }
// a(20,30);

// first class function
// the ability of the function to be used as value and can be pass this  an argument another function  and can be returned Form
// the function is this ability is know as first class city function

// const VoiceBreak = ()=>{
//     console.log(`mere voice break nhi ho rahi hai`)
//     ifVoiceBreak();
// }                                                         
// const ifVoiceBreak = ()=>{
//     console.log(`mere voice agar brak ho rahi toh apna net check karo`)
// }
// VoiceBreak(friend ,)

// callback function
// any function that is passed as an argument is called a call back funation 
//  A callback function is a function that is to be executed after another 
// function has finsihed executing -hence the `name ` callback fuction

// ex:-

// const paniKibotal = (friend)=>{
//     console.log(`suno pratibha baat hai ase abhi me apne${friend}`)
//     paniKatam()
// }
// const paniKatam = ()=>{
//     console.log(`partibha mei call krne wala hu chai mat peena mere bena`)
// }

// paniKibotal("soniya")
 
// arrow function ya flat function 
//  let a =10
//  let b =20
//  const sum = function(){
//     debugger;
//     return a+b
//  }
//   console.log(sum())

//  let a =10
//  let b =20
//  const sum = ()=> a+b
// console.log(sum())

// higher order function
// higher -order function are funation that take other function as arguments 
//or return function as their result know as higher order functiom

// const teamKhukhar = (name)=>{
//     if(name==="pratibha"){
//         return function(sports){
//             console.log (`${name }khukhar team ki captain hai agar wo har jati hai ${sports} `)
//         }
//     }if(name==="soniya"){
//         return function(sports){
//             console.log (`${name }paglladki hai bach k raho  ${sports} `)
//         }
// }
//     if(name==="ashish"){
//         return function(sports){
//             console.log (`${name }agar wo har gayi toh apni team walo ko chodege nhi ${sports} `)
//         }
//     }
// }

// teamKhukhar( "pratibha")("hockey")
// const team = teamKhukhar
// team ("pratibha")("hockey")
// team("soniya")("chup ho jao tum pratibha ab ")

// map 
// [ orginal does no change]

// const arr = [1,2,3,4,5,6,7,8,9]
// // function double (x) {
// //     return x*3
// // }
// const newArr = arr.filter(  x=>x<5)
// console.log(newArr)

// .filter
// const arr = [1,2,3,4,5,6,7,8,9]
// // function double (x) {
// //     return x*3
// // }
// const newArr = arr.filter(  x=>x<5)
// console.log(newArr)

// const arr = [1,2,3,4,5,6,7,8,9]
// // function double (x) {
// //     return x*3
// // }
// const newArr = arr.map(  x=>x%2===0)
// console.log(newArr)

// // .reduce
// reduce is that type of function used at place where you have to take 
// all the element of an error and come of with a single value out of them

// reduce function take for arguments 
// 1:- accumulator jama karna 
// 2:- current value
// 3:-current index
// 4:-source array

// let arr = [10,20,30,40,50,.60,70,80,90]
// let sum =arr.reduce((acc,curr)=>{
//     return acc;
// }
//The filter() method creates a new array filled with elements that pass a test provided by a function.
//The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.
// The filter() method creates a shallow copy of a portion of a given array, filtered down to just 
//the elements from the given array that pass the test implemented by the provided function.
//filter() calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a value that coerces to true. 
//Array elements which do not pass the callbackFn test are skipped, and are not included in the new array.

// let arr =[1,2,3,4]
// for (let i =0 ;i<arr.length[++1];i++){
//     debugger;
// return 
// }
// console.log(arr)

// var profile ={
//     name : "aditya kumar",
//     address: "mathura"
// }
// Object.seal(profile)
// // console.log(Object.isFrozen(profile))
// profile.name = "krishna krishna"
// profile.age = 27
// console.log(profile)

// const obj1 = {
//     user :"aditya",
//     pass :"kumar"
// }
//     const obj2 = obj1
// console.log(obj1)

// a()
// b()

// function a (){
//     console.log( "a called")
// }
// // a()


// let b = function(){
//     console.log("b called")
// }
// // b()

// accumulator jama krna 
// current value 
// current index
//source array
//  let arr =[1,2,3,4,5,6]
//  let sum = arr.reduce((acc,curr)=>{
//     debugger;
    
//     return acc+curr;
//  }
 
// 


// const functionOut = (a)=> {
//     let b=10
//     console.log(functionOut)
//     const functionInr =()=>{
//         let sum = a+b
//         console.log(sum)
//         // debugger;
//         console.log(`hii the sum of ${sum}`)
//     }
//     // functionInr();
//     return functionInr()

// }
// let inner = functionOut(5)
// console.log(inner)
// functionOut();

// let obj1 = {
//  name : "aditya ",
//  user :"kumar"  
//  } 
 
// let arr = [10,20,30,40,50,60,70]
// for (i=0;i<arr.length;i++){
//     arr[i]++
// }
// console.log(arr)
// let arr =[1,2,3,4,5,6]
// for () 
// const iterable = [1,2,3,4,5,6,7,8,9,10];

// for (let value of iterable) {
//   value *= 2 ;
//   console.log(value);
// }  

// const table = [1,2,3,4,5,6,7,8,9,10]
// for (let element of table){
//     element *= 87
//     console.log(element)

// }
// console.log(element)

// let a ="shourya"
// let b =" 🦁chaudhary"
// let sum = a+b
// console.log(sum)

// let table = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0 ;i<table.length;i++){
//      table[i]+15;
// }
// console.log(table)

// let addNumber = [10,20,30,40,50,60]
// for (let element of addNumber){
//     element += 15
//     console.log(element)
// }

// let table = [1,2,3,4,5,6,7,8,9,10]
// for (let element of table){
//     element *=3
//     console.log(element)
// }
// let table = [1,2,3,4,5,6,7,8,9,10]
// for (let newTable of table){
//     newTable *= 100
//     console.log(newTable) 
// }

// let table = [1,2,3,4,5,"😍",6,7,8,9,10]
// for (let newTable of table){
//     newTable *= 5
//     console.log(newTable)
// }
// function sum(a,b,c,d){
//     debugger;
//     return a+b+c+d
// }

// sum(6,5,6,9)




// let  gussaArhi = [ 1,2,3,4,5,6,7,8,9,10]
// // for (let element of gussaArhi){
// //     element *= 12
// //     console.log(element)
// for ( let element of gussaArhi){
//     element +=12
//     console.log(element)
// }


// for (let i=0 ; i<gussaArhi.length;i++){
//     gussaArhi [i]++
//     console.log(gussaArhi)
// }

// const obj1 = {
//    user: "aditya ",
//    password:"kumar"
// }
// const obj2={...obj1}
// obj2.user ="kumar"
// console.log(obj1)
// console.log(obj2)

// const radhe = [1,2,3,4,5,6,7,8,9,10]
// for (let kumari of radhe){
//    if (kumari%2)
//     console.log(kumari);
// }
// const shyama =radhe.filter("makhanchor")  
// let arr= [1,2,3,4]
// for (i =0 ; i<arr.length;i--){
//     console.log(arr)
// }
// const obj={
//     user :"aditya",
//     Pass : "pass"
// }
// const obj1 = obj
// console.log(obj1)
// console.log(obj)



































 





