var myString=prompt("Enter a string ,please:");
var isSensitive=confirm("Do u want to consider case of the entered string or not?");

function isPalindrome(){
const len=myString.length;
if(!(isSensitive)){
    myString=myString.toLowerCase();
}
for(var i=0;i<len/2;i++){
    if(myString[i]!=myString[len-(i+1)]){
        return "not palindrome";
    }
}
return "Palindrome";
}

console.log(isPalindrome());
document.write("your string "+myString+" is "+isPalindrome());




