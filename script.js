// drop down menu

const dropDown = document.querySelector(".dropdown");
const dropDownLinks = document.querySelectorAll(".dropdown .links a")

function hamburg(){
    dropDown.classList.add("active");    
}

function cancel(){
    dropDown.classList.remove("active");
}

if (dropDownLinks.length > 0){
    Array.from(dropDownLinks).forEach(link => {
        link.addEventListener("click", cancel);
    });
}

// mengisi typewriter
const words = ["Site Civil Engineer", "Drafter Engineer", "Tech Explorer", "Subtitle Creator"];
const textElement = document.querySelector(".typewriter-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 100;
const deleteSpeed = 50;
const pauseTime = 1000;

function type(){
    const currentWord = words[wordIndex];
    if (isDeleting){
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else{
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    let currentSpeed = isDeleting ? deleteSpeed : typeSpeed;
    if(!isDeleting && charIndex === currentWord.length){
        currentSpeed = pauseTime;
        isDeleting = true;
    }
    else if (isDeleting && charIndex === 0){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        currentSpeed = 500;
    }
    setTimeout(type, currentSpeed);
}

type();