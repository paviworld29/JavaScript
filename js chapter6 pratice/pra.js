//practice solution 1
// let  a = parseInt(prompt("enter you age"));
// if(a>18){
//     alert("you can driver")
// }
// else{
//     alert("you can not driver")
// }

//practice solution 2

let age = parseInt(prompt("enter your age"));

let runAgain = true;

const canDrive = (age) => {
  return age >= 18 ? true : false;
};

while (runAgain) {
  let age = parseInt(prompt("enter your age"));
   if(age<0){
    console.error("please enter a valid age");
   }
  if (canDrive(age)) {
    alert("you can drive");
  } else {
    alert("you can not drive");
  }

  runAgain = "do you want to play again";
}
