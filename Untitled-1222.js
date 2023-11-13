JS:
document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".qsts");

    questions.forEach(function (question) {
        question.addEventListener("click", function () {
            const answer = question.nextElementSibling;
            toggleAnswer(answer);
        });
    });
});

function toggleAnswer(answer) {
    if (answer.style.display === "none" || answer.style.display === "") {
        const allAnswers = document.querySelectorAll(".answer");
        allAnswers.forEach(function (answer) {
            answer.style.display = "none";
        });
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}
