let person = [ {  name: "Anna", work:"doctor"},

              {name : "Eric",work:"Hair Dresser"},
              {  name:"David",work:"web developer"},
              {  name:"Hamed Jan",work:"web developer"}

            ];

function isWebDeveloper(employee){  // this function is return true or false

      return employee.work=="web developer";
}
console.log("the web developer is :  "+person.find(isWebDeveloper).name);
console.log("the index of the web developer is :  "+person.findIndex(isWebDeveloper));



///////// findIndex()   return the first index when the test is passed

 // after reverse the array  :
 person.reverse();  console.log(person);
 console.log("the web developer is :  "+person.find(isWebDeveloper).name);
// after reverse the array :
console.log("the index of the web developer is : "+person.reverse().findIndex(isWebDeveloper));

console.log(person.filter(isWebDeveloper));   // we search for all web developers

let age = [15,18,30,55,60,13,22,75,70];

function canDrive(driverAge){
    return (driverAge >= 18 && driverAge<=70 ) ;
}
let drivers = age.filter(canDrive);
console.log(drivers.sort());
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// array.reduce(function)
let cities = [
    {
        city : "Hamburg",
        population : 1000000
    },
    {
        city : "Berlin",
        population: 2000000
    },
    {
        city : "Stuttgart",
        population : 3000000
    },
];

function sumOfpopulation(total,num){
    return total + num.population
}
let allpopulation = cities.reduce(sumOfpopulation,0);
console.log("population is: " + allpopulation);
///////////////////////////////////////////////////////////////////////////////////////////////
let numbers = [8,2,10,20];
function sumNumbers(total,num){
    return total + num;
}
let newArray = numbers.reduce(sumNumbers); // the sum 40
console.log(newArray);

reduceNumbers = numbers.reduce(sumNumbers,10); // the sum with initial vlaue : 10 // the sum is : 50
console.log(reduceNumbers);

//////////////////////////////////////////////////////////////////////////////////////////////
let names= ["Alice","Bob","John","Alice","Carl","Bob"];
// names["Alice"]=2
//the expected result is { "Alice:2","bob:2","john:1","Carl:1"}

function countNames(allNames,name){
    if(name in allNames){  // if the name is repeated
        allNames[name]++;
    }
    else{
        allNames[name]=1;
    }
    return allNames;
}
let countedNames= names.reduce(countNames,{});
console.log(countedNames);
//////////////////////////////////////////////////////////////////
let arr= [2,4,8,10];


let multi = (number) => { return number * 2;}
let multi = number => { return number * 2;}

let callMe = () => { console.log("Hello"); }
///////////////////////////////////////////////////////////////

var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    ''

]
