const lightboxBg = document.createElement('div');
lightboxBg.id = "lightboxBg";
document.body.appendChild(lightboxBg);

const images = document.querySelectorAll(".zoomies")
images.forEach(image =>{
    image.addEventListener('click', e => {
        lightboxBg.classList.add('active');
        const lightImage = document.createElement('img');
        lightImage.src = image.src;
        lightImage.id ="lightImage";
        while (lightboxBg.firstChild){
            lightboxBg.removeChild(lightboxBg.firstChild)
        }
        lightboxBg.appendChild(lightImage);

    })
})

const meHob = document.querySelectorAll(".hobbies")
meHob.forEach(image =>{
    image.addEventListener('click', e => {
        lightboxBg.classList.add('active');
        const lightImage = document.createElement('img');
        lightImage.src = image.src;
        lightImage.id ="lightImage";
        while (lightboxBg.firstChild){
            lightboxBg.removeChild(lightboxBg.firstChild)
        }
        lightboxBg.appendChild(lightImage);

    })
})

lightboxBg.addEventListener('click', e=> {
    lightboxBg.classList.remove('active');

})