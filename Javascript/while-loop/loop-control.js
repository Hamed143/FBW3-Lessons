
let i =0;
while(i <= 20 ){
    console.log(i);
    i=i+1;
    //i++
}
// break the loop on 5
i=0;
while(i <= 20 ){
    if(i==5){
        break;
    }
    console.log(i);
    i++;
}
///////////////////////////////////////
let c=0;
while(c <= 100){
    
    if(c*9 > 306){
        break;
    }
    console.log(c +"* 9 =" + c * 9);

    c++;
}
////////////////////////////////////////////
let drinkList=["water","tea","coffee","milk","cola","beer","milk","englishTea"];
let counter=-1;
while(counter < drinkList.length-1){

    counter ++;
    if(drinkList[counter]=="milk"){

        continue;
    }
    console.log(drinkList[counter]);
}
function delDrink(drink){
    while(i < drinkList.length){
        i++;
        if(drinkList[i]==drink){
            continue;
        }
        document.write(drinkList[i]+ "<br>");
    }
}
delDrink("coffee");

function addDrink(drinkName){
    
    if(drinkName !=="undefined"){
        
        drinkList.push(drinkName);
        console.log()
    }
    console.log("the array after insert is : <br> " + drinkList);
}