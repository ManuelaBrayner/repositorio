/* ==============================================
   PORTFÓLIO – script.js
   ============================================== */

function abrirMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('aberto');
}

var todosOsLinks = document.querySelectorAll('.menu a');
todosOsLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    menu.classList.remove('aberto');
  });
});

/* ALTERNADOR DE TEMA (MODO NOTURNO / DIURNO) */
var btnTema = document.getElementById('btn-tema');

if (localStorage.getItem('tema') === 'escuro') {
  document.body.classList.add('dark-mode');
  if (btnTema) btnTema.textContent = '☀️';
}

if (btnTema) {
  btnTema.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
      btnTema.textContent = '☀️';
      localStorage.setItem('tema', 'escuro');
    } else {
      btnTema.textContent = '🌙';
      localStorage.setItem('tema', 'claro');
    }
  });
}