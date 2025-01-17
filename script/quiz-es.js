const questions = [
    "¿Tienes una deuda de tarjeta de crédito de entre 15.000 y 100.000 dólares?",
    "¿Vive en Estados Unidos?",
    "¿Tiene dificultades para hacer frente a sus pagos y necesita reducir su deuda rápidamente?"
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
            <div class="quiz-question">¿Cuál es el mayor reto financiero al que se enfrenta actualmente?</div>
            <div class="checkbox-group">
                <label class="container">
                    <input type="checkbox" name="challenge" value="credit-card-debt">
                    <span class="checkmark"></span>
                    Saldar las deudas de las tarjetas de crédito con intereses elevados
                </label>
                <label class="container">
                    <input type="checkbox" name="challenge" value="monthly-payments"> 
                    <span class="checkmark"></span>
                    Gestionar los pagos mensuales sin retrasarse
                </label>
                <label class="container">
                    <input type="checkbox" name="challenge" value="debt-balance"> 
                    <span class="checkmark"></span>
                    Reducir el saldo global de la deuda
                </label>
                <label class="container">
                    <input type="checkbox" name="challenge" value="credit-score"> 
                    <span class="checkmark"></span>
                    Proteger mi calificación crediticia
                </label>
            </div>
            <div class="buttons">
                <button class="skip-button" onclick="showNextExtendedQuestion(1)">Siguiente</button>
            </div>
        `;
    } else if (step === 1) {
        quiz.innerHTML = `
            <div class="quiz-question">¿Cuánto quieres reducir tu deuda?</div>
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
                <button class="skip-button" onclick="handleSkip()">Acabado</button>
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
    document.getElementById('result').textContent = 'Gracias por completar el cuestionario.';
}