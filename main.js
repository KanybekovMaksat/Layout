
document.querySelector('.header__burger-btn').addEventListener('click', () => {
    const mobileMenu = document.querySelector('.header__burger-nav')
    mobileMenu.classList.remove('burger-hidden')
    mobileMenu.classList.add('burger-show')
})


document.querySelector('.burger-close').addEventListener('click', () => {
    const mobileMenu = document.querySelector('.header__burger-nav')
    mobileMenu.classList.remove('burger-show')
    mobileMenu.classList.add('burger-hidden')
})




