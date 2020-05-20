/* 
 * Navbar Toggler
 */

// Variables
const btnTogglers = document.getElementsByClassName('navbar-toggler')

// Event Listeners
for(let i = 0; i < btnTogglers.length; i++){
    btnTogglers[i].addEventListener('click', showNavbar)
}

// Funciones
function showNavbar(){
    let id = this.getAttribute('data-target')
    let nav = document.getElementById(id)
    if(!nav.classList.contains('show')){
        nav.classList.add('show')
        this.setAttribute('aria-expanded', true)
    }else{
        nav.classList.remove('show')
        this.setAttribute('aria-expanded', false)
    }
}


/*
 * Boton de ir para arriba 
 */

// Variable
const btnTop = document.getElementsByClassName('go-to-top')[0]

// Evento
btnTop.addEventListener('click', () => {
    window.scrollTo({
        top: '0px',
        behavior: 'smooth'
    })
})

// Hacer que aparesca el boton
window.onscroll = () => {
    if(window.scrollY > 100){
        btnTop.style.clipPath = 'inset(0 0 0 0)'
    }else{
        btnTop.style.clipPath = 'inset(100% 0 0 0)'
    }
}

/*
 * Loader
 */

// Variables
const loader = document.getElementById('loader')
loader.style.transition = 'opacity .2s'

window.addEventListener('load', () => {
	document.body.style.overflow = 'auto'
	loader.style.opacity = 0
	setTimeout(() => {
		loader.remove()
	}, 200)
})

/**
 * Validacion
 */

// Variables
const campoNombre = document.getElementById('nombre')
const campoTelefono = document.getElementById('telefono')
const campoCorreo = document.getElementById('correo')
const campoMensaje = document.getElementById('mensaje')
const btnSend = document.getElementById('send')

if(btnSend !== null) {
    campoNombre.addEventListener('input', validarCampo)
    campoTelefono.addEventListener('input', validarCampo)
    campoCorreo.addEventListener('input', validarCampoEmail)
    campoMensaje.addEventListener('input', validarCampo)

    function validarCampo(){
        if(this.value !== ''){
            this.style.borderColor = 'lime'
        }else{
            this.style.borderColor = 'red'
        }
        activarBtn()
    }

    const expReg = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/

    function validarCampoEmail(){
        if(this.value !== '' && expReg.test(this.value)){
            this.style.borderColor = 'lime'
        }else{
            this.style.borderColor = 'red'
        }
        activarBtn()
    }

    function activarBtn(){
        if(campoNombre.value !== '' && campoMensaje.value !== '' && campoTelefono.value !== '' && campoCorreo.value !== '' && expReg.test(campoCorreo.value)){
            btnSend.removeAttribute('disabled')
        }else{
            btnSend.setAttribute('disabled', true)
        }
    }
}

/**
 * Titulo e imagen animados
 */

// Variables
const title = document.querySelector('#title-animated-letters > span')
const titleImg = document.querySelector('.banner-index .banner-index-title img')

if(title !== null) {
    window.addEventListener('load', () => {
        const letters = Array.from(title.textContent)
    
        let spans = '',
        time = .1
    
        letters.forEach(letter => {
            spans += `<span style="animation-delay: ${time}s;">${letter}</span>`
            time += .1
        })
    
        title.innerHTML = spans
    })

    window.addEventListener('load', () => {
        titleImg.style.animation = 'imgRotate 1.5s'
    })
}

/**
 * Mini galeria
 */

// Variables
const gallery = document.getElementById('gallery')

if(gallery) {
    gallery.addEventListener('click', showImg)

    function showImg(e){
        if(e.target.nodeName === 'IMG'){
            const src = e.target.getAttribute('src')
            const alt = e.target.getAttribute('alt')
            const modal = document.createElement('div')
            modal.id = 'modal'
            modal.innerHTML = `
            <div class="modal-content shadow">
                <div class="close-modal shadow"><i class="far fa-window-close"></i></div>
                <img src="${src}" alt="${alt}">
            </div>
            `
            document.body.appendChild(modal)
            
            modal.addEventListener('click', closeModal)
            function closeModal(e) {
                if(e.target.id === 'modal' || e.target.className === 'far fa-window-close'){
                    modal.remove()
                }
            }
        }
    }
}