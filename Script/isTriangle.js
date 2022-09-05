const inputs=document.querySelectorAll(".angleInput");
const isTraingleButton=document.querySelector("#isTriangle-button");
const outputEl=document.querySelector("#output");
function calculateSumOfAngles(){
    return parseInt(inputs[0].value)+parseInt(inputs[1].value)+parseInt(inputs[2].value);
}
function isTraingle(){
    const sumOfAngles=calculateSumOfAngles();
    var message;
    if(sumOfAngles==180) message="Yay, the angles form a traingle";
    else message="Oh!!The angles don't form a triangle";
    if(Number(inputs[0].value)<0 || Number(inputs[1].value)<0||Number(inputs[2].value)<0) message="Inputs can't be negative";
    if(Number(inputs[0].value)===0 || Number(inputs[1].value)===0||Number(inputs[2].value)===0) message="Pls enter the input correctly";
    outputEl.innerText=message;
}
isTraingleButton.addEventListener("click",isTraingle);