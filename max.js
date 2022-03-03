var teach = 700;
var stud = 680;
var ovi = 590;
var max = Math.max(teach,stud,ovi);
console.log(max);

if(teach>stud){
    if(teach>ovi){
        console.log("Teah is bigger");
    }
    else{
        console.log("Ovi is bigger");
    }
}
else{
    if(stud>ovi){
        console.log("Stud is bigger");
    }
    else{
        console.log("Ovi is bigger");
    }
}

