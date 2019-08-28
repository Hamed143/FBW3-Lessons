let myDiv = document.getElementById("bannerMessage");
let btn = document.querySelector("button");
let btn2 = document.querySelectorAll("button")[1];

btn.addEventListener("click",function(){

    myDiv.classList.add("banner");  // this will keep the old class and add new class
    btn.classList.add("btn");   // this will keep the old class and add new class

    // myDiv.setAttribute("class","banner");
    // btn.setAttribute("class","btn");
});

btn2.addEventListener("click",function(){
    myDiv.classList.remove("banner");
    btn.classList.remove("btn");
});