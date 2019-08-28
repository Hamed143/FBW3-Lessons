function makeCounter() {
    let count =0;
    return function (){
        //return n=n*2 ;
        return count++;
    }
    // function incr(){
    //     return incr.currentValue++;
    // }
    // incr.currentValue = 1;
    // return incr;
}

let counter = makeCounter(); 
console.log(counter()); //0
console.log(counter()); //1

let counter2 = makeCounter();
console.log(counter()); //2
console.log(counter()); //3
/////////////////////////////////////////////////////////////////

function Counter() {
    let count = 0;
    this.up = function() {
        return ++count;
    };
    this.down = function() {
        return --count;
    };
    }
    let counter3 = new Counter();
    console.log( counter3.up() ); // 1
    console.log( counter3.up() ); // 2
    console.log( counter3.down() ); // 1
////////////////////////////////////////////////////////
function sum (a){
    return  function(b){
        return a + b;
    }
  }
  console.log(sum(1)(2));
  console.log(sum(5)(-1));
