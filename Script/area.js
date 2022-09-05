const base=document.querySelector("#baseInput");
const height=document.querySelector("#heightInput");
const Areabutton=document.querySelector("#area-btn");
const outputEl=document.querySelector("#output");

function calculateArea(){
    const area= (parseInt(base.value)*parseInt(height.value))/2;
    if(Number(base.value)<0||Number(height.value)<0) outputEl.innerText="Base or Height can't be negative.";
    else if(Number(base.value)===0|| Number(height.value)===0) outputEl.innerText="Pls enter the input correctly";
    else outputEl.innerText="The area is :"+area;
}

Areabutton.addEventListener("click",calculateArea);
