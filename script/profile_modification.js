//  사진 썸네일
const userId = document.querySelector('#userId');
const userName = document.querySelector('#userName');
const btnSave = document.querySelector('#btn-save');


const reader = new FileReader();
reader.onload = (readerEvent) => {
    document.querySelector('#profile-cha-img').setAttribute('src', readerEvent.target.result);
};
document.querySelector('#profile-cha-btn').addEventListener('change', (changeEvent) => {
    const imgFile = changeEvent.target.files[0];
    reader.readAsDataURL(imgFile);
    
});

// // 1~ 10자까지 제한
let profileName = document.querySelector('.inp-profile-name')

function countNum() {
    let profileNameVal = profileName.value;
    if(profileNameVal.length > 10 ) {
        profileNameVal = profileNameVal.substring(0,10);
        document.querySelector('.inp-profile-name').value = profileNameVal;
    }
}
//ID 글자 수 제한
function countId() {
    let profileIdVal = userId.value;
    if(profileIdVal.length > 10 ) {
        profileIdVal = profileIdVal.substring(0,10);
        document.querySelector('.inp-profile-price').value = profileIdVal;
    }
}

// // 계정 ID 유효성 검사
function isId(asValue) {
	var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{5,14}$/;
	return regExp.test(asValue);
}

let profileAbout = document.querySelector('.inp-profile-about');


// 소개 20자 제한
function countTit() {
    let profileAboutVal = profileAbout.value;
    if(profileAboutVal.length > 18 ) {
        profileAboutVal = profileAboutVal.substring(0,18);
        document.querySelector('.inp-profile-about').value = profileAboutVal;
    }
}

btnSave.addEventListener("click", function() {
    const inputUserID = userId.value;
    const isID = isId(inputUserID);
    const alert = document.getElementById('profile-id-alert');
    if (isID) {
        // 아이디 형식 검사 성공
            location.href ="./home.html";
    } else {
        // 아이디 형식 검사 실패
        alert.classList.add('on');
        btnSave.classList.add('disabled');
    }
});

userId.addEventListener('focus',()=>{
    const alert = document.getElementById('profile-id-alert');
    alert.classList.remove('on');
})

const userAbout = document.getElementById("userAbout");
let profilePrice = document.querySelector('.inp-profile-price');

userAbout.addEventListener('keydown', activeSave);
profilePrice.addEventListener('keydown', activeSave);

function activeSave() {  
    if(userName.value) {
        if (userId.value && userAbout.value) {
            btnSave.classList.remove('disabled');
        } else {
            btnSave.classList.add('disabled');
        }
    } else {
        btnSave.classList.add('disabled');
    }
}


// 저장 버튼 눌렀을 때 캐시 초기화 코드
btnSave.addEventListener('click', () => {
    profilePrice.value = ""; 
    profileLink.value ="";
    profileName.value ="";
    document.querySelector('#profile-cha-btn').value = "";
    document.querySelector('#profile-cha-img').setAttribute('src', '../assets/logo.png');
})
