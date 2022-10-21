const sideInputone=document.querySelector(".side-inputone");
const sideInputtwo=document.querySelector(".side-inputtwo");
const hypotenuseBtn=document.querySelector("#hypotenuse-btn");
const outputEl=document.querySelector("#output");

function calculateHypotenuse(){
    const lengthOfHypotenuse= Math.sqrt((sideInputone.value*sideInputone.value)+(sideInputtwo.value*sideInputtwo.value));
     console.log(lengthOfHypotenuse);
    outputEl.innerText="The length of hypotenuse: "+lengthOfHypotenuse;

}
hypotenuseBtn.addEventListener('click' , calculateHypotenuse )