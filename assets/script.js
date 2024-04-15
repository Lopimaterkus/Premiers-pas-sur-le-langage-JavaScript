const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

arrowLeft.addEventListener('click', () => {
	currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlide(currentSlideIndex);
    console.log('Clic sur la flèche gauche');
});

arrowRight.addEventListener('click', () => {
	currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlide(currentSlideIndex);
    console.log('Clic sur la flèche droite');
});

const banner = document.getElementById('banner');
const dotsContainer = banner.querySelector('.dots');

// Ajouter un point pour chaque diapositive
slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) {
        dot.classList.add('dot_selected');
    }
    dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('.dot');

// Fonction pour mettre à jour le point sélectionné
function updateSelectedDot(selectedIndex) {
    dots.forEach((dot, index) => {
        if (index === selectedIndex) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}
let currentSlideIndex = 0; // Variable pour suivre l'index de la diapositive actuelle

// Fonction pour mettre à jour le contenu de la diapositive
function updateSlide(index) {
    const slide = slides[index];
    const bannerImg = document.querySelector('.banner-img');
    const tagLine = document.querySelector('#banner p');

    bannerImg.src = "./assets/images/slideshow/" + slide.image;
    tagLine.innerHTML = slide.tagLine;

    updateSelectedDot(index); // Mettre à jour le point sélectionné
}
// Mettre à jour le point sélectionné au clic sur les points de navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlideIndex = index;
        updateSlide(currentSlideIndex);
    });
});