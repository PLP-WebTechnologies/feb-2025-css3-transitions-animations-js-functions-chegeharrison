// script.js

document.addEventListener("DOMContentLoaded", () => {
    const themeSelect = document.getElementById("themeSelect");
    const storedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.toggle("dark", storedTheme === "dark");
    themeSelect.value = storedTheme;

    themeSelect.addEventListener("change", (e) => {
        const selectedTheme = e.target.value;
        document.body.classList.toggle("dark", selectedTheme === "dark");
        localStorage.setItem("theme", selectedTheme);
    });
});

function animateBook(element) {
    element.classList.add("animate");
    setTimeout(() => {
        element.classList.remove("animate");
    }, 1000);
}
