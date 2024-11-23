document.addEventListener('DOMContentLoaded', () => {
    // Obtener el nombre del usuario desde localStorage
    const username = localStorage.getItem('nombreUsuario');
    document.getElementById('username').textContent = username;
  
    // Botón de cerrar sesión
    document.getElementById('logoutButton').addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  });