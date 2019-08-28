let pNumber=document.getElementById("number");
let pName=document.getElementById("name");
let saveBtn=document.getElementById("save");
let delBtn=document.getElementById("delete");

saveBtn.addEventListener("click",function(){

   localStorage.setItem(pNumber.value,pName.value);
   console.clear();
   showInfo();
});
delBtn.addEventListener("click",function(){
   localStorage.clear();
   showInfo();
});

function showInfo(){
   let storage = localStorage;
   for (let i = 0 ; i< storage.length ; i++){
      console.log(storage.key()+" : " + storage.getItem(storage.key(i)) );
   }
}
////////////////////////////////////////////////////////////////////////////////////////
let brand = document.getElementById("brand");
let addBrand=document.getElementById("add");

let cars = [];
addBrand.addEventListener("click",function(){
   cars.push(brand.value);
   localStorage.setItem("cars",cars);
   this.document.getElementById("carsInfo").innerHTML=localStorage.getItem("cars");
});
////////////////////////////////////////////////////////
localStorage.setItem('Name', 'testing 1');
localStorage.setItem('age', 'testing 2');
localStorage.setItem('job', 'testing 3');

for(var i in localStorage)
{
    console.log(localStorage[i]);
}

for(var i=0, len=localStorage.length; i<len; i++) {
    var key = localStorage.key(i);
    var value = localStorage[key];
    console.log(key + " => " + value);
}
//////////////////////////////////////////////////////////////////////////////////////
localStorage.setItem('aField',document.getElementById('myKey').value);
for (let i=0, iC=localStorage.length; i<iC; ++i) { 
   let storageKey = localStorage.key(i);
   console.log(storageKey + ' : ' + localStorage.getItem(storageKey) );
}
let keys = Object.keys(localStorage);
keys.forEach(function(key){
    console.log(key + " : " + localStorage.getItem(key));
});