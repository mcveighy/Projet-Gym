const imageContainer = document.getElementById('img-cta');
const imageText = document.getElementById('img-text');
const images = [
    'images/studio.jpg',
    'images/peso.jpg',
    'images/punho.jpg',
    'images/salaBox.jpg',
    'images/backgraudhoman.jpg'
];
const texts = [
    'Don\'t stop when you\'re tired, stop when you\'re done',
    'Success starts with self-discipline.',
    'The pain you feel today will be the strength you feel tomorrow.',
    'Push yourself because no one else is going to do it for you.',
    'Strength doesn\'t come from what you can do; it comes from overcoming what you thought you couldn\'t.'
];
let currentIndex = 0;

function changeImage() {
    imageContainer.style.opacity = 0;
    imageText.style.opacity = 0;
    setTimeout(() => {
        imageContainer.src = images[currentIndex];
        imageText.textContent = texts[currentIndex];
        imageContainer.style.opacity = 1;
        imageText.style.opacity = 1;
        currentIndex = (currentIndex + 1) % images.length;
    }, 1000); // Tempo de transição para a próxima imagem
}

// Iniciar a troca de imagens
setInterval(changeImage, 5000); // Troca de imagem a cada 3 segundos
