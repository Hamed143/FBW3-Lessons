function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
 
        color += letters[Math.floor(Math.random() * 16)];
 
    }
 
    return color;
 
 }
 document.getElementById("link").accessKey="g";


 let akey= document.getElementById("link").accessKey;

 console.log(akey); // g
 
 let hideImg= document.querySelectorAll("button")[0];
 let showImg=document.querySelectorAll("button")[1];
 let showHide=document.querySelectorAll("button")[2];
 let img = document.querySelector("img");

 showHide.addEventListener("click",function(){
    if(img.style.display=="none"){
        img.style.display="block";
    }
    else{
        img.style.display="none";
    }
 });

 showImg.addEventListener("click",function(){
     img.style.display="block";
 });

 hideImg.addEventListener("click",function(){
     img.style.display="none";
 });

 //with Arrow function

 hideImg.addEventListener("click",()=>img.style.display="none");

/////////////////////////////////////////////////////////////
let btn = document.getElementById("myBtn");
btn.addEventListener("click",function(){
    document.querySelector("body").style.background= getRandomColor();
});
///////////////////////////////////////////////////////////////////////////////

window.addEventListener("resize",function(){
    document.querySelector("body").style.background= getRandomColor();
});
window.addEventListener("resize",function(){
    let w=window.innerWidth;
    let h=window.innerHeight;
    this.console.log("the width is : "+w);
    this.console.log("the height is : "+h);
    document.getElementById("size").innerHTML= "width = "+ w + "px <br> height = "+h+" px";
});