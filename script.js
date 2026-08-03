
document.addEventListener("DOMContentLoaded",function(){

const text="Software Engineer | Full Stack Developer | AI/ML Enthusiast";

const role=document.querySelector(".hero h2");

let i=0;

role.innerHTML="";

function typing(){

if(i<text.length){

role.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,50);

}

}

typing();

});

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


