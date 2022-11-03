// 헤더 스크롤시 gnb 메뉴 등장 이벤트
let bgColor = document.querySelector("#header .bot_box");
let hamBtn = document.querySelector("#header .bot_box .ham_menu")
let hamCloseBtn = document.querySelector("#header .ham_gnb .close_btn")
let hamGnb = document.querySelector("#header .ham_gnb")

let hamGnbMenu = document.querySelectorAll("#header .ham_gnb li a");



window.addEventListener("scroll",function(){
    let MainScTop = window.scrollY;
    if (MainScTop == 0){
        bgColor.style.background = "transparent";
        hamBtn.querySelectorAll("span").forEach(function(el,index){
            el.style.background = "#fff";
        });
    }
    else {
        bgColor.style.background = "#fff";
        hamBtn.querySelectorAll("span").forEach(function(el,index){
            el.style.background = "#132326";
        });
    }
});

hamBtn.addEventListener("click",function(){hamGnb.style.width = "40%";});

hamCloseBtn.addEventListener("click", () => hamGnb.style.width = 0);

hamGnb.addEventListener("mouseenter",() => {
    hamGnbMenu.forEach((el,index) => {
        el.style.color = "#aaa";
        el.addEventListener("mouseenter",() => {
            el.style.color = "#000";
        });
    
        el.addEventListener("mouseleave",() => {
            el.style.color = "#aaa";
        });
    });
})
hamGnb.addEventListener("mouseleave",() => {
    hamGnbMenu.forEach((el,index) => {
        el.style.color = "#000";
    });
})