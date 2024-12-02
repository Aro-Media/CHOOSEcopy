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
restart.style.display = "none";
let taxi = document.querySelector('.noCut');
taxi.style.display = "none";
let giveup = document.querySelector('.yeahNah');
giveup.style.display = "none";

let bus = document.querySelector('.return');
bus.style.display = "none";
let realCLine = document.querySelector('.CLine');
realCLine.style.display = "none";
let taxed = document.querySelector('.taxed');
taxed.style.display = "none";

let give = document.querySelector('.give');
give.style.display = "none";
let peek = document.querySelector('.peek');
peek.style.display = "none";
// html content elements
let text = document.querySelector('.text');

let giveman = document.querySelector('.busiGive');
giveman.style.display = "none";
let happyguy = document.querySelector('.happiestDay');
happyguy.style.display = "none";
let cont = document.querySelector('.cont');
cont.style.display = "none";

let cont2 = document.querySelector('.cont2');
cont2.style.display = "none";

let run = document.querySelector('.run');
run.style.display = "none";



yesButton.addEventListener('click', function() {
text.innerHTML = " Here we are! welcome to Centerpoint station. We need to go to the west side (of Westside). What did that man say again?";
yesButton.style.display = "none";
noButton.style.display = "none";
HLine.style.display = "block";
CLine.style.display = "block";
});

noButton.addEventListener('click', function() {
text.innerHTML = "Congrats! You were presented with a chance for adventure.. and didn't take it. You are boring. Please reload and try again. <br><br> Boring end :(";
yesButton.style.display = "none";
noButton.style.display = "none";
    });

HLine.addEventListener('click', function(){
text.innerHTML = "We made it to the westside station. There's a single road heading north, with a bridge going over it holding another road that moves east/west. <br> <br> So... where do we go again?";
HLine.style.display = "none";
CLine.style.display = "none";
Below.style.display = "block";
Across.style.display = "block";
});

CLine.addEventListener('click', function() {
text.innerHTML = "So. We're lost. That <em>might</em> not've been the right direction, given the fact we're somehow in WESTERN NORTHSIDE. <br> <br> ...What do we do now?";
HLine.style.display = "none";
CLine.style.display = "none";
restart.style.display = "block";
taxi.style.display = "block";
giveup.style.display = "block";
});

restart.addEventListener('click', function() {
    text.innerHTML = "We made it to the station... again. We had to fight the crowd to get here, but we can finally start right. <br> <br> We should know better now. Where are we heading?";
    restart.style.display = "none";
    taxi.style.display = "none";
    giveup.style.display = "none";
    HLine.style.display = "block";
    CLine.style.display = "block";
});

taxi.addEventListener('click', function() {
    text.innerHTML = "After that small... issue, we've made it to Westside station. You're also down ANOTHER 30$ btw (thanks for the lift). There's a single road heading north, with a bridge going over it holding another road that moves east/west. <br> <br> So... where do we go again? ";
    restart.style.display = "none";
    taxi.style.display = "none";
    realCLine.style.display = "none";
    bus.style.display = "none";
    giveup.style.display = "none";
    Below.style.display = "block";
    Across.style.display = "block";
});

giveup.addEventListener('click', function() {
    text.innerHTML = "Congrats! You were presented with a chance for adventure.. and didn't take it. You are boring. Please reload and try again. <br><br> Boring end :(";
    restart.style.display = "none";
    taxi.style.display = "none";
    giveup.style.display = "none";
        });

Below.addEventListener('click', function() {
    text.innerHTML = "You wait for a bus, and eventually, we end up in... western Northside. yeah, turns out that road heading north DOESN'T take you west. crazy, right? <br> *sigh* <br> What do we do now?";
    realCLine.style.display = "block";
    bus.style.display = "block";
    taxi.style.display = "block";
    Below.style.display = "none";
    Across.style.display = "none";
});

Across.addEventListener('click', function() {
    text.innerHTML = "You did it. We're in western Westside. There's a guy down there with a nametag that says 'empathy'. It's finally over.<br><br> What do you do.";
    Below.style.display = "none";
    Across.style.display = "none";
    give.style.display = "block";
    peek.style.display = "block";
});

give.addEventListener('click', function() {
    text.innerHTML = "Give the guy his paper <br><br> please";
    give.style.display = "none";
    peek.style.display = "none";
    giveman.style.display = "block";
});

giveman.addEventListener('click', function () {
    text.innerHTML = "Yippee <br> <br> you win :)";
    happyguy.style.display = "block";
    giveman.style.display = "none";
});
happyguy.addEventListener('dblclick', function () {
    text.innerHTML = "What did you do?? What did he do to you?? You just punched that guy! Great, now the police are here. You're going to prison for battery. I hope that was worth it, you monster.";
    happyguy.style.display = "none";
    cont2.style.display = "block";
});
cont.addEventListener('click', function () {
    text.innerHTML = "Prison End :(";
    cont.style.display = "none";
});

cont2.addEventListener('click', function () {
    text.innerHTML = "You're super special.... and in jail <br><br>  [SECRET] Prison End... :( ???";
    cont2.style.display = "none";
});

realCLine.addEventListener('click', function() {
    text.innerHTML = "Wait, that could work! It'd take us back to Centerpoint, but that's better than being stuck in west northside. Should we do that?"
    restart.style.display = "block";
    realCLine.style.display = "none";
    bus.style.display = "none";
    taxi.style.display = "none";
});

bus.addEventListener('click', function () {
    text.innerHTML = "You're here. again. you know what to do now. <br><br> ...Right?"
    realCLine.style.display = "none";
    bus.style.display = "none";
    taxi.style.display = "none";
    Below.style.display = "block";
    Across.style.display = "block";
});

peek.addEventListener('click', function () {
    text.innerHTML = "Wait a minute... Those are taxes! This was a setup! Quick, you have to run!";
    run.style.display = "block";
    give.style.display = "none";
    peek.style.display = "none";
});

run.addEventListener('click', function () {
    text.innerHTML = "But it was too late. The old man from before turned out to be a CIA agent, and he tackled you before you could leave. Those decades of tax fraud are finally coming back for you.";
    run.style.display = "none";
    cont.style.display = "block";
});