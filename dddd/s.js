const word = "hello" ; 
console.log( reverseString(word) );

function reverseString(a){

    let r="";
if(a ==" " || a.length==1){
return a ;
}
if(typeof a =="string") {
  r= a.split("").reverse().join("")
return r ; 
}else {
    return "null";
}
} 
//