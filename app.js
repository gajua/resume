const modalOnBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const closeBtn = modal.querySelector('.close-icon');
const body = document.querySelector('body');
const button = document.querySelectorAll('button');
const a = document.querySelectorAll('a');

function onclickBtn() {
  modal.classList.add('active');
  body.classList.add('active');
  console.log(body.classList);
  button.forEach((e) => {
    e.disabled = true;
  });
  a.forEach((e) => {
    e.style.pointerEvents = 'none';
  });
}
function closeModal() {
  modal.classList.remove('active');
  body.classList.remove('active');
  console.log(body.classList);
  button.forEach((e) => {
    e.disabled = false;
  });
  a.forEach((e) => {
    e.style.pointerEvents = 'auto';
  });
}

modalOnBtn.addEventListener('click', onclickBtn);
closeBtn.addEventListener('click', closeModal);
