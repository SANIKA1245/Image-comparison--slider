const slider = document.querySelector('.slider');
const img2 = document.querySelector('.img-2');

slider.addEventListener('mousedown', (e) => {
    e.preventDefault();
    window.addEventListener('mousemove', slideImage);
    window.addEventListener('mouseup', () => {
        window.removeEventListener('mousemove', slideImage);
    });
});

function slideImage(e) {
    const sliderPos = e.clientX;
    const container = slider.parentElement;
    const containerWidth = container.offsetWidth;

    if (sliderPos >= 0 && sliderPos <= containerWidth) {
        slider.style.left = `${sliderPos}px`;
        img2.style.clip = `rect(0, ${sliderPos}px, 100%, 0)`;
    }
}
