const modeToggle = document.getElementById("dark-mode-toggle");
const root = document.documentElement;

// On page load, checks if the user has a saved preference and applies the corresponding style
window.addEventListener("load", function () {
  const mode = localStorage.getItem("mode");
  if (mode === "dark") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Clicking the button changes the status and saves the user's preference.
modeToggle.addEventListener("click", function () {
  if (root.classList.contains("dark-mode")) {
    disableDarkMode();
    localStorage.setItem("mode", "light");
  } else {
    enableDarkMode();
    localStorage.setItem("mode", "dark");
  }
});

function enableDarkMode() {
  root.classList.add("dark-mode");
  root.style.setProperty("--shadow-color", "#202020");
  root.style.setProperty("--text-color", "#f0f0f0");
  root.style.setProperty("--nav-bar-color", "#1b1b1a");
  root.style.setProperty("--nav-text-color", "#f0f0f0");
  root.style.setProperty("--nav-hover-color", "#806da3");
  root.style.setProperty("--body-background-color", "#101010");
  root.style.setProperty("--intro-color", "#f0f0f0");
  root.style.setProperty("--text-description-color", "#1b1b1a");
  root.style.setProperty("--social-hover-color", "#806da3");
  root.style.setProperty("--social-text-color", "#f9f9f9");
  root.style.setProperty("--button", "url('../images/dark-mode-button.svg')");
}

function disableDarkMode() {
  root.classList.remove("dark-mode");
  root.style.setProperty("--shadow-color", "#c0c0c0");
  root.style.setProperty("--text-color", "#202020");
  root.style.setProperty("--nav-bar-color", "#303030");
  root.style.setProperty("--nav-text-color", "#f9f9f9");
  root.style.setProperty("--nav-hover-color", "#c84b31");
  root.style.setProperty("--body-background-color", "#f9f9f9");
  root.style.setProperty("--intro-color", "#202020");
  root.style.setProperty("--text-description-color", "#303030");
  root.style.setProperty("--social-hover-color", "#c84b31");
  root.style.setProperty("--social-text-color", "#202020");
  root.style.setProperty("--button", "url('../images/light-mode-button.svg')");
}
