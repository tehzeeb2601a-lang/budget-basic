// Mobile Menu

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


// Needs vs Wants message

function showMessage() {

    const message = document.getElementById("message");

    message.innerHTML =
        "💡 Tip: Pehle apni needs complete karein, phir wants ke liye budget banayein.";

}
// =================================================
// STEP 2 - KNOWLEDGE CHECK
// =================================================

function checkAnswer(answer) {

    const result = document.getElementById("quiz-result");

    if (answer === "saving") {

        result.innerHTML =
            "✅ Correct! Saving ka matlab future goal ke liye paisa side par rakhna hai.";

        result.style.color = "#32b879";

    } else {

        result.innerHTML =
            "❌ Not quite. Saving ka matlab paisa future goal ke liye side par rakhna hai.";

        result.style.color = "#e74c3c";

    }
}


// =================================================
// NEEDS VS WANTS
// =================================================

function checkNeedWant(answer) {

    const result = document.getElementById("need-want-result");

    if (answer === "want") {

        result.innerHTML =
            "✅ Correct! Gaming subscription generally ek Want hai, basic Need nahi.";

        result.style.color = "#32b879";

    } else {

        result.innerHTML =
            "❌ Try again! Gaming subscription generally ek Want hoti hai.";

        result.style.color = "#ff8c8c";

    }
}

// ================= 50-30-20 CALCULATOR =================

function calculateBudget() {

    let income = Number(document.getElementById("income").value);

    if (income <= 0) {
        document.getElementById("budgetResult").innerHTML =
            "Please enter a valid income.";
        return;
    }

    let needs = income * 0.50;
    let wants = income * 0.30;
    let savings = income * 0.20;

    document.getElementById("budgetResult").innerHTML = `
        <h4>Your Monthly Budget:</h4>
        <p>🏠 Needs: <strong>${needs}</strong></p>
        <p>🛍️ Wants: <strong>${wants}</strong></p>
        <p>💰 Savings: <strong>${savings}</strong></p>
    `;
}


// ================= SAVINGS GOAL =================

function calculateSaving() {

    let goalName = document.getElementById("goalName").value;
    let target = Number(document.getElementById("targetAmount").value);
    let current = Number(document.getElementById("currentSaving").value);
    let monthly = Number(document.getElementById("monthlySaving").value);

    if (
        goalName === "" ||
        target <= 0 ||
        current < 0 ||
        monthly <= 0
    ) {
        document.getElementById("savingResult").innerHTML =
            "Please enter all information correctly.";
        return;
    }

    let remaining = target - current;

    if (remaining <= 0) {

        document.getElementById("savingResult").innerHTML =
            `🎉 Congratulations! You have already reached your ${goalName} goal.`;

        return;
    }

    let months = Math.ceil(remaining / monthly);

    document.getElementById("savingResult").innerHTML = `
        🎯 Goal: ${goalName}<br>
        💰 Remaining Amount: ${remaining}<br>
        📅 Estimated Time: ${months} month(s)
    `;
}