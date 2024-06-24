const main = document.getElementById("main");
const themeToggle = document.getElementById("theme-toggle");

function setTheme(theme) {
  main.setAttribute("data-theme", theme);
  themeToggle.checked = theme === "dark";
}

window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme("dark");
  }
};

themeToggle.addEventListener("change", function () {
  const theme = themeToggle.checked ? "dark" : "light";
  setTheme(theme);
  localStorage.setItem("theme", theme);
});
