const main = document.getElementById("main");
const themeLists = document.getElementById("theme-lists");
const title = document.getElementById("title");
const buttons = themeLists.querySelectorAll("button");

function setTheme(theme) {
  main.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  setTheme(savedTheme ? savedTheme : "night");
};

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const theme = button.getAttribute("data-theme");
    setTheme(theme);
  });
});

function typeText(element, text, speed = 100, deleteSpeed = 50, pause = 1000) {
  let index = 0;
  let isDeleting = false;

  function type() {
    if (!isDeleting && index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else if (isDeleting && index > 0) {
      element.innerHTML = text.substring(0, index - 1);
      index--;
      setTimeout(type, deleteSpeed);
    } else if (!isDeleting && index === text.length) {
      setTimeout(() => {
        isDeleting = true;
        setTimeout(type, pause);
      }, pause);
    } else if (isDeleting && index === 0) {
      isDeleting = false;
      setTimeout(type, speed);
    }
  }

  type();
}

document.addEventListener("DOMContentLoaded", () => {
  const text = "Hi, Chacrit Poonpipit";
  typeText(title, text);
});
