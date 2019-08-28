let input1=document.getElementById("input1");
let input2=document.getElementById("input2");
let input3=document.getElementById("input3");
let input4=document.getElementById("input4");


const person = {
    name: "Hamed",
    age: 5,
    job: "student",
    location: "Hamburg",

}

window.localStorage.setItem('Info', JSON.stringify(person));