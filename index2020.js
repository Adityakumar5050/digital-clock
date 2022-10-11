// let aar1 = [1,2,3]
// let arr2 =[4,5,6]
// const [a,...d] = aar1
// arr1 = arr2
// console.log(d)

let aar1 = [1,2,3]
let arr2 =[4,5,6]
arr2.unshift(6)
 const [arr1,...rest] = arr2
 console.log(arr2)