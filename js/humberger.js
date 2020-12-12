'use strict';

{
  const open = document.getElementById(`head_open`);
  const overlay = document.querySelector('.overlay2');
  const close = document.getElementById('head_close');


  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}
