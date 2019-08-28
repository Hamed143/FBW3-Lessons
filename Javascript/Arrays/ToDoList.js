debugger;
// we create to do list array
let ToDoList=["Learn Javascript"];
// the first quistion
let userAnswer= prompt("what would you like to do?");
while(userAnswer !=="quit"){
    if(userAnswer=="list"){
        printlist();
    }
    else if(userAnswer=="new"){
        addnew();
    }
    else if(userAnswer=="delete"){
        deltodo();
    }
    userAnswer= prompt("what would you like to do?");
}
console.log("okay you close the app!!!");
 
function printlist(){
    ToDoList.forEach( function(item){
        console.log('************');
        console.log(item);
        console.log('******************');
    });

}
function addnew(){
    let newToDo=prompt("add new text");
    ToDoList.push(newToDo);
    console.log(ToDoList);
}

function deltodo(){
    
    let delTodo=prompt("which item do you whant to delete ");
    var e = ToDoList[delTodo]
    ToDoList.splice(delTodo)

    console.log( e + "delete from the list!!");
}

