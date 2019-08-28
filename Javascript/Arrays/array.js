//define Array in Javascript

let colors= new Array ("red","blue","green","yellow");

let Colors= ["red","blue","green","yellow"];

console.log(colors);

// adding the white color to the end of color Array

colors.push('white');

console.log(colors);

let myColor=colors[0];

let mydiv="<div style='background:" + myColor +"'> "+ myColor +" </div><br>"; 
let mydiv1="<div style='background:" + colors[1] +"'> "+ colors[1] +" </div><br>";
let mydiv2="<div style='background:" + colors[2] +"'> "+ colors[2] +" </div><br>";
let mydiv3="<div style='background:" + colors[3] +"'> "+ colors[3] +" </div>";

document.write(mydiv);
document.write(mydiv1);
document.write(mydiv2);
document.write(mydiv3);

{}