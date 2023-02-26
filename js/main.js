function menuToggle() {
  const btnToggle = document.querySelector('.btn-menu-toggle-js');
  const sidebar = document.querySelector('.sidebar-js');

  btnToggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
  });
}

menuToggle();