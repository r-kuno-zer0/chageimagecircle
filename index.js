function chageimagecircle(options){
    let images = document.querySelectorAll('.chageimagecircle');

    images.forEach(image => {
        image.style.borderRadius  = "50%";
        image.style.width = `${options}px`;
    });
    
}
chageimagecircle(200);