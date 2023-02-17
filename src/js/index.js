const botoesSlider = document.querySelectorAll('.botao')
const slides = document.querySelectorAll('.slide')

botoesSlider.forEach((botao, indice)=>{
    botao.addEventListener('click', () => {
        const slideAtual = document.querySelector('.ativo')
        const botaoAtual = document.querySelector('.selecionado')
        botaoAtual.classList.remove('selecionado')
        slideAtual.classList.remove('ativo')
        slides[indice].classList.toggle('ativo') 
        botoesSlider[indice].classList.toggle('selecionado')         
    })    
})