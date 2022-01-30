const uploadBtn = document.getElementById('uploadBtn')
const uploadTxt = document.getElementById('uploadTxt')
const uploadImg = document.getElementById('uploarImg')

uploadTxt.addEventListener('keydown', activeBtn())

function activeBtn() {
    if(uploadTxt.value) {
        uploadBtn.classList.remove('disabled');
    } else {
        uploadBtn.classList.add('disabled');
    }
}

uploadBtn.addEventListener('click', () => {
    uploadTxt.value ='';
})

