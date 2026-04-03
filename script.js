document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    faders.forEach((fader) => {
        const rect = fader.getBoundingClientrect();
        if (rect.top < windows.innerHeight - 100) {
            fader.classlist.add("show");
        }
        let angle = 0;
        setInterval(() => {
            document.body.style.background = "liner-gradient(${angle}deg, #fff0f,#ffe4e1)";
            angle += 0.2;
        }, 50);
    });
});
