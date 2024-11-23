// Selección de contenedores
const loginContainer = document.getElementById('loginContainer');
const registerContainer = document.getElementById('registerContainer');

// Mostrar formulario de registro
document.getElementById('showRegister').addEventListener('click', () => {
    loginContainer.style.display = 'none'; // Oculta el contenedor de inicio de sesión
    registerContainer.style.display = 'block'; // Muestra el contenedor de registro
});

// Mostrar formulario de inicio de sesión
document.getElementById('showLogin').addEventListener('click', () => {
    registerContainer.style.display = 'none'; // Oculta el contenedor de registro
    loginContainer.style.display = 'block'; // Muestra el contenedor de inicio de sesión
});

// Registro de usuario
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario

    // Obtener valores del formulario de registro
    const nombres = document.getElementById('nombres').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const genero = document.getElementById('genero').value;

    // Guardar datos del usuario en localStorage
    const usuario = { nombres, apellidos, email, password, genero };
    localStorage.setItem(email, JSON.stringify(usuario));

    alert('¡Cuenta creada exitosamente! Por favor, inicia sesión.');
    document.getElementById('registerForm').reset(); // Limpia el formulario de registro

    // Cambiar a la vista de inicio de sesión
    registerContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

// Inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario

    // Obtener valores del formulario de inicio de sesión
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    // Recuperar datos del usuario desde localStorage
    const usuario = JSON.parse(localStorage.getItem(email));

    if (usuario && usuario.password === password) {
        alert(`¡Bienvenido, ${usuario.nombres}!`);
        window.location.href = 'principal.html'; // Redirige a la página principal
    } else {
        alert('Correo o contraseña incorrectos.');
    }
});




