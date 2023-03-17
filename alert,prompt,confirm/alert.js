alert("hello your js work");
let a = parseInt(prompt("enter a here", 578));
document.write(a);
alert("you enterd a type of" + typeof a);
let a1 = confirm("do you want to write it to the page");
if (a1) {
  document.write(a);
} else {
  document.write("please allow me to write");
}
