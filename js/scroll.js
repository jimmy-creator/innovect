let scrollAmount = 0;
const moveCarousel = (direction) => {
    const carousel = document.querySelector('.carousel');
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    scrollAmount += direction * itemWidth;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
}
