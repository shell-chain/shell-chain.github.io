// Проверка текущей темы и установка начального состояния
const switcher = document.getElementById('checkbox');
const switcher2 = document.getElementById('checkbox2');
const body = document.body;
const heroSection = document.querySelector('.hero-section');
const navbar = document.querySelector('.navbar');
const contentSection = document.querySelector('.content-section');
const footer = document.querySelector('.footer');


// Находим элементы на странице
const glitchText = document.getElementById('glitch-text');
const glitchText2 = document.getElementById('glitch-tex');
const secret = document.querySelector('.secret');
const faq = document.querySelectorAll('.faq-item');
const timeline = document.querySelector('.timeline');

// Проверка сохраненной темы из localStorage или установка по умолчанию
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'dark') {
  body.classList.add('dark-theme');
  heroSection.style.backgroundImage = "url('/images/night.png')";
  navbar.style.backgroundColor = '#333';
  document.addEventListener('DOMContentLoaded', function() {
    // Объявление переменной после загрузки DOM
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Проверка, что элементы найдены
    if (faqItems.length > 0) {
      faqItems.forEach(faqItem => {
        faqItem.classList.add('dark-theme-gradient');
      });
    } else {
    }
  });
  timeline.classList.add('dark-theme-gradient');
  contentSection.classList.add('dark-theme-gradient');
  heroSection.classList.add('dark-theme-gradient'); // Добавить класс для темной темы
  footer.classList.add('dark-theme-gradient'); // Добавить класс для светлой темы
  switcher.checked = false; // Включить чекбокс для темной темы
  switcher2.checked = false; // Выключить чекбокс для светлой темы
} else {
  body.classList.add('light-theme');
  heroSection.style.backgroundImage = "url('/images/day.png')";
  navbar.style.backgroundColor = '#999';
  document.addEventListener('DOMContentLoaded', function() {
    // Объявление переменной после загрузки DOM
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Проверка, что элементы найдены
    if (faqItems.length > 0) {
      faqItems.forEach(faqItem => {
        faqItem.classList.add('light-theme-gradient');
      });
    } else {
    }
  });
  timeline.classList.add('light-theme-gradient');
  contentSection.classList.add('light-theme-gradient'); // Добавить класс для светлой темы
  heroSection.classList.add('light-theme-gradient'); // Добавить класс для светлой темы
  footer.classList.add('light-theme-gradient');
  switcher.checked = true; // Выключить чекбокс для светлой темы
  switcher2.checked = true; // Выключить чекбокс для светлой темы
}

function toggleTheme(isLightTheme) {
  const body = document.querySelector('body');
  const timeline = document.querySelector('.timeline');
  const heroSection = document.querySelector('.hero-section');
  const navbar = document.querySelector('.navbar');
  const contentSection = document.querySelector('.content-section');
  const footer = document.querySelector('footer');

  if (isLightTheme) {
    // Светлая тема
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    timeline.classList.remove('dark-theme-gradient');
    timeline.classList.add('light-theme-gradient');
    heroSection.style.backgroundImage = "url('/images/day.png')";
    navbar.style.backgroundColor = '#999';

    // Обновление элементов с классом .faq-item
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
      faqItems.forEach(faqItem => {
        faqItem.classList.add('light-theme-gradient');
        faqItem.classList.remove('dark-theme-gradient');
      });
    } else {
      console.error("Элементы с классом .faq-item не найдены");
    }
    contentSection.classList.remove('dark-theme-gradient');
    contentSection.classList.add('light-theme-gradient');
    heroSection.classList.remove('dark-theme-gradient');
    heroSection.classList.add('light-theme-gradient');
    footer.classList.remove('dark-theme-gradient');
    footer.classList.add('light-theme-gradient');
    localStorage.setItem('theme', 'light');
  } else {
    // Темная тема
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    timeline.classList.add('dark-theme-gradient');
    timeline.classList.remove('light-theme-gradient');
    heroSection.style.backgroundImage = "url('/images/night.png')";
    navbar.style.backgroundColor = '#333';

    // Обновление элементов с классом .faq-item
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
      faqItems.forEach(faqItem => {
        faqItem.classList.add('dark-theme-gradient');
        faqItem.classList.remove('light-theme-gradient');
      });
    } else {
      console.error("Элементы с классом .faq-item не найдены");
    }
    contentSection.classList.add('dark-theme-gradient');
    contentSection.classList.remove('light-theme-gradient');
    heroSection.classList.remove('light-theme-gradient');
    heroSection.classList.add('dark-theme-gradient');
    footer.classList.add('dark-theme-gradient');
    footer.classList.remove('light-theme-gradient');
    localStorage.setItem('theme', 'dark');
  }
}

// Пример использования
switcher.addEventListener('change', function() {
  toggleTheme(this.checked); // true для светлой темы, false для темной
});

// Пример использования
switcher2.addEventListener('change', function() {
  toggleTheme(this.checked); // true для светлой темы, false для темной
});


// Добавляем обработчик события на клик по glitch-text
glitchText.addEventListener('click', function() {
  secret.style.display = 'flex';
  randomizeGlitch();
  randomizeGlitch();
});
// Добавляем обработчик события на клик по glitch-text
glitchText2.addEventListener('click', function() {
  secret.style.display = 'flex';
  randomizeGlitch();
  randomizeGlitch();
});

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
