// // 1. Print all even numbers in first 50 natural numbers
// // 2. print all odd numbers in natural numbers from 20 to 50
// // 3. print all numbers that are divisible by 5
// // 	[12, 45, 67, 89, 90, 34, 35, 55]
// // 4. Print all numbers of this array
// // 	 [[1,2], [3,4], [5,6], [7,8]]
// // 5. Print all prime numbers occurring in 1st 50 natural numbers

// // ============== solution 1 ============== //
// for (let number = 1; number <= 50; number++) {
    // if(Number % 2 ==0 )
//     console.log(number);
// }

// // ============== solution 2 ============== //

// for (let number = 20; number <= 50; number++) {
//     if (number % 2 !== 0) {
//         console.log(number);
//     }
// }

// // ============== solution 2 alternate ============== //

// for (let number = 20; number < 51; number++) {
//     if (number % 2 === 0) {
//         continue;
//     }

//     console.log(number);
// }

// // ============== solution 3 ============== //
// const arr = [12, 45, 67, 89, 90, 34, 35, 55];

// for (let index = 0; index < arr.length; index++) {
//     const arrayElement = arr[index];

//     if (arrayElement % 5 === 0) {
//         console.log(arrayElement);
//     }
// }

// // ============== solution 4 ============== //
// const array = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7, 8],
// ];

// for (let outerIndex = 0; outerIndex < array.length; outerIndex++) {
//    for (let innerIndex = 0; innerIndex < array[outerIndex].length; innerIndex++) {
//        console.log(array[outerIndex][innerIndex]);
//     }
// }

// // ============== solution 5 ============== //

// for (let number = 1; number <= 50; number++) {
//     if (number === 1) {
//         continue;
//     }

//     let isPrimeNumber = true;
//     for (let divisor = 2; divisor < number; divisor++) {
//         if (number % divisor === 0) {
//             isPrimeNumber = false;
//             break;
//         }
//     }

//     if (isPrimeNumber) {
//         console.log(number);
//     }
// }

  

//  var spend = 6
//  var a ="10rs"

//    if(spend >= 5)
//         console.log( a + " whole amount is yours")
//         else  {
            
//             console.log('give me my money back')
//         }

       // 1. Print all even numbers in first 50 natural numbers
// // 2. print all odd numbers in natural numbers from 20 to 50
// // 3. print all numbers that are divisible by 5
// // 	[12, 45, 67, 89, 90, 34, 35, 55]
// // 4. Print all numbers of this array
// // 	 [[1,2], [3,4], [5,6], [7,8]]
// // 5. Print all prime numbers occurring in 1st 50 natural numbers
//   ================================================1=================================================\\
// for (i=0; i<=50 ;i++){
//     if (i%2!==0){
//         console.log(i)
//     }
// }

// for (i=1;i<=50;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }
// let arr = [410,20,550,80,40,90,3,60,4,43]
// for ( index=0 ;index<arr.length;index++){

//         if(arr[index]%5==0){
//             console.log(arr[index])
//         }
// }


 





// [10,20,30,40,50,60,70,80,90,3,4,5,7,8,6,33]  /2
// let arr = [10,20,30,40,50,60,]
// for (ram=0;ram<arr.length-4;ram++){
//    if(arr[ram]%2==0){
//         console.log(arr)
//     }
// }

// print all even no of first 50 natural no

// for (i=1 ;i<=50;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }
// print all even no of first 50 natural no

// for (i=1 ;i<=50;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// print all number that are divide bye 5
// [12,45,67,89,90,34,35,55]
// let Radhe = [12,45,67,89,90,34,35,55]
// for (krishna=0;krishna<=Radhe.length;krishna++){
//     if(Radhe[krishna]%5==0){
//         console.log(Radhe[krishna])
//     }
// }

// print all number of this Array
// [1,2]
// [3,4]
// [5,6]
// [7,8]

// let a = [[1,2],[3,4],[5,6],[7,8]]
// for(khana =0 ;khana<=a.length;khana++){
//     for (Newkhana=0;Newkhana<a.length;Newkhana++)
//     {
//         console.log(a[khana])
//         console.log(Newkhana)
//     }
// }

// for (let number = 1; number <= 50; number++) {
    

//     let pm =number ;
//     for (let chal = 1; chal < number; chal++) {
//         if (pm % chal === 0) {
         
//             break;
//         }
//     }

//     if (pm) {
//         console.log(pm);
//     }
// }

// var num =100
// for (var i=2 ;i<=100 ;i++){
//     isprime =1
//     for(var j=2; j<=i/2;j++){
//     if(i%j==0){
//         isprime =0;
//         break
//     }
// }
// if(isprime==1){
//     console.log(i)
// }
// }

// function isPrime(number){
//     var number =3
//     if ( number<2)
//     return   number + ' is not a  prime number'
//     for (let i=2 ;i<number ;i++){
//         if(number%i==0){
//             return number + 'is not a  prime number give the correct number !'
//         }
//     }
//     return  number + "  is a prime number"
// }
// console.log(isPrime())


//================================ Sort Array Without Using Inbuilt Function===========================================\\


// let array = [1,2,3,4,5,11,6,7,10]
// let temp;
// for (let i =0 ;i<array.length;i++){
//     console.log(`print I : ${array[i]}`)
//     for(let j=0;j<array.length;j++){
//         console.log(`print j : ${array[j]}`)
//         if(array[i]>array[j]){
//             temp=array[i];
//             array[i]=array[j]
//             array[j]=temp;
//         }
//     }
// }
// console.log(array)











//================================ Sort Array Without Using Inbuilt Function===========================================\\

// let array = [1,2,3,4,5,11,6,7,10]
// let temp;
// for (let i =0 ;i<array.length;i++){
//     console.log(`print I : ${array[i]}`)
//     for(let j=i;j<array.length;j++){
//         console.log(`print j : ${array[j]}`)
//         if(array[i]>array[j]){
//             temp=array[i];
//             array[i]=array[j]
//             array[j]=temp;
//         }
//     }
// }
// console.log(array)

//  function myPrime (chalJayegatu){
//     var chalJayegatu =1
//      if(chalJayegatu<2)
//         return chalJayegatu + ` this is not a prime number`
//         for(let i=2 ;i<chalJayegatu;i++){
//             if(chalJayegatu%i==0){
//                 return chalJayegatu + ` this is not a prime number invlade number !`
//             }
            
//         }
//       return chalJayegatu +` is a prime number`          
// }
// console.log(myPrime())


// function krishna(jaiShreRam){
//     var jaiShreRam =3
//     if(jaiShreRam<2)
//         return jaiShreRam + `not a prime number`
//         for(let i=2;i<jaiShreRam;i++){
//             if(jaiShreRam%i==0){
//                 return jaiShreRam + ` not not a prime number`
//             }
//         }
//         return jaiShreRam + ` is a prime number`

//     }
// console.log(krishna())

// let tumKarloge = [220,250,5665,641,641,5413,5216,302]
// let temp;
// for(let i =0 ; i<tumKarloge.length;i++){
//     for(let j =i; i<tumKarloge.length;j++){
//     if(tumKarloge[i]<tumKarloge[j]){
//         temp=tumKarloge[i]
//         tumKarloge[i]=tumKarloge[j]
//        temp= tumKarloge[j]
//     }
//     }
// }
// console.log(tumKarloge)

    
// let tumKarloge = [220,250,270,140]

//  i 5665,641,
//220 -j-----

// let temp;
// for (let i =0 ;i<tumKarloge.length;i++){

//     console.log(`print I : ${tumKarloge[i]}`)

//     for(let j=0;j<tumKarloge.length;j++){

//          console.log(`print j : ${tumKarloge[j]}`)

//         if(tumKarloge[i]>tumKarloge[j]){

//              console.log(tumKarloge[i]>tumKarloge[j])
//             temp=tumKarloge[i];

//             console.log(temp)

//             tumKarloge[i]=tumKarloge[j]

//             console.log(tumKarloge[i]=tumKarloge[j])

//             tumKarloge[j]=temp;

//             console.log(temp)
//      }   
//     }
// }
// console.log(tumKarloge)

//  print all number of this Array
//  [1,2]
//  [3,4]
//  [5,6]
//  [7,8]

//  let a = [[1,2],[3,4],[5,6],[7,8]]

//  for (let i=0; i<a.length;i++){
//     for (let j =0; j<a[i].length;j++){
    
//         console.log(a[i][j])
//     }
//  }



// { /// gf
//     {  // fa
//         {
//                  ///sa     // scope chain means bhar se jaa skta hai andar but andar se bhar se nhi jaa skta 
//         }
//     }
// }

// fa

//sa

//  Strings to Numbers 


//  let myArray = [1,26,17,35,9,87];
//  b=myArray.sort().reverse()    
//  console.log(b)
//  c=myArray.sort(b)



// function sum (a,b,c){
    
//     return a+b+c
// }
// console.log(sum(40,50,60))

// let num1 = Number("350")
// console.log(num1)
// let num2 = +("380")
// console.log(num2)
// let num3 = num1+num2
// console.log(num3)
// console.log(typeof num3)

// const num1 = parseInt('135.555')
// console.log(num1)
// const num2 = parseFloat('13562612.552')
// console.log(num2)
// const num3 = num1+num2
// console.log(num3)

// function sum (a,b,c){
    
//     return  Math.round(a+b+c)
// }
// console.log(sum(1506,451.8,25232))

// const num1 = Math.round("50.99"+"45454") 
// const nuNum1 = Math.round("99.99")+Math.round("99.99")
// console.log(nuNum1)


// Numbers to Strings

// const num1 = String(15)
// console.log(num1)
// const num2 = 20+
// console.log(num2)
// const num3 = num1+num2
// console.log( num3)



// function sum (a,b,c){
//     return (a+b+c) .toString();
// }
// console.log(20,30,40)
// console.log(typeof 20,30,40 )



// const num = 20 .toString()
// console.log(typeof num)


// const num = 2000
// const myString = `let see it working or not  ${ num}`
// console.log(myString)
// console.log(typeof myString)





// const num1 = "50"
// const num2 = "60"
// const num3 = num1+num2
// console.log(num3)
// console.log(type
// of num3)
//  const

// const num1 = Number("50")
// console.log(num1)
// const num2 = +("25")
// console.log(num2)
// const num3 = num1+num2
// console.log(num3)
// console.log(typeof num3)
// console.log( typeof num2)
// console.log(typeof num1)
//  const num = +("25")
//  console.log(typeof num)

// const num = parseFloat("550.99")
// console.log(num)
// const num1 = parseFloat("666.89")
// console.log(num1)
// const num2 = num+num1
// console.log(num2)

// console.log(typeof num)

// number to string
// const num = String(50)
// console.log(num)
// const num1 = 50 .toString()
// const num2 = 100
// const num3 = `${ 100} lele par pratibha ek chuma dedo bahut der se mang rha hu  `
// console.log(typeof num3)
// console.log(num3)




// console.log(typeof num1)
// console.log(typeof num)

// const num = 2 
// const num1 =`1`
// const num3 = num+num1
// console.log(num3)


//scope chain //
// function scope 
// let s

//  const aditya = (chaiye?"kamchalege":"koibaatna")
//  console.log(aditya)

//  let aditya="nahi deni"

//  console.log((aditya=="abhi do"?"happy":"koi bat nhi"))
 
//  if(aditya=="chahiye")
// {
//     console.log("kamchalega")
// }else{
//     console.log("koibatna")
// }


// const sunoPratibha = "fnjknsakjfn"
// const nhiSuno ="nfjkfnn"
// console.log((sunoPratibha==="mazaAjayega"?" naa kuch or nhi issue hai f":nhiSuno==="chodugaNhiAjj"?"jan":"samjho na please yaar sadhi se sadhi kar lege jada time wait krne ki zarurat na hai "))

// const arr1 =["aditya" , "kumar","chaudhary"]
// const arr2 = ["pratibha","das","damodar"]
// const arr3 = arr1+arr2
// console.log(arr3)

// array and object differance 
// array and object both are mutable
// array gives the output in the form of string or number 
//array of index will start from 0 in index
// in data type array will come's in non premitive data type 


// Object
//object output will comes in json formate 
// in data type object will come's in non premitive data type 
//in object all the formate will come like:- string number boolean 


//formate is matter in array //its store  the value in sequence // 
//we can add rename and store the dupalicate data from tail and find index from value 

//splice
// const arr = [1,2,3,4,5,6,7]

// arr.splice(3,0 ,24,25)
// console.log(arr)
// let chuma = [1,2,3];
// let chuma2 =[4,5,6];
// chuma=chuma.concat(chuma2);
// console.log(chuma)

// const arr = newArry ("aditya" ,23,24,25);
// console.log(arr)

// ,push end mei value store kar deta hai 
// //.pop last se value remove kar deta  hai 
// const arr = [2,3,4,5,65,222,2823323,325613221,5451656521]
// // arr.const  = [1,2,3,4,5]
//  console.log (arr.slice(0,5))
// // console.log(arr)





// . unshift  starting mei value laga deta hai
// shift se starting mei se value remove kar deta hai 
// .concat ye two string ko add kardeta hai ya phir two array ko add kardeta hai 
//. splice ye index mei jaa kar jo number replace krna hoga unka number dekar waha hum new number add kar dege const
//. reverse  arrary ko reverse print kara deta hai 
//.slice ye kya karta hai jo bhi hum index se number set karege uske baad ka wo sab dega










