let onceStartElement = document.getElementById("onceStart");
let mainElement = document.getElementById("main");
let continueContainerElement = document.getElementById("whatnamebtncon");
let continueButtonElement = document.getElementById("whatnamebtn");
let inputnameElement = document.getElementById("inputname");

let name = localStorage.getItem("user.name");

function hide() {
    continueContainerElement.style.opacity = "0";
    continueContainerElement.style.maxHeight = "0px";
    continueButtonElement.style.opacity = "0";
    continueButtonElement.style.transform = "translateY(-40%)";
}

function show() {
    continueContainerElement.style.opacity = "1";
    continueContainerElement.style.maxHeight = "fit-content";
    continueButtonElement.style.opacity = "1";
    continueButtonElement.style.maxHeight = "fit-content";
    continueButtonElement.style.transform = "translateY(0px)";
}

function main() {
    onceStartElement.style.display = "block";
    mainElement.style.display = "none";
    function keyhandler(e) {
        let val = e.target.value;
        if (val.length > 0) {
            show();
        } else {
            hide();
        }
    }
    function continueHandler() {
        localStorage.setItem("user.name", inputnameElement.value);
        location.reload();
    }
    inputnameElement.addEventListener("change", keyhandler);
    inputnameElement.addEventListener("keyup", keyhandler);
    inputnameElement.addEventListener("keydown", keyhandler);
    inputnameElement.addEventListener("keypress", keyhandler);
    continueButtonElement.addEventListener("click", continueHandler);
    window.addEventListener('keyup', (event) => {
        if (event.key == "Enter" && inputnameElement.value.length > 0) {
            continueHandler();
        }
    });
    hide();
}

if (name == null || name == undefined) main();