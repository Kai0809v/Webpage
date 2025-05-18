// 获取所有的轮播图片
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

// 显示当前图片
function showSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// 切换到下一张图片
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
}

// 每隔 5 秒切换一次图片
setInterval(nextSlide, 5000);

// 初始化显示第一张图片
showSlide();