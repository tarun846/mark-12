const quizForm=document.querySelector(".quiz-form");
const submitButton=document.querySelector("#submit-answer-btn");
const outputEl=document.querySelector("#output");

const correctAnswers=["90","right angle","one right angle","12,16,20","equilateral"];

function calculateScore(){
    let score=0;
    let index=0;
    let message="";
    const formResults=new FormData(quizForm);
    for(let value of formResults.values()){
        // if(value==="") {message="Pls mark all the questions.";break;}
        
        if(value===correctAnswers[index]) score++;
        index++;
    }
    // console.log(score);
    message="Your score is :"+score;
    outputEl.innerText=message;
}
submitButton.addEventListener("click",calculateScore);
