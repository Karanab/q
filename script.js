const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the largest mammal?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Hippopotamus", correct: false }
        ]
    },
    {
        question: "Which language runs in a web browser?",
        answers: [
            { text: "Java", correct: false },
            { text: "C", correct: false },
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true }
        ]
    }
];

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultElement = document.getElementById('result');
const timerElement = document.getElementById('time');
const progressBar = document.getElementById('progress-bar');
const scoreElement = document.getElementById('score');
const totalElement = document.getElementById('total');
const correctElement = document.getElementById('correct');
const wrongElement = document.getElementById('wrong');
const timeTakenElement = document.getElementById('time-taken');

let shuffledQuestions, currentQuestionIndex;
let score, wrongAnswers;
let timer, timeLeft, quizStartTime;

// Quiz duration in seconds
const QUIZ_DURATION = 60;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hide');
    resultElement.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    wrongAnswers = 0;
    
    // Start timer
    timeLeft = QUIZ_DURATION;
    quizStartTime = new Date().getTime();
    updateTimer();
    timer = setInterval(updateTimer, 1000);
    
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    updateProgressBar();
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft <= 0) {
        clearInterval(timer);
        showResult();
    } else {
        timeLeft--;
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
    
    nextButton.classList.add('hide');
}

function nextQuestion() {
    currentQuestionIndex++;
    updateProgressBar();
    
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    
    if (correct) {
        score++;
    } else {
        wrongAnswers++;
    }
    
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
        button.disabled = true;
    });
    
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        setTimeout(showResult, 1000);
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function showResult() {
    clearInterval(timer);
    
    const quizEndTime = new Date().getTime();
    const timeTaken = Math.floor((quizEndTime - quizStartTime) / 1000);
    const actualTimeTaken = QUIZ_DURATION - timeLeft;
    
    questionContainerElement.classList.add('hide');
    resultElement.classList.remove('hide');
    
    scoreElement.textContent = score;
    totalElement.textContent = shuffledQuestions.length;
    correctElement.textContent = score;
    wrongElement.textContent = wrongAnswers;
    timeTakenElement.textContent = actualTimeTaken;
    
    // Update progress bar to 100%
    progressBar.style.width = '100%';
}
