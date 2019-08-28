let fInput= document.getElementById("firstInput");

let sInput=document.getElementById("secondeInput");

let unit = document.getElementById("unit");

let labels = document.querySelectorAll("label");


unit.addEventListener("change",unitSelect);

function kmConverter(){
    let kmresult=fInput.value * 0.621371;
    sInput.value = kmresult;
}
function mileConverter(){
    let mileResult = sInput.value * 1.60934;
    fInput.value = mileResult;
}
function cmConverter(){
    let cmResult = fInput.value * 0.393701;
    sInput.value=cmResult;

}
function inConverter(){
  let inResult = sInput.value * 2.54;
  fInput.value = inResult;
}
function ceToFaConverter(){
    let faResult = 32 + (fInput.value * 9/5);
    sInput.value=faResult;

}
function faToCeConverter(){
    let ceResult =(5/9) * (sInput.value -32)
  fInput.value = ceResult;

}

// the select onchange 
function unitSelect(){
    console.log(unit.value);
    switch(unit.value){
        case "cm-inch":
            fInput.addEventListener("keyup",cmConverter);
            sInput.addEventListener("keyup",inConverter);
            fInput.removeEventListener("keyup",kmConverter);
            sInput.removeEventListener("keyup",mileConverter);
            fInput.removeEventListener("keyup",ceToFaConverter);
            sInput.removeEventListener("keyup",FaToceConverter);
            labels[1].innerHTML="from CM";
            labels[2].innerHTML="from Inch";
          
        console.log("cm-inch");
        break;
        case "km-mile":
            fInput.addEventListener("keyup",kmConverter);
            sInput.addEventListener("keyup",mileConverter);
            fInput.removeEventListener("keyup",cmConverter);
            sInput.removeEventListener("keyup",inConverter);
            fInput.removeEventListener("keyup",ceToFaConverter);
            sInput.removeEventListener("keyup",FaToceConverter);
            labels[1].innerHTML="from KM";
            labels[2].innerHTML="from Mile";
        break;
        case "temp":
            fInput.addEventListener("keyup",ceToFaConverter);
            sInput.addEventListener("keyup",faToCeConverter);
            fInput.removeEventListener("keyup",kmConverter);
            sInput.removeEventListener("keyup",mileConverter);
            fInput.removeEventListener("keyup",cmToFaConverter);
            sInput.removeEventListener("keyup",inConverter);
            labels[1].innerHTML="temp from CE";
            labels[2].innerHTML="temp from FA";


    }
}