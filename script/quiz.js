const questions = [
    "Do you have credit card debt between $15,000 and $100,000?",
    "Do you live in the United States?",
    "Are you struggling to make payments and need to lower your debt quickly?"
];

let currentQuestionIndex = 0;

function handleAnswer(answer) {
    if (answer === 'no') {
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('result').style.display = 'block';
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            document.getElementById('quiz-question').textContent = questions[currentQuestionIndex];
        } else {
            showNextExtendedQuestion(0);
        }
    }
}

function showNextExtendedQuestion(step) {
    const quiz = document.getElementById('quiz');
    if (step === 0) {
        quiz.innerHTML = `
            <div class="quiz-question">What’s the biggest financial challenge you’re currently facing?</div>
            <div class="checkbox-group">
                <label class="container">
                    <input type="checkbox" name="challenge" value="credit-card-debt">
                    <span class="checkmark"></span>
                    Paying off high-interest credit card debt
                </label>
                <label class="container">
                    <input type="checkbox" name="challenge" value="monthly-payments"> 
                    <span class="checkmark"></span>
                    Managing monthly payments without falling behind
                </label>
                <label class="container">
                    <input type="checkbox" name="challenge" value="debt-balance"> 
                    <span class="checkmark"></span>
                    Reducing overall debt balance
                </label>
                <label class="container">
                    <input type="checkbox" name="challenge" value="credit-score"> 
                    <span class="checkmark"></span>
                    Protecting my credit score
                </label>
            </div>
            <div class="buttons">
                <button class="yes-button" onclick="showNextExtendedQuestion(1)">Next</button>
            </div>
        `;
    } else if (step === 1) {
        quiz.innerHTML = `
            <div class="quiz-question">How much do you want to reduce your debt?</div>
            <div class="slider-container">
                <input type="range" class="slider" id="debt-range" name="debt-range" min="0" max="100000" step="1000" value="0" oninput="updateRangeValue(this.value)">
                <div class="debt-range">
                    <p>$0</p>
                    <p>$100,000</p>
                </div>
                <div>
                    <p class="selected-amount">
                        $<span id="range-value">0</span>
                    </p>
                </div>
            </div>
            <div class="buttons">
                <button class="yes-button" onclick="handleSkip()">Finish</button>
            </div>
        `;
    }
}

function updateRangeValue(value) {
    document.getElementById('range-value').textContent = value;
}

function handleSkip() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('result').textContent = 'Thank you for completing the quiz!';
}