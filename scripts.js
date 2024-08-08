// scripts.js
$(document).ready(function() {
    $('.slick-container').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    const images = [
        'path/to/your/image1.jpg',
        'path/to/your/image2.jpg',
        'path/to/your/image3.jpg',
    ];

    const slickContainer = document.querySelector('.slick-container');

    images.forEach((image, index) => {
        const slickItem = document.createElement('div');
        slickItem.classList.add('slick-item');

        const img = document.createElement('img');
        img.src = image;
        img.alt = `Iklan ${index + 1}`;

        slickItem.appendChild(img);
        slickContainer.appendChild(slickItem);
    });

    // Reinitialize slick after dynamically adding items
    $('.slick-container').slick('unslick');
    $('.slick-container').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // Add marquee element dynamically
    const marqueeContainer = document.getElementById('marquee-container');
    const marquee = document.createElement('div');
    marquee.classList.add('marquee');
    marquee.innerHTML = '<p><img src="path/to/your/icon.png" alt="💬" /> Selamat Datang di PSG88 Pusat Slot Gacor Hari Ini Mudah Maxwin Deposit Slot Murah 5000 Dengan Game Play Slot Online Resmi Terlengkap Dan Terpercaya Bersama PSG88 !!!</p>';
    marqueeContainer.appendChild(marquee);
});
// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const dateTimeElement = document.getElementById('date-time');
        const now = new Date();
        const formattedTime = now.toLocaleString('en-GB', {
            timeZone: 'Asia/Jakarta',
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        dateTimeElement.textContent = formattedTime;
    }

    setInterval(updateTime, 1000);
    updateTime();
});const games = [
    { name: "Gates Of Olympus", imgSrc: "images/game1.png" },
    { name: "Gates Of Olympus 1000", imgSrc: "images/game2.png" },
    { name: "Sweet Bonanza", imgSrc: "images/game3.png" },
    { name: "Sweet Bonanza 1000", imgSrc: "images/game4.png" },
    { name: "Starlight Princess", imgSrc: "images/game5.png" },
    { name: "Starlight Princess 1000", imgSrc: "images/game6.png" },
    { name: "Sugar Rush", imgSrc: "images/game7.png" },
    { name: "Sugar Rush 1000", imgSrc: "images/game8.png" },
    { name: "Mahjong Win 2", imgSrc: "images/game9.png" },
    { name: "Wisdom Of Athena", imgSrc: "images/game10.png" },
    { name: "Mahjong Ways", imgSrc: "images/game11.png" },
    { name: "Mahjong Ways 2", imgSrc: "images/game12.png" },
    { name: "Lucky Neko", imgSrc: "images/game13.png" },
    { name: "Wild Bounty Showdown", imgSrc: "images/game14.png" },
    { name: "Caishen wins", imgSrc: "images/game15.png" },
    { name: "Dreams Of Macau", imgSrc: "images/game16.png" },
    { name: "Gem Saviour Conquest", imgSrc: "images/game17.png" },
    { name: "Majestic Treasures", imgSrc: "images/game18.png" },
    { name: "Prosperity Fortune Tree", imgSrc: "images/game19.png" },
    { name: "Werewolf's Hunt", imgSrc: "images/game20.png" },
    { name: "Lucky Twins Wilds ( MICRO GAMING )", imgSrc: "images/game21.png" },
    { name: "Legacy Of Kong Maxways ( SPADE GAMING )", imgSrc: "images/game22.png" },
    { name: "Naughty Wukong ( HABANERO )", imgSrc: "images/game23.png" },
    { name: "Bufflo Bonus ( SBO )", imgSrc: "images/game24.png" },
    { name: "Fruit Gemz Splitz ( YGG )", imgSrc: "images/game25.png" },
];

function getRandomRTP() {
    return Math.floor(Math.random() * (91 - 85 + 1)) + 85; // RTP random antara 30% dan 100%
}

function createGameBox(game) {
    const gameBox = document.createElement('div');
    gameBox.classList.add('game-box');

    const img = document.createElement('img');
    img.src = game.imgSrc;
    img.alt = game.name;

    const title = document.createElement('div');
    title.classList.add('game-title');
    title.textContent = game.name;

    const rtp = document.createElement('div');
    rtp.classList.add('rtp');
    rtp.textContent = `RTP: ${getRandomRTP()}%`;

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    const mainBtn = document.createElement('a');
    mainBtn.href = "#";
    mainBtn.classList.add('button', 'main-btn');
    mainBtn.textContent = "MAIN";

    const demoBtn = document.createElement('a');
    demoBtn.href = "#";
    demoBtn.classList.add('button', 'demo-btn');
    demoBtn.textContent = "POLA";

    buttons.appendChild(mainBtn);
    buttons.appendChild(demoBtn);

    gameBox.appendChild(img);
    gameBox.appendChild(title);
    gameBox.appendChild(rtp);
    gameBox.appendChild(buttons);

    return gameBox;
}

function updateRTPs() {
    const rtps = document.querySelectorAll('.rtp');
    rtps.forEach(rtp => {
        rtp.textContent = `RTP: ${getRandomRTP()}%`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    games.forEach(game => {
        const gameBox = createGameBox(game);
        gameContainer.appendChild(gameBox);
    });

    // Update RTP setiap 1 jam (3600000 milidetik)
    setInterval(updateRTPs, 3600000);
});

