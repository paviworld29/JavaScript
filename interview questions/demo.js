function display(res){
    console.log(res)
}
function mycalc(a,b,myfun){
    c=a+b;
    myfun(c);
}
mycalc(10,2, display);