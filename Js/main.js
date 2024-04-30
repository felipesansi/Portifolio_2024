function AbrirMenu() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('abrir')) {
      menuMobile.classList.remove('abrir');
  } else {
      menuMobile.classList.add('abrir');
  }
}
