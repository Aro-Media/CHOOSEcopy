// html button elements
let yesButton = document.querySelector('.oneButton');
let noButton = document.querySelector('.twoButton');

let tryagain = document.querySelector('.retry');
tryagain.style.display = "none";
let tryagain2 = document.querySelector('.retry2');
tryagain2.style.display = "none";

let HLine = document.querySelector('.HLine');
HLine.style.display = "none";
let CLine = document.querySelector('.N-HLine');
CLine.style.display = "none";

let Below = document.querySelector('.Below');
Below.style.display = "none";
let Across = document.querySelector('.Across');
Across.style.display = "none";

let restart = document.querySelector('.restart');
let taxi = document.querySelector('HLine');
let giveup = document.querySelector('.twoButton');

// html content elements
let text = document.querySelector('.text');





yesButton.addEventListener('click', function() {
text.innerHTML = "We need to go to Evanston. What did that man say again?";
yesButton.style.display = "none";
noButton.style.display = "none";
HLine.style.display = "block";
CLine.style.display = "block";
});

noButton.addEventListener('click', function() {
text.innerHTML = "Free will is a myth. Reload and try again.";
yesButton.style.display = "none";
noButton.style.display = "none";
    });

HLine.addEventListener('click', function(){
text.innerHTML = "We made it to the station. There's a single road heading north, with a bridge going over it holding another road that moves east/west. <br> <br> So... where do we go again?";
HLine.style.display = "none";
CLine.style.display = "none";
Below.style.display = "block";
Across.style.display = "block";
});

CLine.addEventListener('click', function() {
text.innerHTML = "So. We're lost. That <em>might</em> not've been the right direction. <br> <br> Uh... What do we do now?";
HLine.style.display = "none";
CLine.style.display = "none";
});