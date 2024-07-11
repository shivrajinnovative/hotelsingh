window.onscroll = function() {
    const navbar=document.querySelector(".navbar")
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        navbar.style.backgroundColor="black"
    }else{
        navbar.style.backgroundColor='transparent'

    }
}