const  hello =()=>{
console.log("hey are you ? i am good thank you")
}

function onePlusAvg(x,y){
    console.log("done")
    return 1 + (x+y)/2
}

const sum =(p,q) =>{
    return p+q

}
let a = 1;
let b = 2;
let c = 3;

console.log("average of a and b",onePlusAvg(a,b))
console.log("average of b and c",onePlusAvg(b,c))
console.log("average of c and a",onePlusAvg(a,c))
console.log(sum(9,7))
hello();