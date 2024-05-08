let domImg=document.getElementById("header");
domImg.style.position="absolute";
domImg.style.left="80%";

var secondImg =document.createElement('img');
secondImg.id="sImg";
secondImg.src="dom.jpg";

document.body.append(secondImg);

let secondDomImg=document.getElementById("sImg");
secondDomImg.style.position="absolute";
secondDomImg.style.top="60%";

let memoList=document.getElementById("nav");
memoList.style.listStyle = "circle";
memoList.style.width= "min-content";
memoList.style.position="absolute";
memoList.style.left="40%";
memoList.style.top="40%";