
          const glitchText = document.getElementById('glitch-text');
      const glitchText2 = document.getElementById('glitch-tex');
      const secret = document.querySelector('.secret');


function randomizeGlitch() {
  // Рандомные интервалы для изменения
  const interval = Math.floor(Math.random() * (500 - 200 + 1)) + 200; // между 200 и 500 миллисекундами
  const randomChance = Math.random();

  // Изменяем текст
  const textElements = document.querySelectorAll('h1, p,div,i,a,h2,h3,section');
  textElements.forEach(element => {
      if (element) { // Проверка, существует ли элемент
          const glitchClass = chooseRandomGlitchClass(); // Выбираем случайный глитч-класс
          element.classList.toggle(glitchClass);
      }
  });

  // Изменяем изображения
  const images = document.querySelectorAll('.image');
  images.forEach(image => {
      if (image) { // Проверка, существует ли элемент
          const glitchClass = chooseRandomGlitchClass();
          image.classList.toggle(glitchClass);
      }
  });

  // Скрытие или появление элементов
  const hideShowChance = Math.random();
  if (hideShowChance > 0.8) {
      const randomElement = Math.random() > 0.5 ? textElements[Math.floor(Math.random() * textElements.length)] : images[Math.floor(Math.random() * images.length)];
      if (randomElement) { // Проверка, существует ли элемент
          // Если элемент скрыт, то показываем его
          if (randomElement.classList.contains('hidden')) {
              randomElement.classList.remove('hidden');
          } else {
              randomElement.classList.add('hidden');
          }
      }
  }

  // Изменение фона
  if (randomChance > 0.5) {
      document.body.classList.toggle('glitched-background');
  }

  // Рекурсивный вызов через рандомное время
  setTimeout(randomizeGlitch, interval);
}

// Функция для выбора случайного глитч-класса
function chooseRandomGlitchClass() {
  const glitchClasses = ['glitched', 'glitched2', 'glitched3'];
  const randomIndex = Math.floor(Math.random() * glitchClasses.length);
  return glitchClasses[randomIndex];
}

// Функция для создания случайных элементов
function createRandomElement() {
  const randomType = Math.random();

  const newElement = document.createElement('div');
  newElement.classList.add('random-element');

  if (randomType > 0.5) {
      // Создаем случайный текст
      newElement.textContent = 'Новый элемент появился!';
      newElement.classList.add('glitched-text-size', 'glitched-font');
      newElement.style.color = getRandomColor();
  } else {
      // Создаем случайное изображение
      const newImage = document.createElement('img');
      newImage.src = 'your-image.jpg'; // Замените на URL вашего изображения
      newImage.classList.add('glitched-image');
      newElement.appendChild(newImage);
  }

  // Добавляем новый элемент на страницу
  document.body.appendChild(newElement);

  // Удаляем элемент через 3 секунды (можно изменить время)
  setTimeout(() => {
      newElement.remove();
  }, 3000);
}

// Функция для генерации случайного цвета
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Получаем все элементы с классом .faq-item
const faqItems = document.querySelectorAll('.faq-item');

// Добавляем обработчик события для каждого элемента
faqItems.forEach(item => {
  item.addEventListener('click', () => {
    // Проверяем, открыт ли текущий вопрос
    const isOpen = item.classList.contains('open');
    
    // Закрываем все вопросы
    faqItems.forEach(i => i.classList.remove('open'));

    // Если текущий вопрос не открыт, открываем его
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});



  // Получаем элементы
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  // Обработчик клика по гамбургеру
  hamburger.addEventListener('click', () => {
    // Переключаем класс toggle для анимации
    hamburger.classList.toggle('toggle');
    // Переключаем класс active для показа меню
    menu.classList.toggle('active');
  });


  // Получаем все элементы с классом .tl-item
document.querySelectorAll('.tl-item').forEach(item => {
  item.addEventListener('click', function() {
    // Проверяем, если ширина экрана меньше 768px (мобильное устройство)
    if (window.innerWidth <= 768) {
      const title = item.querySelector('.tl-content h1').textContent; // Получаем заголовок
      const text = item.querySelector('.tl-content p').textContent; // Получаем текст
      const date = item.getAttribute('data-time'); // Получаем дату из data-time

      // Вставляем полученные данные в меню
      document.getElementById('mobile-title').textContent = title;
      document.getElementById('mobile-text').textContent = text;
      document.getElementById('mobile-date').textContent = date; // Отображаем дату

      // Показываем меню
      document.getElementById('mobile-menu').classList.add('show');
    }
  });
});

// Закрытие меню (по клику на сам контейнер)
document.getElementById('mobile-menu').addEventListener('click', function(e) {
  if (e.target !== this) return;
  this.classList.remove('show');
});

// Проверка, было ли уже согласие в localStorage
function checkConsent() {
  return localStorage.getItem("cookies_accepted") === "true";
}

// Если пользователь не дал согласие, показываем баннер
if (!checkConsent()) {
  document.getElementById("consent-banner").style.display = "block";
}

// Элементы
const consentBanner = document.getElementById('consent-banner');
const settingsPanel = document.getElementById('settings-panel');
const acceptButton = document.getElementById('accept-all');
const customizeButton = document.getElementById('customize-settings');
const backButton = document.getElementById('back');
const disableCookiesButton = document.getElementById('disable-cookies');

// Обработчик кнопки "Согласиться"
acceptButton.addEventListener('click', function() {
  // Сохраняем согласие в localStorage
  localStorage.setItem("cookies_accepted", "true");
  consentBanner.style.display = 'none';
});

// Обработчик кнопки "Настроить"
customizeButton.addEventListener('click', function() {
  // Скрыть баннер с запросом согласия и показать панель настроек
  consentBanner.style.display = 'none';
  settingsPanel.style.display = 'block';
});

// Обработчик кнопки "Назад" на панели настроек
backButton.addEventListener('click', function() {
  settingsPanel.style.display = 'none';
  consentBanner.style.display = 'block';
});

// Обработчик кнопки "Отключить cookies"
disableCookiesButton.addEventListener('click', function() {
  // Показываем предупреждение, что сайт не будет работать без cookies
  const userConfirmed = confirm('Предупреждение: сайт не будет работать без cookies. Вы уверены, что хотите продолжить?');
  if (userConfirmed) {
    window.location.href = 'https://youtube.com/shorts/sU5R9WarEH4'; // Покидаем сайт
  } else {
    settingsPanel.style.display = 'none';
    consentBanner.style.display = 'block';
  }
});