// create database in indexedDB
let db = null;
const btnCreateDb = document.getElementById("createDB");
const dbInput = document.getElementById("txtDB");
btnCreateDb.addEventListener("click",createDB);

function createDB(){
    const dbName = dbInput.value;
    const dbVersion = document.getElementById("txtVersion").value;
    const request = indexedDB.open(dbName,dbVersion);
    // on upgrade needed 
    request.onupgradeneeded = function(e){
        db = e.target.result;
        alert(`upgrade is called the DB name : ${db.Name} with version : ${dbVersion}`);
        //console.log(db);
        const privateNotes = db.createObjectStore("personal-notes");
    }
    // on success
    request.onsuccess = function(e){
        db = e.target.result;
        alert(`success is called the DB name : ${dbName} with version : ${dbVersion}`);
    }
    // on error
    request.onerror = function(e){
        db = e.target.result;
        alert(`error : ${e.target.error} is found`);
    }

}