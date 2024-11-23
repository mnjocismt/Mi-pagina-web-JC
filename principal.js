document.addEventListener('DOMContentLoaded', () => {
    // Obtener el nombre del usuario desde localStorage
    const username = localStorage.getItem('nombreUsuario');
    document.getElementById('username').textContent = username;
  
    // Botón de cerrar sesión
    document.getElementById('logoutButton').addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  });
  document.getElementById('logoutButton').addEventListener('click', () => {
    // Redirige a la página de inicio de sesión
    window.location.href = 'index.html';
});