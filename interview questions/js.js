class student{
    constructor(a,b){
        this.first=a;
        this.second=b;
    }

sum(){
    return (this.first+this.second);
}

sub(){
    return (this.first-this.second);
}


}


var obj = new student(100,2);
console.log(obj.sum());
obj.sub();