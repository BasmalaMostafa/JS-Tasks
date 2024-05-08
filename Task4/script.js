var numOfPersons=prompt("Enter no. of persons:");

var num=parseInt(numOfPersons);

var perName;
var age;
let row;


function getAge(){
    age=prompt("Enter user "+(i+1)+" age");
        if(!(age>10 && age<60)){
            while(true){
                alert("Your age should be >10 and <60, so enter valid one please");
                age=prompt("Enter user "+(i+1)+" age");
                if(age>10 && age<60){
                    break;
                }
            }
        }
}

var i=0;
do{
    perName=prompt("Enter user "+(i+1)+" name");

    if(perName.length>3 && perName.length<10){
        getAge();
    }else{
        while(true){
            alert("Name should be >3 and <10, so enter valid one please");
            perName=prompt("Enter user "+(i+1)+" name");
            if(perName.length>3 && perName.length<10){
                getAge();
                break;
            }
        }
    }
    var tabBody=document.getElementById("tbody");

    row=document.createElement("tr");
    var pName=document.createElement("td");
    pName.textContent=perName;
    row.append(pName);

    var pAge=document.createElement("td");
    pAge.textContent=age;
    row.append(pAge);

    //row="<tr><td>"+perName+"</td><td>"+age+"</td></tr>";
    //console.log(row);
    //document.write(row);

    tabBody.append(row);
    i++;
}while(i<num);


document.write("</table>");