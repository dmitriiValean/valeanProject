let fotoValean = document.querySelector(".fotoValean");
let menuLi = document.querySelectorAll("li");


setTimeout(function animateFotoValean() {
    fotoValean.setAttribute("style", "width: 350px; height: 350px; transition: 1s; border: 20px solid rgb(243, 165, 5, 1.5) ")
}, 1600);

setTimeout(function animateMenuLi() {
    let i;
    for (i = 0; i < menuLi.length; i++) {
        (function (i) {
            setTimeout(function () {
                menuLi[i].style.display = "block";
            }, 500 * i + 1);
        })(i);
    }
}, 2900);

console.log(menuLi)

menuLi[1].addEventListener('click', function(event) {

});