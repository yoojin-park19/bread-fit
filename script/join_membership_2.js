const setProfileBtn = document.querySelector("#setProfileBtn");
const previewImg = document.querySelector("#previewImg");
const userName = document.querySelector("#userName");
const userID = document.querySelector("#userID");
const signUpComplete = document.querySelector("#signUpComplete");

let canSignUpID = false;

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

// 프로필 이미지 설정 함수
function setImage(input) {
    if (input.files && input.files[0]) {
        const ext = input.files[0].name.split(".").pop().toLowerCase();
        if (["png", "jpg", "jpeg"].find(ele => ele === ext)) {
            const reader = new FileReader()
            reader.onload = ele => {
                previewImg.src = ele.target.result;
            }
            reader.readAsDataURL(input.files[0]);
        } else {
            window.alert("png, jpg, jpeg 형식만 업로드 가능합니다.")
        }
    }
}

// 이름, 아이디가 모두 입력되면 버튼 활성화 함수
// 입력되면이 아니라 회원가입 가능할 때 활성화 되게 해야할거 같은데 요구사항에 없음.
function inputCheck() {
    if (userName.value && userID.value) {
        signUpComplete.classList.remove("disabled");
    } else {
        signUpComplete.classList.add("disabled");
    }
};

// 아이디 형식 검사 함수
function idCheck(id) {
    const reg = /^[0-9a-zA-Z_.]*$/i;
    return reg.test(id);
}

// 존재하는 아이디 검사 함수
function idExistCheck(id) {
    return userData.find(val => val.userID === id);
}

// 이미지 업로드 취소도 구현해야 할거같은데 요구사항에 없음
setProfileBtn.addEventListener("change", ele => {
    setImage(ele.target);
});

userName.addEventListener("keyup", inputCheck);
userID.addEventListener("keyup", inputCheck);

userID.addEventListener("blur", function() {
    const inputUserID = userID.value;
    const isID = idCheck(inputUserID);
    const existID = idExistCheck(inputUserID);

    if (isID) {
        if (existID) {
            // 존재하는 아이디 처리
            msgErrorID.classList.add("error");
        } else {
            //존재하지 않은 아이디 처리
            canSignUpID = true;
            msgErrorID.classList.remove("error");
        }
    } else {
        // 잘못된 아이디 형식 처리
        // html/css도 바꿔야함 (하단 문구 별개 처리)
        msgErrorID.classList.add("error");
    }
});

signUpComplete.addEventListener("click", function() {
    if (canSignUpID) {
        location.href = "./home.html";
    } else {
        window.alert("재작성 바람");
    }
});