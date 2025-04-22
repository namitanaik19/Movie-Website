// Theme toggle button
const toggleBtn = document.getElementById('toggle-theme');

// Load previously selected theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Watch trailer pop-up
function watchTrailer() {
  alert("Trailer is coming soon!");
}
