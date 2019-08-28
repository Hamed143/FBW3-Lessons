// let str = "Hello World";
// console.log(str.length); // 11
// console.log(str[0]); // H

// alert(str.charAt(6)); // return character at specific index  // W

// console.log(str.charCodeAt(0)); // 101

// let str1 = "we are learning";
// let str2 = "javascript";
// let str3 = str1.concat(str2); 

// console.log(str3); // we are learning javascript

// console.log("the index of javascript is" + str3.indexOf("javascript")); // 16
// console.log(str3.indexOf("php"));  // return -1
 
// str3.match("we are learning");

// console.log(str3.search("we"));  // 0

// console.log(str3.search("le")); // 7
// console.log(str3.search("t"));  // 25
// console.log(str3.search(str1)); // 0

// console.log(str3.slice(0,6)); // we are
// console.log(str3.slice(8,15)); // earning

// // split creat array from the string

// console.log(str3);

// let strArray=str3.split(" ");

// console.log(strArray);

// let strArray2 = str3.split("*");

// console.log(strArray2);
// ///////////////////////////////
// let str4= "Hi*How*Are*you";

// let strArray3 = str4.split('*');
// console.log(str4);
// console.log(strArray3);

// // split with limit

// let fruit = " Apple are round and apples are juicy";

// let arrFruit = fruit .split(" "); // we use limit just 3 element

// console.log(arrFruit);  // [ "Apple", "Are", "round"]

// /////////////////////////////////////////////////////////////////////////////////
// // startswith search for a string in the start
// fruit.startsWith("Apple"); // true
// fruit.startsWith("apple");  // false
// //////////////////////////////////////////////
 
// // substr use start and length
// console.log(fruit);
// console.log("with substr(5,10) : "+fruit.substr(5,10)); // are round
// console.log("with slice(5,10) : "+fruit.slice(5,10)); // are

// //substring use start and end
// console.log("fruit.substring(2)= "+fruit.substring(2) );// to the end of the string
// // ple are round and apples are juicy
// console.log("fruit.substring(2,7)="+ fruit.substring(2,7) ); //
// // ple a

// // toUpperCase()
// console.log(fruit.toUpperCase()); // APPLE ARE ROUND AND APPLES ARE JUICY

// // to LowerCase()
// console.log(fruit.toLowerCase()); // apple are round and apples are juicy

// // trim() to remove the whitespaces
// let food="   Döner   Apple   Kebab   Banana   ";
// console.log(food)
// console.log(food.trim());

// // toString to convert object to string
// let colors=["red", "green", "yellow", "gold","black"];
// console.log(colors);
// console.log(colors.toString());

// let text = "I can walk in the park all day!";

/////////////////////////////////////////////////////////////

let shape = document.getElementById("shape");

let start = new Date().getTime();

function makeShapeAppear(){
    document.getElementById("shape").style.display="block";
    let start = new Date().getTime();
}
function appearAfterDelay(){
    setTimeout(makeShapeAppear,2000);
}
appearAfterDelay();
shape.addEventListener("click",function(){
    shape.style.display="none";

shape.addEbentListener("click",function(){
    shape.style.display="none";
    let end = new Date().getTime();
    let timeTaken = (end - start)/1000;
}

document.getElementById("timeTaken").innerHTML=timeTaken;

appearAfterDelay();

});


