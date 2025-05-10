let a = prompt("what is your age");
a = parseInt(a)
if(a<0){
    alert("this is an invalid age. ")
}else if (a<9){
    alert("Too young to even think of driving.")
}else if (a<18 && a>=9){
    alert("you can think of driving a car in next few years.")
}else{
    alert("you can drive.")
}
console.log("DONE")