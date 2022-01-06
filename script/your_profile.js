const btnSetting = document.getElementById("btnSetting");
const modalSetting = document.getElementById("modalSetting");
const alertPost = document.getElementById("alertPost");
const btnLogout = document.getElementById("btnLogout");
const btnCancle = document.getElementById("btnCancle");

const modalComment = document.getElementById("modalComment");

const btn_unfollow = document.querySelector('.unfollow-btn');
const btn_follow = document.querySelector('.follow-btn');
const btn_count = document.querySelector('.follow-count');
const btn_follower_show = document.querySelector('.follower-show');
const btn_following_show = document.querySelector('.following-show');
let count = 0;

const post_list = document.querySelector('.post-list');
const post_album = document.querySelector('.post-ablum');
const post_album_cont = document.querySelector('.post-album-cont');
const show_list = document.querySelector('#show-list');
const list_icon = document.querySelector('.show-list');
const show_album = document.querySelector('#show-album');
const alum_icon = document.querySelector('.show-album');

btnSetting.addEventListener("click", () => {
  btnSetting.classList.toggle("on");
});

modalSetting.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    btnSetting.classList.remove("on");
  }
});

btnLogout.addEventListener("click", () => {
  alertPost.classList.add("on");
});

btnCancle.addEventListener("click", () => {
  alertPost.classList.remove("on");
});



btn_follow.addEventListener('click', function(){
    btn_follow.style.display = 'none';
    btn_unfollow.style.display = 'block';
    count += 1;
    btn_count.innerText = count; 
})
btn_unfollow.addEventListener('click', function(){
    btn_follow.style.display = 'block';
    btn_unfollow.style.display = 'none';
    count -= 1;
    btn_count.innerText = count; 
})
btn_follower_show.addEventListener('click', function(){
    location.href="yourprofile_2.html";
})
btn_following_show.addEventListener('click', function(){
    location.href="yourprofile_2.html";
})


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

