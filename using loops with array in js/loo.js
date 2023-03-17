let num = [3,43,43,53,4]

// for(let i =0; i<num.length; i++){
//     console.log(num[i])
// }
//for each loop in javascript
num.forEach((Element)=>
{
console.log(Element*Element)
})

// array.from

let name = "Harry"
let arr = Array.from(name)
console.log(arr)

//for of

for(let i of num){
    console.log(i)
}

//for in

for(let i in num){
    console.log([i])
}