// gnb 메뉴 관련 클릭 이벤트
let roomStart = document.querySelector("#main_page .rooms").offsetTop;
let facilitiesStart = document.querySelector("#main_page .facilities").offsetTop;
let newsStart = document.querySelector("#main_page .news").offsetTop;

const rooms_gnb = document.querySelector("#header .bot_box .gnb .rooms_gnb")
const restaurant_gnb = document.querySelector("#header .bot_box .gnb .restaurant_gnb")
const news_gnb = document.querySelector("#header .bot_box .gnb .news_gnb")

const rooms_hamGnb = document.querySelector("#header .ham_gnb .rooms_gnb")
const restaurant_hamGnb = document.querySelector("#header .ham_gnb .restaurant_gnb")
const news_hamGnb = document.querySelector("#header .ham_gnb .news_gnb")


// 함수 호출및 클릭시 이벤트 걸어주기
rooms_hamGnb.addEventListener("click",function(event){
    roomWork();
});

restaurant_gnb.addEventListener("click",function(event){
    facilitiesWork();
});
restaurant_hamGnb.addEventListener("click",function(event){
    facilitiesWork();
});

news_gnb.addEventListener("click",function(event){
    newsWork();
});
news_hamGnb.addEventListener("click",function(event){
    newsWork();
});

// 함수 세팅
function roomWork (){
    event.preventDefault();
    window.scrollTo({
        top:roomStart,
        behavior:"smooth"
    });
}

function facilitiesWork (){
    event.preventDefault();
    window.scrollTo({
        top:facilitiesStart,
        behavior:"smooth"
    });
}

function newsWork(){
    event.preventDefault();
    window.scrollTo({
        top:newsStart,
        behavior:"smooth"
    });
}