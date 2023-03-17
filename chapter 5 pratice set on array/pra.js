// // // pratice 1
// // let arr = [34,56,32,3,23,232]
// // let a = prompt("enter a nubmer");
// // a = Number.parseInt(a)
// // arr.push(a)
// // console.log(arr)

// // // pratice problem2

// let arr = [1,2,3,4,5,6,7,8]
// let a;
// do{
//     a=prompt("enter a number");
//     a = Number.parseInt(a)
//     arr.push(a)
// } while (a !=0)
// console.log(arr)

// pratice 3 

// let arr = [23,50,40,55,10,45,78]
// let a =arr.filter((x)=>{
//     return x%10 ==0
// })
// console.log(a)

// pratice solution 3

// let arr = [2,3,4,5,6,7,8]
// let a =arr.map((value)=>{
//     return value*value
// })

// console.log(a)

// pratice solution 5

let arr = [1,2,3,4]
let a = arr.reduce((x1,x2)=>{
    return x1*x2
})
console.log(a)