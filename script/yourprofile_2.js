// 버튼 온오프 기능
const follow = document.querySelectorAll(".follow");
const follow_cancle = document.querySelectorAll(".cancle");
follow_cancle.forEach((event,index)=>{
    event.addEventListener('click',function(){
        event.classList.remove('click');
        follow[index].classList.remove('click');
    });
})
follow.forEach((event,index)=>{
    event.addEventListener('click',function(){
        event.classList.add('click');
        follow_cancle[index].classList.add('click');
    })
});
