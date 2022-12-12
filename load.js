var hamburger = document.querySelector(".ham");
var navlist = document.querySelector(".nav-list");
var links=document.querySelector(" .nav-list li")
if(hamburger){
    hamburger.addEventListener("click",function(){
        this.classList.toggle("click");
        navlist.classList.toggle("open");
       
        
    })
}
