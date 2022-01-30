// const btnSetting = document.getElementById("btnSetting");
// const modalSetting = document.getElementById("modalSetting");
// const alertPost = document.getElementById("alertPost");
// const btnLogout = document.getElementById("btnLogout");
// const btnCancle = document.getElementById("btnCancle");

// const modalComment = document.getElementById("modalComment");






// // btnSetting.addEventListener("click", () => {
// //   btnSetting.classList.toggle("on");
// // });

// // modalSetting.addEventListener("click", (event) => {
// //   if (event.target.nodeName === "BUTTON") {
// //     btnSetting.classList.remove("on");
// //   }
// // });

// // btnLogout.addEventListener("click", () => {
// //   alertPost.classList.add("on");
// // });

// // btnCancle.addEventListener("click", () => {
// //   alertPost.classList.remove("on");
// // });

// const btnReply = document.getElementById('btnReply');
// const contComment = document.getElementById('contComment');

// btnReply.addEventListener('click', () => {
//     contComment.classList.toggle('on')
// })



// btn_follow.addEventListener('click', function(){
//     btn_follow.style.display = 'none';
//     btn_unfollow.style.display = 'block';
//     count += 1;
//     btn_count.innerText = count; 
// })
// btn_unfollow.addEventListener('click', function(){
//     btn_follow.style.display = 'block';
//     btn_unfollow.style.display = 'none';
//     count -= 1;
//     btn_count.innerText = count; 
// })



const show_list = document.querySelector('#show-list');
const list_icon = document.querySelector('.show-list');
const show_album = document.querySelector('#show-album');
const alum_icon = document.querySelector('.show-album');


const post_list = document.querySelector('.post-list');
const post_album = document.querySelector('.post-ablum');
const post_album_cont = document.querySelector('.post-album-cont');

// 목록형 앨범형 전환 기능

show_list.addEventListener('click', function(){
    // show_album중 img 태그의 속성을 변환 
    list_icon.setAttribute('src','../assets/icon-post-list-on.svg')
    alum_icon.setAttribute('src','../assets/icon-post-album-off.svg')
    post_list.style.display = "block";
    post_album_cont.style.display = "none";
})
show_album.addEventListener('click', function(){
    // show_album중 img 태그의 속성을 변환 .
    list_icon.setAttribute('src','../assets/icon-post-list-off.svg')
    alum_icon.setAttribute('src','../assets/icon-post-album-on.svg')
    post_list.style.display = "none"
    post_album_cont.style.display = "block"
})


// 팔로워 숫자 , 팔로윙 숫자 눌렀을 때  페이지 이동 

const btn_count = document.querySelector('.follow-count');
const btn_follower_show = document.querySelector('.follower-show');
const btn_following_show = document.querySelector('.following-show');

btn_follower_show.addEventListener('click', function(){
    location.href="yourprofile_2.html";
})
btn_following_show.addEventListener('click', function(){
    location.href="yourprofile_2.html";
})

// 페이지 이동

const href_upload = document.getElementById('href-upload');
const href_profile = document.getElementById('href-profile');

href_upload.addEventListener('click', function(){
    location.href="upload.html";
})
href_profile.addEventListener('click', function(){
    location.href="Profile_modification.html";
})


const btnReply = document.getElementById('btnReply');
const contComment = document.getElementById('contComment');

btnReply.addEventListener('click', () => {
    contComment.classList.toggle('on')
})

// 하트추가
let i = 0;
const likeCount = document.getElementById("likeCount")
let likeCountNum = 58;
const btnLike = document.getElementById("btnLike1");
const likeimg = document.querySelector('.post-heart');
btnLike.addEventListener('click',()=>{
    if(i === 0){
    likeimg.setAttribute("src", "../assets/icon-like-fill.svg")
    likeCountNum += 1;
    console.log(typeof(likeCountNum));
    likeCount.innerText = likeCountNum;    
    return i += 1;
    } else if(i === 1){
    likeCountNum -= 1;
    likeimg.setAttribute("src", "../assets/icon-like.png")
    likeCount.innerText = likeCountNum;
    return i = 0;
    }
})
