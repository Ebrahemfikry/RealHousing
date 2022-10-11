

let lamp = document.getElementById("lamp");
let light = document.getElementById("bi-brightness-high");
let local = document.getElementById("local");
let paying = document.getElementById("paying");
let core = document.getElementById("core");
let worker = document.getElementById("worker");
let h2 = document.querySelectorAll("#h2");


lamp.onclick = function() {
    this.style.display = "none";
    light.style.display = "inline-block";
    local.style.background = "#000";
    paying.style.background = "#000";
    core.style.background = "#000";
    worker.style.background = "#000";
    for(let i = 0; i < 100; i++){
        h2[i].style.color = "#fff";
    }
}
light.onclick = function() {
    this.style.display = "none";
    lamp.style.display = "inline-block";
    local.style.background = "#fff";
    paying.style.background = "rgb(243, 243, 243)";
    core.style.background = "rgb(248, 248, 248)";
    worker.style.background = "#fff";
    for(let i = 0; i < 100; i++){
        h2[i].style.color = "#000";
    }
}