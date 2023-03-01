let hrElement;
let counter = 100;
for (let i = 0; i < counter; i++) {
    hrElement = document.createElement("HR");
    hrElement.style.right = Math.floor(Math.random() * window.innerWidth) + "px";
    hrElement.style.animationDuration = 3 + Math.random() * 0.3 + "s";
    hrElement.style.animationDelay = Math.random() * 10 + "s";
    document.body.appendChild(hrElement);
}