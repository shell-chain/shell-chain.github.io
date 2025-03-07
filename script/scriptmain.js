// Проверка текущей темы и установка начального состояния
const switcher = document.getElementById('checkbox');
const body = document.body;
const heroSection = document.querySelector('.hero-section');
const navbar = document.querySelector('.navbar');
const contentSection = document.querySelector('.content-section');

// Проверка сохраненной темы из localStorage или установка по умолчанию
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'dark') {
  body.classList.add('dark-theme');
  heroSection.style.backgroundImage = "url('/images/night.png')";
  navbar.style.backgroundColor = '#333';
  contentSection.style.backgroundColor = '#202020';
  switcher.checked = false; // Включить чекбокс для темной темы
} else {
  body.classList.add('light-theme');
  heroSection.style.backgroundImage = "url('/images/day.png')";
  navbar.style.backgroundColor = '#999';
  contentSection.style.backgroundColor = '#d3d3d3';
  switcher.checked = true; // Выключить чекбокс для светлой темы
}

// Обработчик переключения темы
switcher.addEventListener('change', function() {
  if (this.checked) {
    // Светлая тема
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    heroSection.style.backgroundImage = "url('/images/day.png')";
    navbar.style.backgroundColor = '#999';
    contentSection.style.backgroundColor = '#d3d3d3';
    localStorage.setItem('theme', 'light');
  }
  else {
    // Темная тема
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    heroSection.style.backgroundImage = "url('/images/night.png')";
    navbar.style.backgroundColor = '#333';
    contentSection.style.backgroundColor = '#202020';
    localStorage.setItem('theme', 'dark');
  }
});