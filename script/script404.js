const translations = {
  en: {
    home: "Home",
    players: "Players",
    serverInfo: "Server Info",
    secreta: "Error 404",
    headerTitle: "ShellChain - 404"
  },
  ru: {
    home: "Главная",
    players: "Игроки",
    serverInfo: "О сервере",
    secreta: "Ошибка 404",
    headerTitle: "ShellChain - 404"
  },
  ua: {
    home: "Головна",
    players: "Гравці",
    serverInfo: "Про сервер",
    secreta: "Помилка 404",
    headerTitle: "ShellChain - 404"
  }
};

function changeLanguage(language) {
  // Изменяем текст элементов в зависимости от выбранного языка
  const homeLink = document.querySelector('.navbar .links a:nth-child(1)');
  const playersLink = document.querySelector('.navbar .links a:nth-child(2)');
  const serverInfoLink = document.querySelector('.navbar .links a:nth-child(3)');
  const secretLink = document.querySelector('.navbar .links a:nth-child(4)');
  
  // Обновляем только текстовые узлы, не трогая иконки
  homeLink.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = translations[language].home; // Только текст, иконки не затрагиваются
    }
  });

  playersLink.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = translations[language].players;
    }
  });

  serverInfoLink.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = translations[language].serverInfo;
    }
  });

  secretLink.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = translations[language].secreta;
    }
  });

  document.title = translations[language].headerTitle;

  // Изменяем флаг
  setCurrentFlag(language);
}



    // Функция для изменения текущего флага
function setCurrentFlag(language) {
  const currentFlag = document.getElementById("current-flag");
  let flagSrc = "";

  // Устанавливаем флаг в зависимости от языка
  switch(language) {
    case 'ru':
      flagSrc = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png";
      break;
    case 'ua':
      flagSrc = "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg";
      break;
    case 'en':
    default:
      flagSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png";
      break;
  }

  // Изменяем изображение флага
  currentFlag.innerHTML = `<img src="${flagSrc}" alt="Current Language" />`;
}
    
    // Обработчик кликов по флагам для переключения языка
    const flags = document.querySelectorAll('.flag');
    flags.forEach(flag => {
      flag.addEventListener('click', (event) => {
        const lang = event.currentTarget.getAttribute('data-lang');
        changeLanguage(lang); // Меняем язык
        localStorage.setItem('language', lang); // Сохраняем язык в localStorage
      });
    });
    
    // Получаем сохраненный язык из localStorage или используем язык системы
    const savedLang = localStorage.getItem('language') || navigator.language.split('-')[0]; // Получаем язык из localStorage или по умолчанию язык системы
    changeLanguage(savedLang);  
