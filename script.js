const navbar=document.querySelector(".navbar")
window.onscroll = function() {

    if(window.innerWidth > 600){


    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        navbar.style.backgroundColor="black"
    }else{
        navbar.style.backgroundColor='transparent'
    }
}
}
