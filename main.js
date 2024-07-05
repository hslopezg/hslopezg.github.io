function enlargeImage(card) {
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.addEventListener('click', closeEnlarged);

    // Crear copia de la card
    const enlargedCard = card.cloneNode(true);
    enlargedCard.classList.add('enlarged');
    enlargedCard.addEventListener('click', closeEnlarged);

    // Añadir overlay y card ampliada al cuerpo del documento
    document.body.appendChild(overlay);
    document.body.appendChild(enlargedCard);
}

function closeEnlarged() {
    const overlay = document.querySelector('.overlay');
    const enlargedCard = document.querySelector('.enlarged');
    if (overlay) overlay.remove();
    if (enlargedCard) enlargedCard.remove();
}

// Código para manejar el menú de hamburguesa
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    // Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    // Hamburger Animation
    hamburger.classList.toggle("toggle");
});

// Cerrar el menú al hacer clic en un enlace
links.forEach(link => {
    link.addEventListener('click', () => {
        // Si el menú está abierto, ciérralo
        if (navLinks.classList.contains("open")) {
            navLinks.classList.remove("open");
            hamburger.classList.remove("toggle");
            links.forEach(link => {
                link.classList.remove("fade");
            });
        }
    });
});


//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 2500;
let timeAutoNext = 6000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}



// Manejar el evento de clic en los botones "VER IMAGEN"
document.querySelectorAll('.transparent-btn').forEach(button => {
    button.addEventListener('click', event => {
        const imageUrl = event.currentTarget.getAttribute('data-image');
        window.open(imageUrl, '_blank');
    });
});

// Manejar el evento de clic en los enlaces de redes sociales y retrasar la redirección
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevenir la redirección inmediata

        // Simular el efecto hover agregando la clase hover
        link.classList.add('hover');

        const url = event.currentTarget.href;
        setTimeout(() => {
            window.open(url, '_blank'); // Abrir la URL en una nueva pestaña después de 0.5 segundos
            setTimeout(() => {
                location.reload(); // Refrescar la página después de que se haya abierto la nueva pestaña
            }, 500);
        }, 500); // Retrasar la redirección por 0.5 segundos (500 ms)
    });
});
