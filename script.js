// --- अपने प्रश्न यहाँ डालें ---
// --- अपने प्रश्न यहाँ डालें ---
const questions = [
  {
    question: "पानी का रासायनिक सूत्र क्या है?",
    answers: [
      { text: "H₂O", correct: true },
      { text: "CO₂", correct: false },
      { text: "NaCl", correct: false },
      { text: "HCl", correct: false }
    ]
  },
  {
    question: "पौधे भोजन बनाने के लिए किस प्रक्रिया का उपयोग करते हैं?",
    answers: [
      { text: "प्रकाश संश्लेषण", correct: true },
      { text: "श्वसन", correct: false },
      { text: "वाष्पोत्सर्जन", correct: false },
      { text: "अंकुरण", correct: false }
    ]
  },
  {
    question: "मानव हृदय के कितने कक्ष होते हैं?",
    answers: [
      { text: "दो", correct: false },
      { text: "चार", correct: true },
      { text: "तीन", correct: false },
      { text: "एक", correct: false }
    ]
  },
  {
    question: "सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
    answers: [
      { text: "पृथ्वी", correct: false },
      { text: "बृहस्पति", correct: true },
      { text: "शुक्र", correct: false },
      { text: "शनि", correct: false }
    ]
  },
  {
    question: "विद्युत धारा की इकाई क्या है?",
    answers: [
      { text: "वोल्ट", correct: false },
      { text: "एंपियर", correct: true },
      { text: "ओम", correct: false },
      { text: "वाट", correct: false }
    ]
  },
  {
    question: "सूर्य से ऊर्जा किस रूप में आती है?",
    answers: [
      { text: "गर्मी और प्रकाश", correct: true },
      { text: "ध्वनि", correct: false },
      { text: "न्यूट्रॉन", correct: false },
      { text: "विद्युत", correct: false }
    ]
  },
  {
    question: "मानव श्वसन प्रणाली का मुख्य अंग कौन सा है?",
    answers: [
      { text: "हृदय", correct: false },
      { text: "फेफड़े", correct: true },
      { text: "गुर्दा", correct: false },
      { text: "आंत", correct: false }
    ]
  },
  {
    question: "लाल रक्त कोशिकाओं में कौन सा तत्व हीमोग्लोबिन बनाता है?",
    answers: [
      { text: "कैल्शियम", correct: false },
      { text: "लोहा", correct: true },
      { text: "सोडियम", correct: false },
      { text: "पोटैशियम", correct: false }
    ]
  },
  {
    question: "बल की एसआई इकाई क्या है?",
    answers: [
      { text: "न्यूटन", correct: true },
      { text: "जूल", correct: false },
      { text: "पास्कल", correct: false },
      { text: "वाट", correct: false }
    ]
  },
  {
    question: "पृथ्वी के चारों ओर परतों का अध्ययन किसे कहते हैं?",
    answers: [
      { text: "भूविज्ञान", correct: true },
      { text: "खगोलविज्ञान", correct: false },
      { text: "जीवविज्ञान", correct: false },
      { text: "रसायन विज्ञान", correct: false }
    ]
  },
  {
    question: "गैस को तरल में बदलने की प्रक्रिया क्या कहलाती है?",
    answers: [
      { text: "संघनन", correct: true },
      { text: "वाष्पीकरण", correct: false },
      { text: "उर्ध्वपातन", correct: false },
      { text: "विघटन", correct: false }
    ]
  },
  {
    question: "वनस्पति कोशिका में ऊर्जा उत्पादन किस अंगक में होता है?",
    answers: [
      { text: "नाभिक", correct: false },
      { text: "माइटोकॉन्ड्रिया", correct: true },
      { text: "राइबोसोम", correct: false },
      { text: "गोल्जी निकाय", correct: false }
    ]
  },
  {
    question: "ओजोन परत किस गैस से बनी है?",
    answers: [
      { text: "ऑक्सीजन", correct: true },
      { text: "नाइट्रोजन", correct: false },
      { text: "कार्बन डाइऑक्साइड", correct: false },
      { text: "हाइड्रोजन", correct: false }
    ]
  },
  {
    question: "ध्वनि किस माध्यम में सबसे तेज चलती है?",
    answers: [
      { text: "ठोस", correct: true },
      { text: "तरल", correct: false },
      { text: "गैस", correct: false },
      { text: "निर्वात", correct: false }
    ]
  },
  {
    question: "विद्युत प्रतिरोध की इकाई क्या है?",
    answers: [
      { text: "ओम", correct: true },
      { text: "वाट", correct: false },
      { text: "एम्पियर", correct: false },
      { text: "जूल", correct: false }
    ]
  },
  {
    question: "मानव शरीर में सबसे बड़ा अंग कौन सा है?",
    answers: [
      { text: "हृदय", correct: false },
      { text: "त्वचा", correct: true },
      { text: "फेफड़े", correct: false },
      { text: "यकृत", correct: false }
    ]
  },
  {
    question: "शरीर में रक्त शुद्धिकरण का कार्य कौन करता है?",
    answers: [
      { text: "हृदय", correct: false },
      { text: "गुर्दे", correct: true },
      { text: "फेफड़े", correct: false },
      { text: "त्वचा", correct: false }
    ]
  },
  {
    question: "विद्युत बल्ब का फिलामेंट किससे बना होता है?",
    answers: [
      { text: "तांबा", correct: false },
      { text: "टंगस्टन", correct: true },
      { text: "एल्यूमिनियम", correct: false },
      { text: "लोहा", correct: false }
    ]
  },
  {
    question: "दर्पण का जो प्रकार पीछे की ओर उभरा होता है उसे क्या कहते हैं?",
    answers: [
      { text: "अवतल दर्पण", correct: false },
      { text: "उत्तल दर्पण", correct: true },
      { text: "समतल दर्पण", correct: false },
      { text: "आयना दर्पण", correct: false }
    ]
  },
  {
    question: "भूकंप मापने का यंत्र क्या कहलाता है?",
    answers: [
      { text: "सीस्मोग्राफ", correct: true },
      { text: "बारोमीटर", correct: false },
      { text: "थर्मामीटर", correct: false },
      { text: "स्पीडोमीटर", correct: false }
    ]
  },
  {
    question: "हाइड्रोक्लोरिक एसिड का सूत्र क्या है?",
    answers: [
      { text: "HCl", correct: true },
      { text: "H₂SO₄", correct: false },
      { text: "HNO₃", correct: false },
      { text: "NaOH", correct: false }
    ]
  },
  {
    question: "किस गैस को 'लाफिंग गैस' कहा जाता है?",
    answers: [
      { text: "नाइट्रस ऑक्साइड", correct: true },
      { text: "कार्बन मोनोऑक्साइड", correct: false },
      { text: "ऑक्सीजन", correct: false },
      { text: "हाइड्रोजन", correct: false }
    ]
  },
  {
    question: "तांबे की विद्युत चालकता कैसी होती है?",
    answers: [
      { text: "बहुत अच्छी", correct: true },
      { text: "कम", correct: false },
      { text: "न के बराबर", correct: false },
      { text: "अत्यधिक खराब", correct: false }
    ]
  },
  {
    question: "शरीर का संतुलन बनाए रखने वाला अंग कौन सा है?",
    answers: [
      { text: "भीतरी कान", correct: true },
      { text: "हृदय", correct: false },
      { text: "गुर्दा", correct: false },
      { text: "फेफड़ा", correct: false }
    ]
  },
  {
    question: "प्रकाश की गति लगभग कितनी होती है?",
    answers: [
      { text: "3×10⁸ मी/से", correct: true },
      { text: "3×10⁶ मी/से", correct: false },
      { text: "3×10⁴ मी/से", correct: false },
      { text: "3×10² मी/से", correct: false }
    ]
  },
  {
    question: "किस प्रक्रिया से बर्फ सीधे जलवाष्प में बदल जाती है?",
    answers: [
      { text: "उर्ध्वपातन", correct: true },
      { text: "संघनन", correct: false },
      { text: "वाष्पीकरण", correct: false },
      { text: "गलन", correct: false }
    ]
  },
  {
    question: "मानव शरीर में कितनी हड्डियाँ होती हैं?",
    answers: [
      { text: "206", correct: true },
      { text: "210", correct: false },
      { text: "180", correct: false },
      { text: "300", correct: false }
    ]
  },
  {
    question: "ध्वनि की तीव्रता मापने की इकाई क्या है?",
    answers: [
      { text: "डेसीबल", correct: true },
      { text: "हर्ट्ज", correct: false },
      { text: "न्यूटन", correct: false },
      { text: "जूल", correct: false }
    ]
  },
  {
    question: "द्रव्यमान और आयतन का अनुपात किसे कहते हैं?",
    answers: [
      { text: "घनत्व", correct: true },
      { text: "दबाव", correct: false },
      { text: "वेग", correct: false },
      { text: "बल", correct: false }
    ]
  },
  {
    question: "पृथ्वी की सतह का कितना भाग जल से ढका है?",
    answers: [
      { text: "लगभग 71%", correct: true },
      { text: "लगभग 51%", correct: false },
      { text: "लगभग 80%", correct: false },
      { text: "लगभग 60%", correct: false }
    ]
  }
];

// --- DOM Elements ---
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

// --- Variables ---
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = 0;
let timer, timeLeft, quizStartTime;

const QUIZ_DURATION = 60; // सेकंड में

// --- Event Listeners ---
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);

// --- Functions ---
function startGame() {
    startButton.classList.add('hide');
    resultElement.classList.add('hide');
    questionContainerElement.classList.remove('hide');

    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    wrongAnswers = 0;

    timeLeft = QUIZ_DURATION;
    quizStartTime = Date.now();
    updateTimer();
    timer = setInterval(updateTimer, 1000);

    showQuestion();
    updateProgressBar();
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`;

    if (timeLeft <= 0) {
        clearInterval(timer);
        showResult();
    } else {
        timeLeft--;
    }
}

function showQuestion() {
    resetState();
    const question = shuffledQuestions[currentQuestionIndex];
    questionElement.textContent = question.question;

    question.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.dataset.correct = answer.correct;
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    answerButtonsElement.innerHTML = '';
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';

    if (correct) {
        score++;
    } else {
        wrongAnswers++;
    }

    Array.from(answerButtonsElement.children).forEach((button) => {
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

function nextQuestion() {
    currentQuestionIndex++;
    updateProgressBar();

    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function showResult() {
    clearInterval(timer);
    questionContainerElement.classList.add('hide');
    resultElement.classList.remove('hide');

    const totalQuestions = shuffledQuestions.length;
    const timeTaken = QUIZ_DURATION - timeLeft;

    scoreElement.textContent = score;
    totalElement.textContent = totalQuestions;
    correctElement.textContent = score;
    wrongElement.textContent = wrongAnswers;
    timeTakenElement.textContent = timeTaken;

    progressBar.style.width = '100%';
}

function restartQuiz() {
    resultElement.classList.add('hide');
    startButton.classList.remove('hide');
    progressBar.style.width = '0%';
    timerElement.textContent = '00:00';
}
