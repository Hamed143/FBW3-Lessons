let food = new Array("Pizza","Kebab","Döner","Falafel","Kartofel Salat","Briani");

let foodLength=food.length;
for(let counter=0 ; counter <foodLength ; counter ++)
{
    document.write(food[counter]+ "<br>");
}

///////////////////////////////////////////////////////////////

let colors= new Array ("red","blue","green","yellow","black");
colors.push('pink')
// let colors= ["red","blue","green","yellow","black"];

document.write('<hr>');
for(i=0 ; i < colors.length ; i++){
    document.write(colors[i]+ '<br>');
}
let myColor=colors[0];
document.write('<hr>'); let div;
for(i=0 ; i < colors.length ; i++){
    div="<div style='width:"+i+1*60+"background:"+colors[i]+"'>" + colors[i]+ "</div>";
    document.write(div);
  
    
}

for(let i=0;i< veggieFood.length ; i++){
    
}********