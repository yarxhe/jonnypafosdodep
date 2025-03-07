// Инициализация AOS
AOS.init({
    once: false,
    offset: 100,
    duration: 800,
    easing: 'ease-in-out',
    delay: 0
});

// Функция установки аватара
function setProfileAvatar(imageUrl) {
    const avatarEl = document.getElementById('profile-avatar');
    if (avatarEl) {
        avatarEl.style.backgroundImage = `url('${imageUrl}')`;
    }
}

// Функция установки изображений команд в банлисте
function setBanItemImage(id, imageUrl) {
    const imgEl = document.getElementById(id);
    if (imgEl) {
        imgEl.style.backgroundImage = `url('${imageUrl}')`;
    }
}

// Функция установки ссылок на социальные сети
function setSocialLink(id, url) {
    const linkEl = document.getElementById(id);
    if (linkEl) {
        linkEl.href = url;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Параллакс фон
    const bg = document.getElementById('parallax-bg');
    for (let i = 0; i < 30; i++) {
        const dot = document.createElement('div');
        dot.classList.add('parallax-dot');
        const size = Math.random() * 15 + 5;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        const colors = ['rgba(99,102,241,0.3)', 'rgba(236,72,153,0.3)', 'rgba(0,247,255,0.3)'];
        dot.style.background = colors[Math.floor(Math.random() * 3)];
        bg.appendChild(dot);
    }

    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
        const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
        document.querySelectorAll('.parallax-dot').forEach((dot, index) => {
            const speed = index % 3 === 0 ? 2 : index % 3 === 1 ? 4 : 6;
            dot.style.transform = `translate(${moveX/speed}px, ${moveY/speed}px)`;
        });
    });

    // Установка изображений
    setProfileAvatar('images/avatar.png'); // Локальный аватар
    setBanItemImage('ban-item-img-1', 'images/boston.png');
    setBanItemImage('ban-item-img-2', 'images/dota.png');
    setBanItemImage('ban-item-img-3', 'images/m80.png');

    // Социальные сети
    setSocialLink('instagram-link', 'https://instagram.com/jonnypaFosdodep');
    setSocialLink('telegram-link', 'https://t.me/Svodiii');
    setSocialLink('vk-link', 'https://vk.com/fuckingmatematika');
    setSocialLink('twitter-link', 'https://twitter.com/jonnypaFosdodep');

    // Кнопка прокрутки вниз
    document.getElementById('scroll-down').addEventListener('click', (e) => {
        e.preventDefault();
        const statsSection = document.getElementById('stats');
        statsSection.scrollIntoView({ behavior: 'smooth' });

        // Анимация для диаграмм
        setTimeout(() => {
            document.querySelectorAll('.pie-chart').forEach(chart => {
                chart.style.animation = 'rotateChart 1.5s ease-in-out';
            });
        }, 500);
    });

    // Кнопка прокрутки вверх
    const scrollTopBtn = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.pageYOffset > 300);
    });
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});