// let pg = ["url(../images/banner1.jpg)", "url(../images/banner2.jpg)", "url(../images/banner3.jpg)"];
// let header = document.getElementById("header");
// let counter = 0;
// // setInterval(function(){
// //     for(let i = 0 ; i < pg.length ; i++){
// //         header.style.background = pg[i];
// //     }
// // }, 1000)

// function test(){
//     header.style.background = pg[counter];
//     header.style.backgroundSize = "cover";
//     header.style.transition = "all 1s";
//     counter++;
// }
// setInterval(test,2000);



let lamp = document.getElementById("lamp");
let light = document.getElementById("bi-brightness-high");
let gallary = document.getElementById("gallary");
let buy = document.getElementById("buy");
let find = document.getElementById("find");
let owner = document.getElementById("owner");
let what = document.getElementById("what");
let latest = document.getElementById("latest");
let contain = document.getElementById("contain");
let cards = document.getElementById("cards");
let h2 = document.querySelectorAll("#h2");
let box = document.querySelectorAll("#box");

lamp.onclick = function() {
    this.style.display = "none";
    light.style.display = "inline-block";
    gallary.style.background = "#000";
    buy.style.background = "#000";
    find.style.background = "#000";
    owner.style.background = "#000";
    what.style.background = "#000";
    latest.style.background = "#000";
    contain.style.background = "#000";
    cards.style.background = "#000";
    for(let i = 0; i < 100; i++){
        h2[i].style.color = "#fff";
    }
}
light.onclick = function() {
    this.style.display = "none";
    lamp.style.display = "inline-block";
    gallary.style.background = "#fff";
    buy.style.background = "rgb(243, 243, 243)";
    find.style.background = "rgb(248, 248, 248)";
    owner.style.background = "#fff";
    what.style.background = "rgb(243, 243, 243)";
    latest.style.background = "#fff";
    contain.style.background = "#fff";
    cards.style.background = "#fff";
    for(let i = 0; i < 100; i++){
        h2[i].style.color = "#000";
    }
}