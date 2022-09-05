const sideInputs=document.querySelectorAll(".side-input");
const hypotenuseBtn=document.querySelector("#hypotenuse-btn");
const outputEl=document.querySelector("#output");

function calculateHypotenuse(){
    const a=parseInt(sideInputs[0].value)
    const b=parseInt(sideInputs[1].value)
    const sumOfSquares=a*a+b*b;
    const lengthOfHypotenuse=Math.sqrt(sumOfSquares);
    outputEl.innerText="The length of hypotenuse: "+lengthOfHypotenuse;

}

hypotenuseBtn.addEventListener("click",calculateHypotenuse);