document.getElementById("first-choice").addEventListener('click', function () {
    firstChoice();
});

function firstChoice () {
    window.location="SinglePlayer/index.html";
}

document.getElementById("second-choice").addEventListener('click', function () {
    secondChoice();
});

function secondChoice () {
    window.location="Versus/index.html";
}