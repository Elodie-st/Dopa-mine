"use strict";
//code helloword + codekite + code pen, bonne chance
const btnPop = document.querySelectorAll(".popup__btn");
const fermerBtn = document.querySelectorAll(".btnFermer");

btnPop.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        //batton de ralis a son frére
        const contenu = this.nextElementSibling;
        contenu.classList.add("active");
    });
});

//y a plus de relai le stade est fermer
fermerBtn.forEach(fermer => {
    fermer.addEventListener("click", function () {
        this.parentElement.classList.remove("active");
    });
});

//ca avait tout pour fonctioner :'(
//ca fonctionne!! c'est le css le probleme, nice !


const backToTop = document.querySelector(".backToTop");

if(backToTop){
    window.addEventListener("scroll", showBackToTop);
}

function showBackToTop(){
    const currentScroll = window.scrollY;
    console.log(currentScroll)
    if(currentScroll > 300){
        backToTop.classList.add("backToTop--show");
    }else{
        backToTop.classList.remove("backToTop--show");
    }
}

//carousel codeckite

const tabLinks = document.querySelectorAll(".tab__el a");
if(tabLinks){
    for(let tablink of tabLinks){
        tablink.addEventListener("click", tabTrigger);
    }
}

function tabTrigger(event){
    event.preventDefault();

    const parentTab = event.currentTarget.closest(".tab");

    const activeLink = parentTab.querySelector(".tab__el--active");
    activeLink.classList.remove("tab__el--active");
    event.currentTarget.parentNode.classList.add("tab__el--active");

    const activeTab = parentTab.querySelector(".explication__donne--active");
    activeTab.classList.remove("explication__donne--active");

    const tabSelectId = event.currentTarget.getAttribute("href");
    const tabSelect = parentTab.querySelector(tabSelectId);
    tabSelect.classList.add("explication__donne--active");
}