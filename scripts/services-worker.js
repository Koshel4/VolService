const data = [
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
];

const servicesBox = document.querySelector('.services-grid');
const serviceModal = document.getElementById('serviceModal');
const imageModal = document.getElementById('imageModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const imageGallery = document.getElementById('imageGallery');
const fullSizeImage = document.getElementById('fullSizeImage');
const closeBtns = document.getElementsByClassName('close');

data.forEach((service, index) => {
    servicesBox.innerHTML += `
        <div class="service-item" data-index="${index}">
            <img src="${service.preview}" alt="${service.name}" class="service-icon">
            <p class="service-description"><strong>${service.name}</strong></p>
        </div>
    `;
});

servicesBox.addEventListener('click', (e) => {
    const serviceItem = e.target.closest('.service-item');
    if (serviceItem) {
        const index = serviceItem.dataset.index;
        openModal(data[index]);
    }
});

function openModal(service) {
    modalTitle.textContent = service.name;
    modalDescription.innerHTML = service.description;
    
    imageGallery.innerHTML = '';
    service.imgs.forEach(img => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'image-container';
        
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.alt = service.name;
        imgElement.addEventListener('click', () => openImageModal(img));
        
        imgContainer.appendChild(imgElement);
        imageGallery.appendChild(imgContainer);
    });
    
    if (window.matchMedia('(max-width: 768px)').matches) {
        serviceModal.style.display = 'flex';
    }
    serviceModal.style.display = 'flex';
    setTimeout(() => serviceModal.classList.add('show'), 50);
}

function openImageModal(imgSrc) {
    fullSizeImage.src = imgSrc;
    imageModal.style.display = 'flex';
}

Array.from(closeBtns).forEach(btn => {
    btn.onclick = function() {
        serviceModal.classList.remove('show');
        setTimeout(() => {
            serviceModal.style.display = 'none';
            imageModal.style.display = 'none';
        }, 300);
    }
});

window.onclick = function(event) {
    if (window.matchMedia('(max-width: 1000px)').matches) {
        if ($("#nav")[0].classList.contains("change") && event.target == $("#menu-overlay")[0]) {
            closeMobileMenuBtn.click();
        }
    }

    if (event.target == serviceModal || event.target == imageModal) {
        serviceModal.classList.remove('show');
        setTimeout(() => {
            serviceModal.style.display = 'none';
            imageModal.style.display = 'none';
        }, 300);
    }
}