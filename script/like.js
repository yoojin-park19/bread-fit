const btnLike = document.getElementById("btnLike");
const likeCount = document.getElementById("likeCount");

let count = 0;

function like() {
  count === 1 ? (count = 0) : (count = 1);
  likeCount.innerText = count;
  btnLike.classList.toggle("liked");
}

btnLike.addEventListener("click", like);
