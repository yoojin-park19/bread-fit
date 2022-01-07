const btnReply = document.getElementById('btnReply1');
const contComment = document.getElementById('contComment');

btnReply.addEventListener('click', () => {
    contComment.classList.toggle('on')
})


// 하트추가
let i = 0;
const likeCount = document.getElementById("likeCount")
let likeCountNum = 58;
const btnLike = document.getElementById("btnLike1");
btnLike.addEventListener('click',()=>{
    if(i === 0){
    btnLike.setAttribute("style", "background-image: url(../assets/icon-like-fill.svg)")
    likeCountNum += 1;
    console.log(typeof(likeCountNum));
    likeCount.innerText = likeCountNum;    
    return i += 1;
    } else if(i === 1){
    likeCountNum -= 1;
    btnLike.setAttribute("style", "background-image: url(../assets/icon-like.png)")
    likeCount.innerText = likeCountNum;
    return i = 0;
    }
})

