//to define array we use let car=["bmw", "fiat"];
// let car=new array();


let cars = { brand: "BMW",color:"white", year:"2019"};

let person = { firstName: "Hamed", lastName: "Hossainy" ,age:30, hairColor:"brown"};

console.log(cars);
console.log(cars.brand);
console.log(cars.color);
cars.brand="Mercedes";
console.log(cars.brand);

person.age=66;
person.age+=1;   ///incrrease age 1
person.age=person.age+1;   //// also incrrease age 1
console.log(person.age);
person.city="Hamburg";
console.log(person.city);
person["fav color"]="yellow";
console.log(person);

//// creat object

let language= new Object();   // or let langauge = {};
language.name="English";
language.level="easy";
console.log(language);

let driver = {
    age:30,
    firstname:"Hamed",
    nationality:"AFG",
    car : { brand: "Ferarri", color:"red", year:"2019"}
};

console.log(driver.car);
console.log(driver.car.color);
console.log(driver["car"].year);// another way
console.log(driver["car"]["brand"]); // another way
driver.pet= ["cat","dog"]; // array
console.log(driver.pet[0]); // cat
console.log(driver.pet[1]);  // dog

// we create now array of object

let posts = [
    { litle:"cats are nice", author : "Hamed"},
    { litle:"Dogs are totaly awsome",author:"dog lover"}

];
console.log(posts);
posts[1].title = "Dogs are totaly cute";
console.log(posts);
posts[0].comment="nice post i like it";
console.log(posts);

posts[1].comment= ["nice tank you", "noo i hate you :("];
console.log(posts[1]);
console.log(posts[1].comment[1]);
posts[1].comment[1]= "nice post :)";
console.log(posts[1].comment[1]);
posts[1].comment[1]+="thanks a lot";  //
console.log(posts[1].comment[1]);
document.write(posts);

// WE CREATE STUDENT OBJECT
let student= {

    firstName:"Hamed",
    lastName:"Hossainy",
    id:123456789,
    overThirty:true,
    fullName: function() {
        return "the Fullname is : "+ student.firstName + " " + student.lastName;
    }

};
console.log(student.fullName());

//example : Create a person object. Include the person's first and last name, age, job, city etc. Then print text by retrieving data from the object e.g. "John Smith is a 41 year old engineer living in France".
let Person  ={
    firstName : "Jan Agha",
    lastName : "Gul Agha",
    age : 41,
    proffesion : "Engineer",
    city : "Hamburg",
    info:function() {
        return Person.firstName + " "+ Person.lastName + " is " + Person.age +" year old " + Person.proffesion + " Living in " + Person.city;
    
}

};
console.log(Person.info());
document.write(Person.info());
document.write("<br><br>")


//example 2 :create an array of movies objects
//Each movie should have a title, rating and haswatched property

//you have watched "wanted film " is " 5 stars"
//you have watched "Mother film " is " 4 stars"

let movies = [
    {
        litle:"Titanic",
        haswatched: true,
        rating: 5
    },
    {
        title :"despicable me 3",
        haswatched: true,
        rating: 4
    },
    {
        title:"God Father",
        haswatched: true,
        rating: 5
    },
    {
        title: "Pretty women",
        haswatched: false,
        rating: 3
    },
    {
        title: "Passenger",
        haswatched:true,
        rating: 4
    },
    {
        title:"Harry Potter",
        haswatched: false,
        rating: 5
    },
];

function stars(num){
    let str="";
    for (let i=0; i< num;i++){
        str+="&#9733;";
    }
    return str;
}
movies.forEach(function(film){
    if(film.haswatched==true){
    console.log(" You watched "+ film.title + " has "+ film.rating+ " Stras " + stars(film.rating) );    
}
    else{
        console.log("You have to watch"+ film.title + " has "+film.rating+ " Stars " + stars(film.rating));
    }
    
});

for(let i=0;i< movies.length;i++){
    if(movies[i].haswatched==true){
        document.write("<div style='color:green;font-weight:bold'> you watched " 
        + movies[i].title + " has " + movies[i].rating + " Stars <span style='color:gold;'>" 
        + stars(movies[i].rating) + "</span></div><br><br>");

    }
    else{
            document.write("you have to watched " 
            + movies[i].title + " has " + movies[i].rating + " Stars <span style='color:gold;'>" 
            + stars(movies[i].rating) + "</span><br><br>");
            
        }
}