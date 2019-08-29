let p = document.getElementById('colorCode');
let div = document.getElementById('myColor');


//     function getRandomColor(){
//         let allColors = '012ABCDEF3456789';
//         let color = "#";
//         for (i = 0; i < 6; i++){
//             let x = Math.floor(Math.random() * allColors.length);
//             color +=  allColors[x];
//         };
//             return color;
//      }
Math.randomChoice = function(collection) {
    return collection[Math.floor(Math.random() * collection.length)];
};

function main() {
    setTimeout(function() {
        var elem = Math.randomChoice(['good', 'bad']);
        $('div.' + elem).click();
    }, 30*1000);
}