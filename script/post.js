/* 모달 */
const btnPost = document.getElementById("btnPost");
const modalPost = document.getElementById("modalPost");
const alertPost = document.getElementById("alertPost");
const btnCancle = document.getElementById("btnCancle");
const btnComment = document.getElementById("btnComment");
const btnDelete = document.getElementById("btnDelete");
const modalComment = document.getElementById("modalComment");

btnPost.addEventListener("click", () => {
  btnPost.classList.toggle("on");
});

btnComment.addEventListener("click", () => {
  btnComment.classList.toggle("on");
});

modalPost.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    btnPost.classList.remove("on");
  }
});

modalComment.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    btnComment.classList.remove("on");
  }
});

btnDelete.addEventListener("click", () => {
  alertPost.classList.add("on");
});

btnCancle.addEventListener("click", () => {
  alertPost.classList.remove("on");
});

/* 좋아요 */

const btnLike = document.getElementById("btnLike");
const likeCount = document.getElementById("likeCount");

let count = 0;

function like() {
  count === 1 ? (count = 0) : (count = 1);
  likeCount.innerText = count;
  btnLike.classList.toggle("liked");
}

btnLike.addEventListener("click", like);
