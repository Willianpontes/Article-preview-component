const btnSubmit = document.querySelector('.botao')
const nav = document.querySelector('.div-active')

btnSubmit.addEventListener('click', () => {
    nav.classList.toggle('disable')
})
