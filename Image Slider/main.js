const images = document.querySelectorAll(".container img");
var count = 0
function forward() {
    if (images.length - 1 == count) return;
    count++
    for (img of images) {
        img.style.transform = `translateX(-${count * 100}%)`
    }
}
function backward() {
    if (count == 0) return;
    count--
    for (img of images) {
        img.style.transform = `translateX(-${count * 100}%)`
    }
}