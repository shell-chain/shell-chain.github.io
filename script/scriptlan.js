const translations = {
    en: {
      home: "Home",
      players: "Players",
      serverInfo: "Server Info",
      headerTitle: "ShellChain - Home"
    },
    ru: {
      home: "Главная",
      players: "Игроки",
      serverInfo: "О сервере",
      headerTitle: "ShellChain - Главная"
    },
    ua: {
      home: "Головна",
      players: "Гравці",
      serverInfo: "Про сервер",
      headerTitle: "ShellChain - Головна"
    }
  };
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
  
  // Функция для обновления текста на странице
  function changeLanguage(language) {
    // Изменяем текст элементов в зависимости от выбранного языка
    document.querySelector('.navbar .links .active').textContent = translations[language].home;
    document.querySelector('.navbar .links a:nth-child(2)').textContent = translations[language].players;
    document.querySelector('.navbar .links a:nth-child(3)').textContent = translations[language].serverInfo;
    document.title = translations[language].headerTitle;
    
    // Изменяем флаг
    setCurrentFlag(language);
  }
  
