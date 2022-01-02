// 아이디, 비밀번호 유효성 검사 js
const loginBtn = document.querySelector("#loginBtn");
const inputID = document.querySelector("#inpId");
const inputPW = document.querySelector("#inpPw");
const msgError = document.querySelector("#msgError");

// 유저 정보 예시
const userData = [
    {
        userID : "asd@naver.com",
        userPW : "1234"
    },
    {
        userID : "qwe@gmail.com",
        userPW : "1234"
    }
];

// 아이디, 비밀번호가 모두 입력되면 버튼 활성화 함수
function inputCheck() {
    if (inputID.value && inputPW.value) {
        loginBtn.classList.remove("disabled");
    } else {
        loginBtn.classList.add("disabled");
    }
};

inputID.addEventListener("keyup", inputCheck);
inputPW.addEventListener("keyup", inputCheck);


// 이메일 형식 검사 함수
function emailCheck(email) {
	const reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	return reg.test(email);
};

// 유효성 검사 함수
function validationCheck(id, pw) {
    const userCheck = userData.find(val => val.userID === id);

    if (userCheck) {
        return userCheck.userPW === pw;
    } else {
        return false;
    }
}

loginBtn.addEventListener("click", function() {
    const inputUserID = inputID.value;
    const inputUserPW = inputPW.value;
    const isEmail = emailCheck(inputUserID);
    const isValid = validationCheck(inputUserID, inputUserPW);

    if (isEmail) {
        // 이메일 형식 검사 성공
        if (isValid) {
            // 유효성 검사 성공
            location.href ="./home.html";
        } else {
            // 유효성 검사 실패
            msgError.classList.add("error");
        }
    } else {
        // 이메일 형식 검사 실패
        msgError.classList.add("error");
    }
});