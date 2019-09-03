let input=document.getElementById("input");
let btn=document.getElementById("btn");
btn.addEventListener("click",randomColor);

function randomColor(){
    let num=input.value;
    for (i = 0 ; i < num; i++){
        var div=document.createElement("div");
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.background = getRandomColor();
        div.style.color = "white";
        div.innerHTML = getRandomColor();
        document.getElementById("main").appendChild(div); 
    }
}
function getRandomColor(){
   let allColors = '012ABCDEF3456789';
   let color = "#";
   for (i = 0; i < 6; i++){
       let x = Math.floor(Math.random() * allColors.length);
       color +=  allColors[x];
   };
       return color;
}
