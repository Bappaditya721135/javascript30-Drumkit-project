"use strict";
const audioArray=document.querySelectorAll(".audio");
const btnArray=document.querySelectorAll(".btn");


document.onkeydown=function(e){
     
   if(e.key=="a"){
    console.log("a key pressed");
    audioArray[0].play();
    btnArray[0].classList.add("active");
   }
   else if(e.key=="s"){
    console.log("s key pressed");
    audioArray[1].play();
    btnArray[1].classList.add("active");
   }
   else if(e.key=="d"){
    console.log("d key pressed");
    audioArray[2].play();
    btnArray[2].classList.add("active");
   }
   else if(e.key=="f"){
    console.log("f key pressed");
    audioArray[3].play();
    btnArray[3].classList.add("active");
   }
   else if(e.key=="g"){
    console.log("g key pressed");
    audioArray[4].play();
    btnArray[4].classList.add("active");
   }
   else if(e.key=="h"){
    console.log("h key pressed");
    audioArray[5].play();
    btnArray[5].classList.add("active");
   }
   else if(e.key=="j"){
    console.log("j key pressed");
    audioArray[6].play();
    btnArray[6].classList.add("active");
   }
   else if(e.key=="k"){
    console.log("k key pressed");
    audioArray[7].play();
    btnArray[7].classList.add("active");
   }
   else if(e.key=="l"){
    console.log("l key pressed");
    audioArray[8].play();
    btnArray[8].classList.add("active");
   }

}
document.onkeyup=function(e){
    btnArray.forEach(element => {
        element.classList.remove("active");
        
    });
}