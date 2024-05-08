var arr=[,,,,];

for(var i=0;i<5;i++){
    arr[i]= prompt("Enter element number "+(i+1));
    arr[i]=parseFloat(arr[i]);
}

console.log(arr);

document.write(`
<h1>Sorting</h1>
<hr>
<span style="color: red;">entered values</span>
`);
document.write(arr);

//ascending
function ascending() {
    arr.sort((a,b)=>a-b);
    return arr;
}

console.log(ascending());

//descending
function descending() {
    arr.sort((a,b)=>b-a);
    return arr;
}

console.log(descending());

document.write(`<p><span style="color: red;">ascending order</span> `);
document.write(ascending()+"</p>");
document.write(`
<p><span style="color: red;">descending order</span> `);
document.write(descending()+"</p>");