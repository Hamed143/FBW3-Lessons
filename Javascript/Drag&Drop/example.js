// let imgTag=document.getElementById("dragImg");
// let dropDiv=document.querySelectorAll(".dragdrop");
// imgTag.addEventListener("dragstart",start);
​
// for( div of dropDiv) {
//   div.addEventListener("drop",drop);
//   div.addEventListener("dragover",dragOver);  
// }
​
// function start(e){
//     e.dataTransfer.setData("content",e.target.id);   
// ​
// }
// function drop(e){
//     e.preventDefault();
//     let data = e.dataTransfer.getData("content");
//     let img = document.getElementById(data);
//     e.target.appendChild(img);
// }
// function dragOver(e){
//     e.preventDefault();
// }
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);


for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}



function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
