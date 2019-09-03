
    // function getRandomColor(){
    //     for (i = 0; i < 4; i++){
    //         let div = document.createElement("div");
    //         div.textContent = "#ccddff";
    //         div.className = "box";
    //         div.style.background = random();

    //         let main = document.getElementById("main");
    //         main.appendChild(div);
    //  }
    var r,g,b,cstring;
    function colapply(){
    color();
    r=newcolor.slice(1,3);
    g=newcolor.slice(3,5);
    b=newcolor.slice(5,7);
    r=parseInt(r,16);
    g=parseInt(g,16);
    b=parseInt(b,16);
        
    cstring="rgb("+r+","+g+","+b+")";
    $(".colorc").html("<"+"div class="+"'"+"colorc1"+"'"+">"+"<"+"/"+"div"+">"+newcolor+"<span class='rgb'>"+cstring+"</span>");
    $("body").css({
    "background":newcolor
    });
    $(".colorc").css({
    "color":newcolor
    });
    
    $(".colorc1").css({
    "background":cstring
    });
    
    }
    var newcolor;
    function color(){
    newcolor="#"+(Math.random()*0xFFFFFF<<0).toString(16);
    if(newcolor.length<7){
    color();
    }
    }
    $(".colorc").click(colapply);
    colapply();
    /** code by webdevtrick ( https://webdevtrick.com ) **/
    var r,g,b,cstring;
    function colapply(){
    color();
    r=newcolor.slice(1,3);
    g=newcolor.slice(3,5);
    b=newcolor.slice(5,7);
    r=parseInt(r,16);
    g=parseInt(g,16);
    b=parseInt(b,16);
        
    cstring="rgb("+r+","+g+","+b+")";
    $(".colorc").html("<"+"div class="+"'"+"colorc1"+"'"+">"+"<"+"/"+"div"+">"+newcolor+"<span class='rgb'>"+cstring+"</span>");
    $("body").css({
    "background":newcolor
    });
    $(".colorc").css({
    "color":newcolor
    });
     
    $(".colorc1").css({
    "background":cstring
    });
     
    }
    var newcolor;
    function color(){
    newcolor="#"+(Math.random()*0xFFFFFF<<0).toString(16);
    if(newcolor.length<7){
    color();
    }
    }
    $(".colorc").click(colapply);
    colapply();