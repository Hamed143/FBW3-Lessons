let input=document.querySelector("#name");
input.addEventListener("click",inputClick);
function inputClick(e){
   let myEvent=e.target.className;
   console.log(myEvent);
}
input.addEventListener("keyup",inputkey);
function inputkey(e){
   let k=e;
   console.log(k.target.value);
   document.getElementById("myDiv").innerHTML="<h1>"+e.target.value+"</h1>";
}
input.addEventListener("mousemove",mouseInput);
function mouseInput(e){
   let m=e;
   console.log(m);
   input.style.border="solid 10px rgb("+m.offsetX+","+m.offsetY+",255"+")";
   document.body.style.background=`rgb(${m.offsetX},${m.offsetY},000)‪`;
}
let btn=document.querySelector("form");
btn.addEventListener("submit",inputsubmit);

function inputsubmit(e){
    e.preventDefault();
   console.log(e.type);
   
}