
let preview = document.getElementById('preview');
let button = document.getElementById('generate');
let code = document.getElementById('generated')

button.addEventListener("click", generate);

function generate() {
    let slug = document.getElementById('siteSLUG').value;
    let hex = document.getElementById('borderCOLOR').value;

    preview.src = `/widget/?slug=${slug}&hex=${hex}`;
    code.innerHTML = `&#60;iframe src="https://void.shroom.ink/widget/?slug=${slug}&hex=${hex}" height="250px" width="200px" scrolling="no" frameborder="0"&#62;&#60;/iframe&#62;`;
}

let preview2 = document.getElementById('preview2');
let button2 = document.getElementById('generate2');
let code2 = document.getElementById('generated2')

button2.addEventListener("click", generate2);

function generate2() {
    let slug = document.getElementById('siteSLUG2').value;
    let hexB = document.getElementById('borderCOLOR2').value;
    let hexT = document.getElementById('textCOLOR2').value;

    if (!hexB) {
        hexB = "ba4583";
    }
    if (!hexT) {
        hexT = "33FF00";
    }

    let text = `<div id=voidShrooms><style>#voidShrooms{width:200px;height:50px;background:url(https://void.shroom.ink/src/img/background.webp) #171717;font-family:monospace;outline:5px double #${hexB};outline-offset:-5px;display:grid;grid-template-columns:1fr 1fr 1fr;margin:.5em}#voidShrooms a{color:#efefef;text-decoration:none;font-size:2.2em;text-align:center;align-self:center}#voidShrooms #home{font-size:1em;color:#${hexT}}</style><a aria-label=Previous href=https://void.shroom.ink/${slug}/previous id=previous target=_blank title=previous>←</a> <a aria-label=Home href=https://void.shroom.ink/ id=home target=_blank title=home>void.shrooms</a> <a aria-label=Next href=https://void.shroom.ink/${slug}/next id=next target=_blank title=next>→</a></div>`;

    preview2.innerHTML = text;
    code2.innerHTML = text;
}
