const servicesBox = document.querySelector('.services-grid');
const serviceModal = document.getElementById('serviceModal');
const imageModal = document.getElementById('imageModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const imageGallery = document.getElementById('imageGallery');
const fullSizeImage = document.getElementById('fullSizeImage');
const closeBtns = document.getElementsByClassName('close');
const scrollableContent = document.getElementById('modalContent');

var titleFontSize = Number(window.getComputedStyle(modalTitle, null).getPropertyValue('font-size').replace('px', ''));

serviceData.forEach((service, index) => {
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
        openModal(serviceData[index]);
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
    
    serviceModal.style.display = 'flex';
    modalContent.scroll(0, 0);
    setTimeout(() => serviceModal.classList.add('show'), 50);
}

function openImageModal(imgSrc) {
    fullSizeImage.src = imgSrc;
    imageModal.style.display = 'flex';
}

function closeServiceModal() {
    serviceModal.classList.remove('show');
    setTimeout(() => {
        serviceModal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

function closeImageModal() {
    imageModal.style.display = 'none';
}

serviceModal.querySelector('.close').addEventListener('click', closeServiceModal);
imageModal.querySelector('.close').addEventListener('click', closeImageModal);

window.onclick = function(event) {
    if (window.matchMedia('(max-width: 1000px)').matches) {
        if ($("#nav")[0].classList.contains("change") && event.target == $("#menu-overlay")[0]) {
            closeMobileMenuBtn.click();
        }
    }

    if (event.target == serviceModal) {
        closeServiceModal();
    } else if (event.target == imageModal) {
        closeImageModal();
    }
}

// modalContent.onscroll = function() {
// let previous = -1;
//     if (modalContent.scrollTop > 40 && previous < modalContent.scrollTop) {
//         previous = modalContent.scrollTop;
//         let fontSize = lerp(titleFontSize, titleFontSize * 0.8, (modalContent.scrollTop - 40) / 140);
//         fontSize = Math.max(titleFontSize * 0.8, Math.min(titleFontSize, fontSize));
//         console.log(modalContent.scrollTop);
//         modalTitle.style.fontSize = `${Math.round(fontSize)}px`;
//     }
//     else {
//         modalTitle.style.fontSize = `${titleFontSize}px`;
//     }
// }