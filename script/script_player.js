const translations = {
  en: {
    home: "Home",
    players: "Players",
    serverInfo: "Server Info",
    secreta: "কারাবাস কতদিন স্থায়ী হয়েছিল?",
    headerTitle: "ShellChain - Home",
    timeline: {
      "2022": {
        title: "Error 404",
        description: "Start of the server, the birth of the great idea for Minecraft servers."
      },
      "2022-2022": {
        title: "Project Zone",
        description: "A more serious server that was better organized and developed."
      },
      "2022-2023": {
        title: "Infinity Mine",
        description: "The server developed some form of storyline, and new players joined."
      },
      "2023-2024": {
        title: "CopperCraft",
        description: "The administrator team changed, and a new approach to development was adopted. It could be considered a transition period."
      },
      "2024": {
        title: "MineShard",
        description: "The administrator team was reorganized, the server looked more professional, and the first advertisements were launched."
      },
      "2024-2025": {
        title: "ShellChain",
        description: "Advertising became professional, online, and server quality improved."
      }
    }
  },
  ru: {
    home: "Главная",
    players: "Игроки",
    serverInfo: "О сервере",
    secreta: "دريافت اوچتو ٿي.",
    headerTitle: "ShellChain - Главная",
    timeline: {
      "2022": {
        title: "Error 404",
        description: "Начало сервера, зарождение великой идеи по Minecraft-серверам."
      },
      "2022-2022": {
        title: "Project Zone",
        description: "Более серьёзный сервер, который был лучше организован и разработан."
      },
      "2022-2023": {
        title: "Infinity Mine",
        description: "На сервере появилось некое подобие сюжета и новые игроки."
      },
      "2023-2024": {
        title: "CopperCraft",
        description: "Состав администраторов поменялся, а также изменился взгляд на разработку. В какой-то мере это было межсезонье."
      },
      "2024": {
        title: "MineShard",
        description: "Состав администраторов был реорганизован, сервер выглядел солиднее, и появилась первая реклама."
      },
      "2024-2025": {
        title: "ShellChain",
        description: "Реклама стала профессиональной, онлайн и качество сервера улучшились."
      }
    }
  },
  ua: {
    home: "Головна",
    players: "Гравці",
    serverInfo: "Про сервер",
    secreta: "ရပ်တန့်သင့်သော်လည်း အချိန်နှောင်းသွားပေလိမ့်မည်။",
    headerTitle: "ShellChain - Головна",
    timeline: {
      "2022": {
        title: "Error 404",
        description: "Початок сервера, зародження великої ідеї для Minecraft-серверів."
      },
      "2022-2022": {
        title: "Project Zone",
        description: "Більш серйозний сервер, який був краще організований та розроблений."
      },
      "2022-2023": {
        title: "Infinity Mine",
        description: "На сервері з'явився деякий сюжет і нові гравці."
      },
      "2023-2024": {
        title: "CopperCraft",
        description: "Склад адміністраторів змінився, а також погляд на розробку. Це було певною мірою перехідним періодом."
      },
      "2024": {
        title: "MineShard",
        description: "Склад адміністраторів був реорганізований, сервер став більш професійним, з'явилася перша реклама."
      },
      "2024-2025": {
        title: "ShellChain",
        description: "Реклама стала професійною, онлайн і якість сервера покращились."
      }
    }
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

  // Обновляем текст для временной шкалы
  const timelineItems = document.querySelectorAll('.tl-item');
  timelineItems.forEach((item) => {
    const itemId = item.getAttribute('id'); // Получаем id элемента, например, "2022"

    // Проверяем, если у нас есть перевод для данного id
    if (translations[language].timeline[itemId]) {
      const content = translations[language].timeline[itemId];
      const contentTitle = item.querySelector('.tl-content h1');
      const contentText = item.querySelector('.tl-content p');
      
      contentTitle.textContent = content.title; // Обновляем заголовок
      contentText.textContent = content.description; // Обновляем описание
    }
  });

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
  contentSection.classList.add('dark-theme-gradient');
  heroSection.classList.add('dark-theme-gradient'); // Добавить класс для темной темы
  switcher.checked = false; // Включить чекбокс для темной темы
} else {
  body.classList.add('light-theme');
  heroSection.style.backgroundImage = "url('/images/day.png')";
  navbar.style.backgroundColor = '#999';
  contentSection.classList.add('light-theme-gradient'); // Добавить класс для светлой темы
  heroSection.classList.add('light-theme-gradient'); // Добавить класс для светлой темы
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
    contentSection.classList.remove('dark-theme-gradient'); // Добавить класс для светлой темы
    contentSection.classList.add('light-theme-gradient'); // Добавить класс для светлой темы
    heroSection.classList.remove('dark-theme-gradient');
    heroSection.classList.add('light-theme-gradient'); // Добавить класс для светлой темы
    localStorage.setItem('theme', 'light');
  }
  else {
    // Темная тема
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    heroSection.style.backgroundImage = "url('/images/night.png')";
    navbar.style.backgroundColor = '#333';
    contentSection.classList.add('dark-theme-gradient'); // Добавить класс для светлой темы
    contentSection.classList.remove('light-theme-gradient'); // Добавить класс для светлой темы
    heroSection.classList.remove('light-theme-gradient');
    heroSection.classList.add('dark-theme-gradient'); // Добавить класс для темной темы
    localStorage.setItem('theme', 'dark');
  }
});