let fotoValean = document.querySelector(".fotoValean");
console.log(fotoValean);

function animateFotoValean() {
    fotoValean.style.width = "400px";
    fotoValean.style.height = "400px";
    fotoValean.style.transition = "1s";
    fotoValean.style.border = "35px solid rgb(243, 165, 5, 1.5)";
};
setTimeout(animateFotoValean, 1600);