const modalOnBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal");
const closeBtn = modal.querySelector(".close-icon");
function onclickBtn() {
  modal.classList.add("active");
}

modalOnBtn.addEventListener("click", onclickBtn);
function closeModal(){
    modal.classList.remove("active")
}
closeBtn.addEventListener('click',closeModal)