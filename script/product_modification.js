//  사진 썸네일
const reader = new FileReader();
reader.onload = (readerEvent) => {
    document.querySelector('#product-cha-img').setAttribute('src', readerEvent.target.result);
};
document.querySelector('#product-cha-btn').addEventListener('change', (changeEvent) => {
    const imgFile = changeEvent.target.files[0];
    reader.readAsDataURL(imgFile);
} )

// 15자까지 제한
let productName = document.querySelector('.inp-product-name')

function countNum() {
    let productNameVal = productName.value
    if(productNameVal.length > 15) {
        productNameVal = productNameVal.substring(0,14);
        document.querySelector('.inp-product-name').value = productNameVal;
    }
}

// 유효성 검사
const btnSave = document.querySelector('#btn-save')
let productPrice = document.querySelector('.inp-product-price');
let productLink = document.querySelector('.inp-product-link');

productLink.addEventListener('keydown', activeSave);
productPrice.addEventListener('keydown', activeSave);
productLink.addEventListener('keydown', activeSave);
function activeSave() {  
    if(productName.value) {
        if (productPrice.value && productLink.value) {
            btnSave.classList.remove('disabled');
        } else {
            btnSave.classList.add('disabled');
        }
    } else {
        btnSave.classList.add('disabled');
    }
}

btnSave.addEventListener('click', () => {
    productPrice.value = ""; 
    productLink.value ="";
    productName.value ="";
    document.querySelector('#product-cha-btn').value = "";
    document.querySelector('#product-cha-img').setAttribute('src', '../assets/logo.png');
})
