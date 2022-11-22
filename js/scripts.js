"use strict";

const btns=document.querySelectorAll(".key");
console.log(btns);
window.addEventListener("keydown",function(e){
    // console.log(e.key);
    const audio=document.querySelector(`audio[data-key="${e.key}"]`);
    console.log(audio);
    const currentBtn= document.querySelector(`button[data-key="${e.key}"]`);
    currentBtn.classList.add("active");
    audio.currentTime=0;
    audio.play();

    btns.forEach(element => {
        element.addEventListener("transitionend",function(){
            element.classList.remove("active");
        })
        
    });

})