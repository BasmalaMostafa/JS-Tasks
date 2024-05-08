var arr=[,,];

for(var i=0;i<3;i++){
    arr[i]= prompt("Enter element number "+(i+1));
    arr[i]=parseFloat(arr[i]);
}

function sum(){
    var sum=0;
    for(var i=0;i<3;i++){
        sum+= arr[i];
    }
    return sum;
}

function multi(){
    var multi=1;
    for(var i=0;i<3;i++){
        multi*=arr[i];
    }
    return multi;
}

function divide(){
    var div=arr[0];
    for(var i=0;i<2;i++){
        div/=arr[i+1];
    }
    return div;
}

console.log(sum(),multi(),divide());

document.write(`
<h1>Adding - Multiplying - Dividing 3 values</h1>
<hr>
<span style="color: red;">sum of the 3 values</span>
`+arr[0]+"+"+arr[1]+"+"+arr[2]+"="+sum());
document.write(`<p><span style="color: red;">Multiplication of the 3 values</span> `);
document.write(arr[0]+"*"+arr[1]+"*"+arr[2]+"="+multi()+"</p>");
document.write(`<p>
<span style="color: red;">division of the 3 values</span> `);
document.write(arr[0]+"/"+arr[1]+"/"+arr[2]+"="+divide()+"</p>");