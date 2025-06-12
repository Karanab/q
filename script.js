const questions = [
    {
        question: "भारत के राष्ट्रपिता किसे कहा जाता है?",
        answers: [
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "महात्मा गांधी", correct: true },
            { text: "सुभाष चंद्र बोस", correct: false },
            { text: "सरदार पटेल", correct: false }
        ]
    },
    {
        question: "विश्व की सबसे लंबी नदी कौन सी है?",
        answers: [
            { text: "अमेजन", correct: false },
            { text: "नील", correct: true },
            { text: "गंगा", correct: false },
            { text: "यांग्त्से", correct: false }
        ]
    },
    {
        question: "भारत का राष्ट्रीय पशु कौन है?",
        answers: [
            { text: "सिंह", correct: false },
            { text: "बाघ", correct: true },
            { text: "हाथी", correct: false },
            { text: "चित्ता", correct: false }
        ]
    },
    {
        question: "भारत के पहले राष्ट्रपति कौन थे?",
        answers: [
            { text: "डॉ. राजेन्द्र प्रसाद", correct: true },
            { text: "डॉ. भीमराव अंबेडकर", correct: false },
            { text: "जवाहरलाल नेहरू", correct: false },
            { text: "सर्वपल्ली राधाकृष्णन", correct: false }
        ]
    },
    {
        question: "विश्व का सबसे बड़ा महाद्वीप कौन सा है?",
        answers: [
            { text: "अफ्रीका", correct: false },
            { text: "एशिया", correct: true },
            { text: "यूरोप", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]
    },
    {
        question: "भारत का गुलाबी शहर कौन सा है?",
        answers: [
            { text: "जोधपुर", correct: false },
            { text: "जयपुर", correct: true },
            { text: "उदयपुर", correct: false },
            { text: "बीकानेर", correct: false }
        ]
    },
    {
        question: "सौरमंडल का सबसे गर्म ग्रह कौन सा है?",
        answers: [
            { text: "बुध", correct: false },
            { text: "शुक्र", correct: true },
            { text: "मंगल", correct: false },
            { text: "बृहस्पति", correct: false }
        ]
    },
    {
        question: "बल्ब का आविष्कार किसने किया?",
        answers: [
            { text: "आइज़क न्यूटन", correct: false },
            { text: "अल्बर्ट आइंस्टीन", correct: false },
            { text: "थॉमस एडिसन", correct: true },
            { text: "निकोला टेस्ला", correct: false }
        ]
    },
    {
        question: "क्षेत्रफल की दृष्टि से भारत का सबसे छोटा राज्य कौन सा है?",
        answers: [
            { text: "गोवा", correct: true },
            { text: "सिक्किम", correct: false },
            { text: "त्रिपुरा", correct: false },
            { text: "मणिपुर", correct: false }
        ]
    },
    {
        question: "पौधे प्रकाश संश्लेषण में कौन सी गैस उपयोग करते हैं?",
        answers: [
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: true },
            { text: "नाइट्रोजन", correct: false },
            { text: "हाइड्रोजन", correct: false }
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
