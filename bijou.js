document.addEventListener("DOMContentLoaded",function(){
    const menuIcon = document.querySelector(".menu-icon");
    const mobileMenu = document.querySelector(".mobile-menu");

    menuIcon.addEventListener("click",function(){
        mobileMenu.classList.toggle("active");
        menuIcon.querySelector("i").classList.toggle("fa-bars");
        menuIcon.querySelector("i").classList.toggle("fa-times");
    })
})

const words = ["Plus 5% de réduction sur les accessoires","Un cadeau à chaque abonnement"];
let i = 0;
let timer;
function typingEffect() {
    let word=words[i].split("");
    const loopTyping = function(){
        if(word.length>0){
            document.getElementById('word').innerHTML += word.shift();
        }else{
            deleteEffect();
            return false;
        }
        timer = setTimeout(loopTyping,120);
    };
    loopTyping();
}
function deleteEffect(){
    let word = words[i].split("");
    const loopDeleting = function() {
        if(word.length>0){
            word.pop();
            document.getElementById('word').innerHTML = word.join("");
        }else{
            i = (i+1) % words.length;
            typingEffect();
            return false;
        }
        timer= setTimeout(loopDeleting,20);
    };
    loopDeleting();
}
typingEffect();