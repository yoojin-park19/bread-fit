const btnSetting = document.getElementById("btnSetting");
const modalSetting = document.getElementById("modalSetting");
const alertPost = document.getElementById("alertPost");
const btnLogout = document.getElementById("btnLogout");
const btnCancle = document.getElementById("btnCancle");

const modalComment = document.getElementById("modalComment");

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
