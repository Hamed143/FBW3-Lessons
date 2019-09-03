$(document).ready(function(){

    $("select").change(function(){
        // alert("you select a city "+ $(this).val());
        $("p").text("you selected the city: "+$(this).val());
        $("p").show().fadeOut(1000);
        // $("p").hide().fadeIn(1000);
    });
});

// without jQuery
// let selectElement = document.querySelector('select');
// selectElement.addEventListener('chnge',function() {
//   alert("you selected "+ this.value);
// });

// Another way
// let selectElement = document.querySelector('select');
// selectElement.onchange= function(){
//     alert("you selected "+ this.value);
// }
