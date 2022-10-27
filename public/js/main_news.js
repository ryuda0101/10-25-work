// 변수세팅
const customer = document.querySelector("#main_page .news .boxs");

const left_btn = document.querySelector("#main_page .news btns .left");
const right_btn = document.querySelector("#main_page .news btns .right");

let sNumber = 0;

left_btn.addEventListener("click",function(){
    customer.style.left = sNumber * 33.333333 + "%";
    if (sNumber)
});
