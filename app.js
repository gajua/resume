const modalOnBtn = document.querySelector('.modal-btn')

function onclickBtn(){
    modalOnBtn.classList.toggle('active')
}
modalOnBtn.addEventListener("click",onclickBtn)