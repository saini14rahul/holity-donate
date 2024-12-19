let menu = document.querySelector(".menu");
let ul = document.querySelector(".collapse nav ul");
menu.addEventListener("click",function(){
    ul.classList.toggle("showNav");
    menu.classList.toggle("rotateBar")
    
    console.log(ul);
});


document.querySelector(".btn").addEventListener("click",function(){
    document.body.classList.add("popup-active");
});
document.querySelector(".close-popup").addEventListener("click",function(){
    document.body.classList.remove("popup-active");
});


let scrollBt = document.querySelector(".scroll-to-top");
window.addEventListener("scroll",function(){
    if(window.pageYOffset > 300){
        scrollBt.style.display = "block";
    }
    else{
        scrollBt.style.display = "none";
    }
});
scrollBt.addEventListener("click",function(){
    window.scrollTo({
        top: 0, behavior: "smooth"
    })
})
