document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('bam');
    const button2 = document.getElementById('dyb');
    const bambooSection = document.getElementById('bamboo-section');
    const dybSection = document.getElementById('dyb-section');

    button.addEventListener('click', function() {
        button.classList.toggle('active');
        bambooSection.classList.toggle('visible');
        // Проверяем состояние другой секции и скрываем её при необходимости
        if (dybSection.classList.contains('visible')) {
            dybSection.classList.toggle('visible');
            button2.classList.toggle('active');
        }
    });

    button2.addEventListener('click', function() {
        button2.classList.toggle('active');
        dybSection.classList.toggle('visible');
        // Проверяем состояние другой секции и скрываем её при необходимости
        if (bambooSection.classList.contains('visible')) {
            bambooSection.classList.toggle('visible');
            button.classList.toggle('active');
        }
    });
});
