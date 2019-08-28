// alert(document.documentElement.getAttribute("lang"));

// document.write("hello world");

let body = document.querySelector("body");
///////////////////////////////////////////////////7/////////
let h1 = document.body.childNodes[0];
let newH2=document.createElement("h2");
newH2.innerHTML="the first h2";

///////////////////////////////////////////////////////////////////////////////
let matches = document.getElementsByClassName("test");

for(let i =0 ; i< matches.length;i++){
    matches[i].style.background="yellowgreen";

}
// we will change the color to all p to #fff
for (let el in matches){
    // matches[el].style.color="#fff";
}
// add new paragraph before the last green p and make the background red and the text : 
//new Red paragraph
let lastGreenP = matches[matches.length-1];
let newRedP=document.createElement("p");
newRedP.innerHTML="new Red Paragraph";
newRedP.style.background="red";
document.body.insertBefore(newRedP,lastGreenP);
//////////////////////////////////////////////////////////////////////////////////////77
let paragraph= document.getElementsByTagName("p");
console.log(paragraph.length);
// we will change th e font-weight of all p to bold using for loop

for(let i = 0 ; i < paragraph.length;i++){
    paragraph[i].style.fontWeight="bold";
    paragraph[i].style.border="2px solid black";
}
