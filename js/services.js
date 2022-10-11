

let lamp = document.getElementById("lamp");
let light = document.getElementById("bi-brightness-high");
let local = document.getElementById("local");
let worker = document.getElementById("worker");
let core = document.getElementById("core");
let paying = document.getElementById("paying");
let h2 = document.querySelectorAll("#h2");


lamp.onclick = function() {
    this.style.display = "none";
    light.style.display = "inline-block";
    local.style.background = "#000";
    worker.style.background = "#000";
    core.style.background = "#000";
    paying.style.background = "#000";
    for(let i = 0; i < 100; i++){
        h2[i].style.color = "#fff";
    }
}
light.onclick = function() {
    this.style.display = "none";
    lamp.style.display = "inline-block";
    local.style.background = "#fff";
    worker.style.background = "rgb(243, 243, 243)";
    core.style.background = "rgb(248, 248, 248)";
    paying.style.background = "#fff";
    for(let i = 0; i < 100; i++){
        h2[i].style.color = "#000";
    }
}