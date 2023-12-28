//conceder a variable liek this 
//V
//VA
//VAM
//VAMS
//VAMSY

let userNaem="VAMSY";

for(let i=0;i<userNaem.length;i++){
    console.log(userNaem.substring(0,i+1));
}

//given a string; check if it is a pallendrome or not?

let str = "malayalaM";

let rev = "";

for(i=str.length-1;i>=0;i--){
    rev += str.charAt(i);
}

console.log(rev);

if(rev.toUpperCase()===str.toUpperCase()){
    console.log("It is a pallendrome")
}else{
    console.log("It is not a pallendrome")
}