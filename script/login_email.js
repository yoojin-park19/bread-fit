// 아이디, 비밀번호 유효성 검사 js
const loginBtn = document.querySelector("#loginBtn");
const inputEmail = document.querySelector("#inpEmail");
const inputPW = document.querySelector("#inpPw");
const msgError = document.querySelector("#msgError");

// 유저 정보 예시
const userData = [
    {
        userEmail : "asd@naver.com",
        userPW : "1234567",
        userID : "asd123",
        userName : "오래규",
        userIntro : "안녕하세요 저는 000입니다.",
        followCount : 0,
    },
    {
        userEmail : "qwe@naver.com",
        userPW : "1234567",
        userID : "qwe456",
        userName : "홍길동",
        userIntro : "안녕하세요 저는 000입니다.",
        followCount : 10,
    }
];

// 이메일, 비밀번호가 모두 입력되면 버튼 활성화 함수
function inputCheck() {
    if (inputEmail.value && inputPW.value) {
        loginBtn.classList.remove("disabled");
    } else {
        loginBtn.classList.add("disabled");
    }
};

inputEmail.addEventListener("keyup", inputCheck);
inputPW.addEventListener("keyup", inputCheck);


// 이메일 형식 검사 함수
function emailCheck(email) {
	const reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	return reg.test(email);
};

// 유효성 검사 함수
function validationCheck(email, pw) {
    const userCheck = userData.find(val => val.userEmail === email);

    if (userCheck) {
        return userCheck.userPW === pw;
    } else {
        return false;
    }
}

loginBtn.addEventListener("click", function() {
    const inputUserEmail = inputEmail.value;
    const inputUserPW = inputPW.value;
    const isEmail = emailCheck(inputUserEmail);
    const isValid = validationCheck(inputUserEmail, inputUserPW);

    if (isEmail) {
        // 이메일 형식 검사 성공
        console.log("이메일 형식 검사 성공");
        if (isValid) {
            // 유효성 검사 성공
            console.log("유효성 검사 성공");
            if (userData.find(ele => ele.userEmail === inputUserEmail).followCount > 0) {
                // 팔로우가 있을 때
                console.log("팔로우가 있을 때");
                location.href ="./home_post.html";
            } else {
                // 팔로우가 없을 때
                console.log("팔로우가 없을 때");
                location.href ="./home.html";
            }
        } else {
            // 유효성 검사 실패
            msgError.classList.add("error");
        }
    } else {
        // 이메일 형식 검사 실패
        msgError.classList.add("error");
    }
});