const colorOption1 = document.querySelector('.card__color--option1');
const colorOption2 = document.querySelector('.card__color--option2');
const image = document.querySelector('.card__img');
const card = document.querySelector('.card');

colorOption1.addEventListener('click', () => {
    image.src = '/image/white.png';
    card.style.backgroundColor = 'var(--bg-color-option1)';
})

colorOption2.addEventListener('click', () => {
    image.src = '/image/black.png';
    card.style.backgroundColor = 'var(--bg-color-option2)';
})