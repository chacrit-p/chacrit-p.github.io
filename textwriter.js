const texts = ["Hi I'm Chacrit Poonpipit", "Frontend Developer", "Backend Developer"];
const typeSpeed = 100; 
const deleteSpeed = 50; 
const delayBetweenTexts = 2000; 

let currentTextIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typewriterElement = document.getElementById("typewriter");

function type() {
  const currentText = texts[currentTextIndex];
  const displayedText = currentText.substring(0, charIndex);

  typewriterElement.textContent = displayedText;

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(type, typeSpeed);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, deleteSpeed);
  } else if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => (isDeleting = true), delayBetweenTexts);
    setTimeout(type, deleteSpeed);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    setTimeout(type, typeSpeed);
  }
}

type();
