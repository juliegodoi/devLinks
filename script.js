function toggleMode() {
  const html = document.documentElement;
  const img = document.querySelector('#profile img');
  const buttonIcon = document.querySelector('#switch button i'); 

  html.classList.toggle('light');

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png');
    buttonIcon.classList.remove('bi-moon-stars');
    buttonIcon.classList.add('bi-sun');
  } else {
    img.setAttribute('src', './assets/avatar-dark.png');
    buttonIcon.classList.remove('bi-sun');
    buttonIcon.classList.add('bi-moon-stars');
  }
}

const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
