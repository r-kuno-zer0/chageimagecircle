function chageimagecircle(options){
    let images = document.querySelectorAll('.chageimagecircle');

    images.forEach(image => {
        image.style.width = options+"px";
        image.style.borderradius = "20px";
    });
    
}