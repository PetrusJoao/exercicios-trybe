// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener("click", preventHref);

function preventHref(event){
    event.preventDefault();
}

INPUT_CHECKBOX.addEventListener("click", preventCheckbox);

function preventCheckbox(event){
    event.preventDefault();
}

INPUT_TEXT.addEventListener("click", preventText);

function preventText(event){
    event.preventDefault();
}