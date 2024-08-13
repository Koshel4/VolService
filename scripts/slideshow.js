const serviceData = [
    {
        "name": "Комплексное обслуживание организаций",
        "description": "Комплексное обслуживание организаций",
        "preview": "imgs/services/1/preview.png",
        "imgs": [
            "imgs/services/1/1.jpg",
            "imgs/services/1/2.jpg",
            "imgs/services/1/3.jpg"
        ]
    },
    {
        "name": "Обслуживание/монтаж/ремонт оборудования электрохозяйства до и выше 1000В (аттестованные специалисты)",
        "description": "Обслуживание/монтаж/ремонт оборудования электрохозяйства до и выше 1000В (аттестованные специалисты)<br><br>Поставка высоковольтной и низковольтной аппаратуры; кабельно-проводниковой, светотехнической и электрощитовой продукции; электроустановочных и электромонтажных изделий.",
        "preview": "imgs/services/2/preview.png",
        "imgs": [
            "imgs/services/2/1.jpg",
            "imgs/services/2/2.jpg",
            "imgs/services/2/3.jpg",
            "imgs/services/2/4.jpg",
            "imgs/services/2/5.jpg"
        ]
    },
    {
        "name": "Изготовление оснастки и индивидуального рабочего инструмента",
        "description": "Изготовление оснастки и индивидуального рабочего инструмента",
        "preview": "imgs/services/3/preview.png",
        "imgs": [
            "imgs/services/3/1.jpg",
            "imgs/services/3/2.jpg",
            "imgs/services/3/3.jpg"
        ]
    },
    {
        "name": "Обслуживание/монтаж/ремонт/поставка производственного оборудования",
        "description": "Обслуживание/монтаж/ремонт/поставка производственного оборудования",
        "preview": "imgs/services/4/preview.png",
        "imgs": [
            "imgs/services/4/1.jpg",
            "imgs/services/4/2.jpg",
            "imgs/services/4/3.jpg"
        ]
    },
    {
        "name": "Обслуживание/монтаж/ремонт/поставка производственного оборудования",
        "description": "Обслуживание/монтаж/ремонт/поставка производственного оборудования",
        "preview": "imgs/services/4/preview.png",
        "imgs": [
            "imgs/services/4/1.jpg",
            "imgs/services/4/2.jpg",
            "imgs/services/4/3.jpg"
        ]
    },
    {
        "name": "Обслуживание/монтаж/ремонт/поставка производственного оборудования",
        "description": "Обслуживание/монтаж/ремонт/поставка производственного оборудования",
        "preview": "imgs/services/4/preview.png",
        "imgs": [
            "imgs/services/4/1.jpg",
            "imgs/services/4/2.jpg",
            "imgs/services/4/3.jpg"
        ]
    },
    {
        "name": "Обслуживание/монтаж/ремонт/поставка производственного оборудования",
        "description": "Обслуживание/монтаж/ремонт/поставка производственного оборудования",
        "preview": "imgs/services/4/preview.png",
        "imgs": [
            "imgs/services/4/1.jpg",
            "imgs/services/4/2.jpg",
            "imgs/services/4/3.jpg"
        ]
    },
];

// ------------------------ Дальше опасная зона ------------------------
const slideshowContainer = document.querySelector('.slideshow-container');
const slidesContainer = slideshowContainer.querySelector('.slides');
const dotsContainer = slideshowContainer.querySelector('.dots');
let currentSlide = 0;
let slideInterval;

// Create slides and dots
serviceData.forEach((service, index) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.style.backgroundImage = `url(${service.imgs[0]})`;
    
    const caption = document.createElement('div');
    caption.className = 'slide-caption';
    caption.textContent = service.name;
    
    slide.appendChild(caption);
    slidesContainer.appendChild(slide);
    
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.addEventListener('click', () => {
        goToSlide(index);
        resetTimer();
    });
    dotsContainer.appendChild(dot);
});

function goToSlide(n) {
    slidesContainer.style.transform = `translateX(${-n * 100}%)`;
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === n);
    });
    currentSlide = n;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % serviceData.length;
    goToSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + serviceData.length) % serviceData.length;
    goToSlide(currentSlide);
}

function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    resetTimer();
});

document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    resetTimer();
});

// Initialize first slide and start timer
goToSlide(0);
resetTimer();