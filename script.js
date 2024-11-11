// html button elements
let yesButton = document.querySelector('.oneButton');
let noButton = document.querySelector('.twoButton');
let tryagain = document.querySelector('retrybutton');

// html content elements
let choice1image = document.querySelector('.choice1image');
choice1image.style.display = "none";

let text = document.querySelector('.text');

let choice1Aimage = document.querySelector('.choice1Aimage');
choice1Aimage.style.display ="none";




yesButton.addEventListener('click', function() {
text.innerHTML = "We need to go to Evanston. What did that man say again?";
choice1image.style.display = "none";
choice1Aimage.style.display ="none";
yesButton.style.display="none";
noButton.style.display="none";
});

noButton.addEventListener('click', function() {
text.innerHTML = "Free will is a myth. Try again?";
choice1image.style.display = "none";
choice1Aimage.style.display ="none";
yesButton.style.display="none";
noButton.style.display="none";
    });

choice1Aimage.addEventListener('dblclick', function(){
    text.innerHTML = "You make it another day"
    choice1Aimage.src = "knockedout.jpg";
});
