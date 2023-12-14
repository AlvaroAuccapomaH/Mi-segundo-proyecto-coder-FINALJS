
const loginFrom = document.querySelector('#loginForm');

loginFrom.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.querySelector('#emailLogin').value
    const password = document.querySelector('#passwordLogin').value
    console.log(email);
    console.log(password);

    const users = JSON.parse(localStorage.getItem('usuarios')) || []
    const validUser = users.find(user => user.email === email && user.contra1 === password)

    if (!validUser) {
        return alert("USUARIO Y/O CONTRASEÑA ES INCORRECTO")
    }
    alert(`BIENVENIDO ${validUser.nombre} ${validUser.apellido}`)
    window.location.href = '../pages/paginaPrincipal.html'
});

