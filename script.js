
//1 Alterar saudação
document.querySelector('#bnt1').addEventListener('click', () => {
    const pg1 = document.querySelector('#pg1')
    pg1.textContent = 'Espero que goste'
})

//2 Mudar cor de texto
document.querySelector('#bnt2').addEventListener('click', () => {
    const pg2 = document.querySelector('#pg2')
    pg2.style.color = '#d41111'
})

//3 Contar cliques
let contador = 0
document.querySelector('#bnt3').addEventListener('click', () => {
    contador++

    document.querySelector('#pg3').textContent = `Cliques realizados: ${contador}`
})

//4 Mostrar mensagem
document.querySelector('#bnt4').addEventListener('click', () => {
    const pg4 = document.querySelector('#pg4')
    pg4.textContent = 'Obrigado'
    pg4.style.color = '#04041d'
    pg4.style.fontSize = '24px'
}) 


//5 Alterar botões
//pt1
const blocos = document.querySelectorAll('.block1, .block2, .block3, .block4, .block5')
const button5 = document.querySelector('#bnt5')

let alterar = false

button5.addEventListener('click', () => {
    blocos.forEach((blocos) => {
        if(!alterar) {
            blocos.style.backgroundColor = '#087e8b'
            blocos.style.borderColor = '#064e57'
            blocos.style.borderRadius = '18px'
        } else {
            blocos.style.backgroundColor = ''
            blocos.style.borderColor = ''
        }
    })
    alterar = !alterar
})

//pt2
const botoes = document.querySelectorAll('#bnt1, #bnt2, #bnt3, #bnt4, #bnt5')
const botao5 = document.querySelector('#bnt5')

let alterado = false

    botao5.addEventListener('click', () => {
    botoes.forEach((button) => {
        if(!alterado) {
            button.style.backgroundColor = '#087e8b'
            button.style.borderColor = '#064e57'
        } else {
            button.style.backgroundColor = ''
            button.style.borderColor = ''
        }
    })
    alterado = !alterado
    })
