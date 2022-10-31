let idValue = document.querySelector("#login_page .center .loginForm .userid");
let passValue = document.querySelector("#login_page .center .loginForm .userpass");

let idCheckShow = document.querySelector("#login_page .center .loginForm .idCheck");
let passCheckShow = document.querySelector("#login_page .center .loginForm .passCheck");

idValue.addEventListener("keyup",() => {
    idValue = idValue.value;
    passValue = passValue.value;

    idcheckTest = /^ \w{6,12} $/;
    passcheckTest = /^ (?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25} $/;

    idValue = idcheckTest.test(idValue);
    passValue = passcheckTest.test(passcheckTest);

    if (idValue) {
        idCheckShow.innerHTML = "비밀번호를 형식에 맞게 입력하셨습니다."
    }
    else {
        idCheckShow.innerHTML = "비밀번호는 8자리 이상 25자리 이하의 영문 대소문자, 숫자, 특수문자 !@#$%^*+=-_ 를 조합해서 사용해야 합니다."
    }

    if (passValue) {
        passCheckShow.innerHTML = "비밀번호를 형식에 맞게 입력하셨습니다."
    }
    else {
        passCheckShow.innerHTML = "비밀번호는 8자리 이상 25자리 이하의 영문 대소문자, 숫자, 특수문자 !@#$%^*+=-_ 를 조합해서 사용해야 합니다."
    }
});