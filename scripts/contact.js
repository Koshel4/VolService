serviceData.forEach((service, index) => {
    $("#topic").append($("<option></option>").val(`service${index + 1}`).html(service.name));
});
$("#topic").append($("<option></option>").val(`other`).html("Другое"));

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
});