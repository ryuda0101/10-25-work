let bgColor = document.querySelector("#header .bot_box");

window.addEventListener("scroll",function(){
    let MainScTop = window.scrollY;
    if (MainScTop == 0){
        bgColor.style.background = "none";
    }
    else {
        bgColor.style.background = "#fff";
    }
});
