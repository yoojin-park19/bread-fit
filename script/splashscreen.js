let isLogin = false;    // 로그인 확인 변수 (node로 수정해야함)

if (isLogin === true) {
    setTimeout(function(){
        location.href ="./home.html";
    }, 3000);
} else {
    setTimeout(function(){
        location.href ="./login.html";
    }, 3000);
}