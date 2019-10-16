let field = document.querySelector("#field");

field.addEventListener("change",autosave);

//Happen when we change the text in our input
function autosave(){
    let save = localStorage.setItem("save",field.value);
}

//Happen at beggining
if (localStorage.getItem("save")){
    field.value = localStorage.getItem("save");
}
