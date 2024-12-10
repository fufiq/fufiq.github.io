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
