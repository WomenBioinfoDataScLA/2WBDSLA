const ham = document.getElementById('ham-list');
const cross = document.getElementById('cross-icon');
const navOptions = document.getElementById('nav-options');
const codeSection = document.getElementById("code-of-conduct-section");
const aboutSection = document.getElementById("about-inner");
const codeButton = document.getElementById("code-button-section");

function disableElement(element) {
    element.classList.add('disable');
}

function enableElement(element) {
    element.classList.remove('disable');
}


cross.addEventListener("click", () => {
    disableElement(cross);
    enableElement(ham);
    disableElement(navOptions);
});


ham.addEventListener("click", () => {
    disableElement(ham);
    enableElement(cross);
    enableElement(navOptions);
});

codeButton.addEventListener("click", () => {
    disableElement(aboutSection);
})