

let lamp = document.getElementById("lamp");
let light = document.getElementById("bi-brightness-high");
let h2 = document.querySelectorAll("#h2");


lamp.onclick = function() {
    this.style.display = "none";
    light.style.display = "inline-block";
    document.body.style.background = "#000";
    for(let i = 0; i < 100; i++){
        h2[i].style.color = "#fff";
    }
}
light.onclick = function() {
    this.style.display = "none";
    lamp.style.display = "inline-block";
    document.body.style.background = "#fff";
    for(let i = 0; i < 100; i++){
        h2[i].style.color = "#000";
    }
}