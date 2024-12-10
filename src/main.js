var Slider = /** @class */ (function () {
    function Slider(trackSelector) {
        this.currentIndex = 0;
        this.track = document.querySelector(trackSelector);
        this.slides = this.track.querySelectorAll('.slide');
        this.init();
    }
    Slider.prototype.init = function () {
        this.startAutoSlide();
    };
    Slider.prototype.startAutoSlide = function () {
        var _this = this;
        this.slideInterval = setInterval(function () { return _this.nextSlide(); }, 3000);
    };
    Slider.prototype.nextSlide = function () {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.track.style.transform = "translateX(-".concat(this.currentIndex * 100 / this.slides.length, "%)");
    };
    return Slider;
}());
document.addEventListener('DOMContentLoaded', function () {
    new Slider('.slider');
});
var MainPhotos = document.querySelector("#mainphotos");
var ind = 0;
var max = 2;
function nextPhoto(){
    ind++;
    if(ind > max){
        ind = 0;
    }
    MainPhotos.src = `public/croissant${ind}.png`
}
function prevPhoto(){
    ind--;
    if(ind < 0){
        ind = max;
    }
    MainPhotos.src = `public/croissant${ind}.png`
}
document.querySelector(".left").addEventListener("click", prevPhoto);
document.querySelector(".right").addEventListener("click", nextPhoto);
