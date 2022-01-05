const signUpEmail = document.querySelector("#signUpEmail");
const signUpPW = document.querySelector("#signUpPW");
const signUpNextBtn = document.querySelector("#signUpNextBtn");
const msgErrorEmail = document.querySelector("#msgErrorEmail");
const msgErrorPW = document.querySelector("#msgErrorPW");

let canSignUpEmail = false;
let canSignUpPW = false;

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

// 이메일 형식 검사 함수
function emailCheck(email) {
	const reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	return reg.test(email);
};

// 존재하는 이메일 검사 함수
function emailExistCheck(email) {
    return userData.find(val => val.userEmail === email);
}

// 비밀번호 형식 검사 함수
function passwordCheck(pw) {
    return pw.length > 6;
}

// 이메일, 비밀번호가 모두 입력되면 버튼 활성화 함수
// 입력되면이 아니라 회원가입 가능할 때 활성화 되게 해야할거 같은데 요구사항에 없음.
function inputCheck() {
    if (signUpEmail.value && signUpPW.value) {
        signUpNextBtn.classList.remove("disabled");
    } else {
        signUpNextBtn.classList.add("disabled");
    }
};

signUpEmail.addEventListener("keyup", inputCheck);
signUpPW.addEventListener("keyup", inputCheck);

signUpEmail.addEventListener("blur", function() {
    const inputUserEmail = signUpEmail.value;
    const isEmail = emailCheck(inputUserEmail);
    const existEmail = emailExistCheck(inputUserEmail);

    if (isEmail) {
        if (existEmail) {
            // 존재하는 이메일 처리
            canSignUpEmail = false;
            msgErrorEmail.classList.add("error");
        } else {
            //존재하지 않은 이메일 처리
            canSignUpEmail = true;
            msgErrorEmail.classList.remove("error");
        }
    } else {
        // 잘못된 이메일 형식 처리
        // html/css도 바꿔야함 (하단 문구 별개 처리)
        canSignUpEmail = false;
        msgErrorEmail.classList.add("error");
    }
});

signUpPW.addEventListener("blur", function() {
    const inputUserPW = signUpPW.value;
    const rightPW = passwordCheck(inputUserPW);

    if (rightPW) {
        // 옳바른 패스워드 형식 처리
        canSignUpPW = true;
        msgErrorPW.classList.remove("error");
    } else {
        // 잘못된 패스워드 형식 처리
        canSignUpPW = false;
        msgErrorPW.classList.add("error");
    }
});

signUpNextBtn.addEventListener("click", function() {
    if (canSignUpEmail && canSignUpPW) {
        location.href = "./join_membership_2.html";
    } else {
        window.alert("재작성 바람");
    }
});