
let preview = document.getElementById('preview');
let button = document.getElementById('generate');
let code = document.getElementById('generated')

button.addEventListener("click", generate);

function generate() {
    let slug = document.getElementById('siteSLUG').value;
    let hex = document.getElementById('borderCOLOR').value;

    preview.src = `/widget/?slug=${slug}&hex=${hex}`;
    code.innerHTML = `&#60;iframe src="https://abyssal.shroom.ink//widget/?slug=${slug}&hex=${hex}" height="250px" width="200px" scrolling="no" frameborder="0"&#62;&#60;/iframe&#62;`;
}
