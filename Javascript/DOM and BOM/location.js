function loadWebsite(){
    
    window.location.assign("https://www.github.com");
    window.location.assign("https://www.google.com");
    window.location.assign("https://www.bing.com");

}
let myBtn = document.getElementById("location");

myBtn.addEventListener("click",loadWebsite);

let btn=document.createElement("button");
btn.innerHTML="learn javascript";

btn.addEventListener("click",function(){
    window.location.href="https://www.tutorialrepublic.com";
});
document.body.appendChild(btn);

document.addEventListener("load",setTimeout(loadWebsite,4000));


