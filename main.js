const nextBtn = document.querySelector('.container-slider-content-btn.right')
const prevBtn = document.querySelector('.container-slider-content-btn.left')
const slider = document.querySelector('.container-slider-content-img')

const images = ['./public/media/slide_1.jpg', './public/media/slide_2.jpg', './public/media/slide_3.jpg']

let currentIndex = 0

nextBtn.addEventListener('click', () => {
    currentIndex++
    if (currentIndex >= images.length) {
        currentIndex = 0
    }
    slider.src = images[currentIndex]
})

prevBtn.addEventListener('click', () => {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = images.length - 1
    }
    slider.src = images[currentIndex]
})
