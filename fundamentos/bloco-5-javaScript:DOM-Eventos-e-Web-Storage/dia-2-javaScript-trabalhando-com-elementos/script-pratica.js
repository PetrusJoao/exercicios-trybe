let ondeVoceEsta = document.getElementById("elementoOndeVoceEsta");
console.log(ondeVoceEsta);
let elementoPai = document.getElementById("elementoOndeVoceEsta").parentElement;
elementoPai.style.color = "red"
let filhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
filhoDoFilho.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie libero et urna iaculis, vitae semper magna sagittis. Nullam vel egestas felis, nec dictum purus. Curabitur id lobortis justo. Donec mattis tortor mauris. Etiam at commodo libero, lobortis venenatis ex. Maecenas nec ex id arcu pellentesque viverra. Proin in metus at mi commodo sagittis. Curabitur ex ante, porttitor vel mi ac, gravida consectetur elit. Pellentesque ac hendrerit massa. Praesent feugiat tempor vestibulum. Praesent scelerisque pellentesque odio sed suscipit. Proin eleifend, nisi eu gravida ultrices, sapien neque elementum metus, in iaculis quam eros interdum purus. Nulla facilisi. Nunc id tellus mollis, volutpat felis in, sollicitudin quam."
let pai = document.getElementById("pai");
let paiParaFilho = pai.firstElementChild;
console.log(paiParaFilho);
let ondeVoceEstaParaFilho = ondeVoceEsta.firstElementChild;
console.log(ondeVoceEstaParaFilho);
let ondeVoceEstaParaTexto = document.getElementById("elementoOndeVoceEsta").nextSibling;
console.log(ondeVoceEstaParaTexto);
let ondeVoceEstaParaterceiroFilho = document.getElementById("elementoOndeVoceEsta").nextElementSibling;
console.log(ondeVoceEstaParaterceiroFilho);
let paiParaTerceiroFilho = document.getElementById("pai").children[2];
console.log(paiParaTerceiroFilho);