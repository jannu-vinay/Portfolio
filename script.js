// Smooth reveal animation
window.addEventListener("scroll", reveal);
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add("visible");
        } else {
            el.classList.remove("visible");
        }
    });
}

// Resume Modal
const modal = document.getElementById("resume-modal");
const btn = document.getElementById("resume-btn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = () => (modal.style.display = "flex");
span.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};