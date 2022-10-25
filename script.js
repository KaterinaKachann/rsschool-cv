const iconMenu = document.querySelector('.menu__burger');
if(iconMenu){
    const menuBody= document.querySelector('.menu__wrapper')
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}