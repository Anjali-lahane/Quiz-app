const questions = [
    {
        question:"which is largest animals in the world?",
        answers: [
             { Text: "shark", correct: false},
             { Text: "blue whale ", correct:true}, 
             { Text: "elephant", correct:false},
             { Text: "Giraffe", correct: false},
        ] 
    },
    {
        question:"which is smallest country in the world?",
        answers: [
             { Text: "vactican city", correct: true},
             { Text: "bhatan ", correct:false}, 
             { Text: "nepal", correct:false},
             { Text: "shri lanka", correct: false},
        ] 
    },
    {
        question:"which is largest desert in the world?",
        answers: [
             { Text: "kalahari", correct: false},
             { Text: "Gobi", correct:false}, 
             { Text: "sahara", correct:false},
             { Text: "Anatarctica", correct: true},
        ] 
    },
    {
        question:"which is smallest continent in the world?",
        answers: [
             { Text: "Asia", correct: false},
             { Text: "Australia ", correct:true}, 
             { Text: "Arctic", correct:false},
             { Text: "Africa", correct: false},
        ] 
    }
];

const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-button");
const nextbutton = document.getElementById("next-btn");


let currentQuestionIndex =0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showQuestion();
}
 function showQuestion()
 {
    resetstate();
    let currentQuestion =questions[ currentQuestionIndex]
    let questionNo =currentQuestionIndex+1;
    questionElement.innerHTML=questionNo +" . "+currentQuestion.question;

    currentQuestion.answers.forEach( answer =>{
        const button =document.createElement("button");
        button.innerHTML=answer.Text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectanswer);
    });
 }
 function resetstate(){
    nextbutton.style.display ="none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild( answerbuttons.firstChild);
    }
 }
 function selectanswer(e){
    const selsctedbtn =e.target;
    const iscorrect =selsctedbtn.dataset.correct==="true";
    if(iscorrect){
        selsctedbtn.classList.add("correct");
        score++;
    }else{ 
        selsctedbtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button=>{
        if( button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextbutton.style.display ="block";
 }

 function showscore(){
    resetstate();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="play again";
    nextbutton.style.display ="block";
 }

function handlenextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showscore();
    }
}

nextbutton.addEventListener("click",()=>{
    if( currentQuestionIndex < questions.length){
        handlenextbutton();
    }else{
        startQuiz();
    }
});

 startQuiz();


