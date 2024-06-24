const main = document.getElementById("main");
const themeToggle = document.getElementById("theme-toggle");
const title = document.getElementById("title");

function setTheme(theme) {
  main.setAttribute("data-theme", theme);
  themeToggle.checked = theme === "dark";
}

window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  setTheme(savedTheme ? savedTheme : "dark");
};

themeToggle.addEventListener("change", () => {
  const theme = themeToggle.checked ? "dark" : "light";
  setTheme(theme);
  localStorage.setItem("theme", theme);
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
