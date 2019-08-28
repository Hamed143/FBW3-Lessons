console.log(this);

let person = {
   firstName:"Sayed Hamed",
   lastName:"Hossainy",
   age: "31",
   fullName:function(){
       console.log("here we get the fullName");
       console.log(this.firstName+" "+this.lastName);

   }
};

console.log(person.firstName);
console.log(person.fullName());

let car ={
   name:"BMW",
   maxspeed:"250",
   color:"blue",
   model:"i7"
}
car.year=2019;
console.log(car);
console.log(car.year);

car.info=function(){
  // this . model="i7";
   return this.name+" "+this.color+" "+this.model;

}
console.log(car.info());

let Benz = {

   name:"Benz",
   color:"Black",
   model:"A6",
}
console.log(car.info.call(Benz));
//////////////////////////////////////////////////////////////
let btn = document.getElementById("myBtn");
let body= document.getElementsByTagName("body")[0];

btn.addEventListener("click",function(){

    this.style.background="red";
    this.style.color="white";
    this.style.fontSize="1.7em";
    body.style.background="green";
    //this.parentElement.remove(); // to remove the parent element to remove this
    this.remove(); // to remove the current element button
});