document.addEventListener('DOMContentLoaded', function () {


    const storedUsers = localStorage.getItem('usuarios');
    const usuarios = storedUsers ? JSON.parse(storedUsers) : [];


    const usuario = {
        nombre: '',
        apellido: '',
        email: '',
        contra1: '',
        contra2: ''
    }

    const inputUser = document.querySelector('#nombre')
    const inputLastName = document.querySelector('#apellido')
    const inputEmail = document.querySelector('#email')
    const inputContra1 = document.querySelector('#contra1')
    const inputContra2 = document.querySelector('#contra2')
    const inputEnviar = document.querySelector('#enviar')
    const validarRegistro = document.querySelector('#registroCorrecto')


    inputUser.addEventListener('input', validar)
    inputLastName.addEventListener('input', validar)
    inputEmail.addEventListener('input', validar)
    inputContra1.addEventListener('input', validar)
    inputContra2.addEventListener('input', validar)

    function validar(e) {
        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
            usuario[e.target.name] = ''
            comprobarUsuario()
            return
        }

        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es valido', e.target.parentElement)
            usuario[e.target.name] = ''
            comprobarUsuario()
            return
        }

        if ((e.target.id === 'nombre' || !validarNombre(e.target.value)) && (e.target.value.length) < 6) {
            mostrarAlerta('El nombre no es valido', e.target.parentElement)
            usuario[e.target.name] = ''
            comprobarUsuario()
            return
        }

        if ((e.target.id === 'apellido' || !validarNombre(e.target.value)) && (e.target.value.length) < 6) {
            mostrarAlerta('El apellido no es valido', e.target.parentElement)
            usuario[e.target.name] = ''
            comprobarUsuario()
            return
        }

        if ((e.target.id === 'contra1' && !validarContra(e.target.value))) {
            mostrarAlerta('La contraseña no es valida considerar mayuscula, simbolo y numeros', e.target.parentElement)
            usuario[e.target.name] = ''
            comprobarUsuario()
            return
        }

        if ((e.target.id === 'contra2' && !validarContra(e.target.value))) {
            mostrarAlerta('La contraseña no es valida considerar mayuscula, simbolo y numeros', e.target.parentElement)
            usuario[e.target.name] = ''
            comprobarUsuario()
            return
        }

        if (e.target.id === 'contra2' && e.target.value !== inputContra1.value) {
            mostrarAlerta('Las contraseñas no coinciden', e.target.parentElement)
            usuario[e.target.name] = ''
            comprobarUsuario()
            return
        }


        limpiarAlerta(e.target.parentElement)

        usuario[e.target.name] = e.target.value.trim().toLowerCase()

        comprobarUsuario()
    }

    function mostrarAlerta(mensaje, referencia) {

        limpiarAlerta(referencia)

        const error = document.createElement('P')
        error.textContent = mensaje
        error.classList.add('validacion')
        referencia.appendChild(error)
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.validacion')
        if (alerta) {
            alerta.remove()
        }
    }

    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email)
        return resultado
    }

    function validarNombre(nombre) {
        const expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        const resultado = expRegNombre.test(nombre)
        return resultado
    }

    function validarContra(contra) {
        const expRegContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
        const resultado = expRegContra.test(contra)
        return resultado
    }

    function comprobarUsuario() {
        if (Object.values(usuario).includes('')) {
            inputEnviar.style.cursor = 'none'
            inputEnviar.disabled = true;
            inputEnviar.classList.add('btn2')

            return
        }

        inputEnviar.classList.remove('btn2')
        inputEnviar.style.cursor = 'pointer'
        inputEnviar.disabled = false;

    }

    function okRegistro() {
        validarRegistro.classList.add("open-slide")
    }

    inputEnviar.addEventListener('click', function (e) {
        e.preventDefault();
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        okRegistro();
    });


})