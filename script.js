const questions = [
    {
        question: "पानी के विद्युत अपघटन से कौन-कौन सी गैसें निकलती हैं?",
        answers: [
            { text: "हाइड्रोजन और ऑक्सीजन", correct: true },
            { text: "ऑक्सीजन और नाइट्रोजन", correct: false },
            { text: "हाइड्रोजन और कार्बन डाइऑक्साइड", correct: false },
            { text: "नाइट्रोजन और कार्बन डाइऑक्साइड", correct: false }
        ]
    },
    {
        question: "पौधों में भोजन निर्माण की प्रक्रिया को क्या कहते हैं?",
        answers: [
            { text: "श्वसन", correct: false },
            { text: "प्रकाश संश्लेषण", correct: true },
            { text: "वाष्पोत्सर्जन", correct: false },
            { text: "अंकुरण", correct: false }
        ]
    },
    {
        question: "मानव हृदय में कुल कितने कक्ष होते हैं?",
        answers: [
            { text: "दो", correct: false },
            { text: "चार", correct: true },
            { text: "तीन", correct: false },
            { text: "पाँच", correct: false }
        ]
    },
    {
        question: "विद्युत धारा की मात्रक क्या है?",
        answers: [
            { text: "वोल्ट", correct: false },
            { text: "एम्पीयर", correct: true },
            { text: "ओम", correct: false },
            { text: "वाट", correct: false }
        ]
    },
    {
        question: "पृथ्वी का सबसे बाहरी परत कौन सा है?",
        answers: [
            { text: "मेंटल", correct: false },
            { text: "क्रस्ट", correct: true },
            { text: "कोर", correct: false },
            { text: "अस्थेनोस्फीयर", correct: false }
        ]
    },
    {
        question: "सौरमंडल का सबसे बड़ा ग्रह कौन है?",
        answers: [
            { text: "शनि", correct: false },
            { text: "बृहस्पति", correct: true },
            { text: "अरुण", correct: false },
            { text: "वरुण", correct: false }
        ]
    },
    {
        question: "शरीर का कौन सा अंग इंसुलिन हार्मोन स्रावित करता है?",
        answers: [
            { text: "अग्न्याशय", correct: true },
            { text: "यकृत", correct: false },
            { text: "वृक्क", correct: false },
            { text: "प्लीहा", correct: false }
        ]
    },
    {
        question: "लेंस का फोकस दूरी किसमें मापा जाता है?",
        answers: [
            { text: "मीटर", correct: false },
            { text: "डायॉप्टर", correct: true },
            { text: "न्यूटन", correct: false },
            { text: "एम्पीयर", correct: false }
        ]
    },
    {
        question: "जल का रासायनिक सूत्र क्या है?",
        answers: [
            { text: "H₂O", correct: true },
            { text: "CO₂", correct: false },
            { text: "NaCl", correct: false },
            { text: "H₂SO₄", correct: false }
        ]
    },
    {
        question: "चुंबक के दो ध्रुव कौन से होते हैं?",
        answers: [
            { text: "पूर्व और पश्चिम", correct: false },
            { text: "उत्तर और दक्षिण", correct: true },
            { text: "ऊपर और नीचे", correct: false },
            { text: "दक्षिण और पश्चिम", correct: false }
        ]
    },
    // --- 20 और प्रश्न ---
    {
        question: "ध्वनि की चाल वायु में लगभग कितनी होती है?",
        answers: [
            { text: "343 मी/से", correct: true },
            { text: "100 मी/से", correct: false },
            { text: "500 मी/से", correct: false },
            { text: "600 मी/से", correct: false }
        ]
    },
    {
        question: "दर्पण में बनने वाली छवि को क्या कहते हैं?",
        answers: [
            { text: "काल्पनिक", correct: true },
            { text: "वास्तविक", correct: false },
            { text: "आभासी", correct: false },
            { text: "छाया", correct: false }
        ]
    },
    {
        question: "मनुष्य के शरीर में सबसे बड़ा अंग कौन सा है?",
        answers: [
            { text: "हृदय", correct: false },
            { text: "यकृत", correct: false },
            { text: "त्वचा", correct: true },
            { text: "फेफड़ा", correct: false }
        ]
    },
    {
        question: "नाभिकीय ऊर्जा किस प्रक्रिया से प्राप्त होती है?",
        answers: [
            { text: "वाष्पीकरण", correct: false },
            { text: "परमाणु विखंडन", correct: true },
            { text: "दहन", correct: false },
            { text: "संवहन", correct: false }
        ]
    },
    {
        question: "मानव रक्त का pH मान लगभग कितना होता है?",
        answers: [
            { text: "6.0", correct: false },
            { text: "7.4", correct: true },
            { text: "8.0", correct: false },
            { text: "5.5", correct: false }
        ]
    },
    {
        question: "मांसपेशियों के संकुचन के लिए कौन सा आयन जिम्मेदार है?",
        answers: [
            { text: "सोडियम", correct: false },
            { text: "कैल्शियम", correct: true },
            { text: "पोटैशियम", correct: false },
            { text: "क्लोरीन", correct: false }
        ]
    },
    {
        question: "वायु में सबसे अधिक मात्रा में कौन सी गैस होती है?",
        answers: [
            { text: "ऑक्सीजन", correct: false },
            { text: "नाइट्रोजन", correct: true },
            { text: "कार्बन डाइऑक्साइड", correct: false },
            { text: "हाइड्रोजन", correct: false }
        ]
    },
    {
        question: "विद्युत प्रतिरोध का मात्रक क्या है?",
        answers: [
            { text: "एम्पीयर", correct: false },
            { text: "ओम", correct: true },
            { text: "वोल्ट", correct: false },
            { text: "वाट", correct: false }
        ]
    },
    {
        question: "मानव शरीर में रक्त शुद्ध करने का कार्य कौन सा अंग करता है?",
        answers: [
            { text: "हृदय", correct: false },
            { text: "वृक्क", correct: true },
            { text: "यकृत", correct: false },
            { text: "फेफड़े", correct: false }
        ]
    },
    {
        question: "किस धातु का उपयोग विद्युत तारों में सबसे अधिक होता है?",
        answers: [
            { text: "लोहा", correct: false },
            { text: "ताँबा", correct: true },
            { text: "एल्यूमिनियम", correct: false },
            { text: "जस्ता", correct: false }
        ]
    },
    {
        question: "पौधों में जल का ऊपर की ओर गमन किस प्रक्रिया से होता है?",
        answers: [
            { text: "संचलन", correct: false },
            { text: "वाष्पोत्सर्जन खिंचाव", correct: true },
            { text: "संवहन", correct: false },
            { text: "सरणीकरण", correct: false }
        ]
    },
    {
        question: "द्रव्यमान और भार में क्या अंतर है?",
        answers: [
            { text: "द्रव्यमान स्थान पर निर्भर करता है", correct: false },
            { text: "भार गुरुत्वाकर्षण पर निर्भर करता है", correct: true },
            { text: "द्रव्यमान बदलता है", correct: false },
            { text: "दोनों समान हैं", correct: false }
        ]
    },
    {
        question: "विटामिन D की कमी से कौन सी बीमारी होती है?",
        answers: [
            { text: "रक्ताल्पता", correct: false },
            { text: "रिकेट्स", correct: true },
            { text: "स्कर्वी", correct: false },
            { text: "नाईट ब्लाइंडनेस", correct: false }
        ]
    },
    {
        question: "परमाणु संख्या किस पर निर्भर करती है?",
        answers: [
            { text: "प्रोटॉन की संख्या", correct: true },
            { text: "न्यूट्रॉन की संख्या", correct: false },
            { text: "इलेक्ट्रॉन की संख्या", correct: false },
            { text: "नाभिक के द्रव्यमान पर", correct: false }
        ]
    },
    {
        question: "पृथ्वी का उपग्रह कौन सा है?",
        answers: [
            { text: "चंद्रमा", correct: true },
            { text: "मंगल", correct: false },
            { text: "शुक्र", correct: false },
            { text: "गुरु", correct: false }
        ]
    },
    {
        question: "किस गैस को ग्रीनहाउस गैस कहते हैं?",
        answers: [
            { text: "कार्बन डाइऑक्साइड", correct: true },
            { text: "ऑक्सीजन", correct: false },
            { text: "नाइट्रोजन", correct: false },
            { text: "हाइड्रोजन", correct: false }
        ]
    },
    {
        question: "लाल रक्त कणिकाओं में कौन सा वर्णक पाया जाता है?",
        answers: [
            { text: "क्लोरोफिल", correct: false },
            { text: "हीमोग्लोबिन", correct: true },
            { text: "मेलानिन", correct: false },
            { text: "कैरेटिन", correct: false }
        ]
    },
    {
        question: "ग्लोबल वार्मिंग का मुख्य कारण कौन सी गैस है?",
        answers: [
            { text: "ऑक्सीजन", correct: false },
            { text: "कार्बन डाइऑक्साइड", correct: true },
            { text: "हाइड्रोजन", correct: false },
            { text: "हीलियम", correct: false }
        ]
    },
    {
        question: "जल चक्र में वाष्पीकरण किसका उदाहरण है?",
        answers: [
            { text: "भौतिक परिवर्तन", correct: true },
            { text: "रासायनिक परिवर्तन", correct: false },
            { text: "नाभिकीय परिवर्तन", correct: false },
            { text: "जैविक परिवर्तन", correct: false }
        ]
    },
    {
        question: "बिजली की खोज किसने की थी?",
        answers: [
            { text: "बेंजामिन फ्रैंकलिन", correct: true },
            { text: "न्यूटन", correct: false },
            { text: "गैलीलियो", correct: false },
            { text: "एडिसन", correct: false }
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
timerElement.textContent = ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')};

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
progressBar.style.width = ${progress}%;
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

