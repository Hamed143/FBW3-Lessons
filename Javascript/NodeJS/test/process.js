// function run(){
//     let counter = 0;
//     setInterval(() =>{
//         counter ++ ;
//         console.log(counter);
//         if(counter === 100){
//             process.exit();
//         }
//     } , 100 )
// }
// run();

let command = process.argv[2];
if(command === 'fly'){
    console.log('flying ...');
}else if(command === 'drive'){
    console.log('driving ...')
}else if(command === 'sendEmail'){
    console.log('Sending ...')
}