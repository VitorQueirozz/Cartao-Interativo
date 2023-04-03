let resultadoNumero = document.querySelector('.resNumero')
let resultadoNome = document.querySelector('.resNome')
let resultadoMes = document.querySelector('.resMes')
let resultadoAno = document.querySelector('.resAno')
let resultadoCvc = document.querySelector('.resCVC')

let formulario = document.querySelector('.formulario')
let inputs = document.querySelectorAll('.inputs')
let span= document.querySelectorAll('.required')

let botao = document.querySelector('.botao')

let filled = true;

const nome = document.querySelector('#nome')

nome.addEventListener('keypress', function(eve){
    const keyCode = (eve.keyCode ? eve.keyCode : eve.wich)

    if(keyCode > 47 && keyCode < 58) {
        eve.preventDefault()
    }
})

const numero = document.querySelector('#numero')

numero.addEventListener('keypress', function(eve){
    const keyCode = (eve.keyCode ? eve.keyCode : eve.wich)

    if(keyCode < 48 || keyCode > 57) {
        eve.preventDefault()
    }
})

const mes = document.querySelector('#mes')

mes.addEventListener('keypress', function(eve){
    const keyCode = (eve.keyCode ? eve.keyCode : eve.wich)

    if(keyCode < 48 || keyCode > 57) {
        eve.preventDefault()
    }
})

const ano = document.querySelector('#ano')

ano.addEventListener('keypress', function(eve){
    const keyCode = (eve.keyCode ? eve.keyCode : eve.wich)

    if(keyCode < 48 || keyCode > 57) {
        eve.preventDefault()
    }
})

const cvc = document.querySelector('#cvc')

cvc.addEventListener('keypress', function(eve){
    const keyCode = (eve.keyCode ? eve.keyCode : eve.wich)

    if(keyCode < 48 || keyCode > 57) {
        eve.preventDefault()
    }
})

function setErro(index) {
    inputs[index].style.border = '1px solid red'
    span[index].style.display = 'block'
}

function removeErro(index) {
    inputs[index].style.border = '1px solid var(--primaryLinear2)'
    span[index].style.display = 'none'
}

function verificarNome() {
    resultadoNome.innerText = `${inputs[0].value}`
    if(inputs[0].value.length == '') {
        setErro(0)
    } else {
        removeErro(0)
    }
}

function verificarNumero() {
    resultadoNumero.innerText = `${inputs[1].value}`
    if(inputs[1].value.length < 16 || inputs[1].value.length == '') {
        setErro(1)
    } else {
        removeErro(1)
    }
} 

function verificarMes() {
    resultadoMes.innerText = `${inputs[2].value}`
    if(inputs[2].value.length < 2 || inputs[2].value.length == '') {
        setErro(2)
    } else {
        removeErro(2)
    }
}

function verificarAno() {
    resultadoAno.innerText = `/${inputs[3].value}`
    if(inputs[3].value.length < 2 || inputs[3].value.length == '') {
        setErro(3)
    } else {
        removeErro(3)
    }
}

function verificarCvc() {
    resultadoCvc.innerText = `${inputs[4].value}`
    if(inputs[4].value.length == '' || inputs[4].value.length < 3) {
        setErro(4)
    } else {
        removeErro(4)
    }
}

let valida = true

function chamarModal() {
    let modal = document.querySelector('.modal')
    modal.classList.add('ativo')
    formulario.classList.add('ativo')
}

function verificarForm(event){
    event.preventDefault()
    verificarNome()
    verificarNumero()
    verificarMes()
    verificarAno()
    verificarCvc()

    //chamarModal()
}

/*formulario.addEventListener('submit', verificarForm)*/
botao.addEventListener('click', verificarForm)




let btnModal = document.querySelector('.btn-modal')

function limparInput() {
    inputs[0].value = ''
    inputs[1].value = ''
    inputs[2].value = ''
    inputs[3].value = ''
    inputs[4].value = ''
}

function limparModal() {
    let modal = document.querySelector('.modal')
    modal.classList.remove('ativo')
    formulario.classList.remove('ativo')
    limparInput()
}

function verificarEnvio() {
    if((inputs[0].value.length > 2) && (inputs[1].value.length > 15) && (inputs[2].value.length > 1) && (inputs[3].value.length > 1) && (inputs[4].value.length > 2)) {
        botao.disabled = true
        chamarModal()
    } 
    botao.disabled = false
}


btnModal.addEventListener('click', limparModal)