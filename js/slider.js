var text_value = document.querySelector("#slider-value");
var slider = document.querySelector("#slider");

slider.addEventListener("mousemove" ,function() {
    text_value.innerHTML = slider.value;
});