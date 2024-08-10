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
            "imgs/services/2/3.jpg"
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

servicesBox = document.querySelector('.services-grid');

data.forEach(service => {
    servicesBox.innerHTML += `
        <div class="service-item">
            <img src="${service.preview}" alt="${service.name}" class="service-icon">
            <p class="service-description"><strong>${service.name}</strong></p>
        </div>
    `
});