'use strict';

{
  const open3 = document.getElementById('open3')
  const open4 = document.getElementById('open4')
  const open5 = document.getElementById('open5')
  // const open = document.querySelectorAll();
  const close = document.getElementById('close3')
  const modal = document.getElementById('modal')
  const mask = document.getElementById('mask')

  open3.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  open4.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  open5.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  //hiddenをつける→隠す
  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });
  
  //画面外の処理
  mask.addEventListener('click', () => {
    close.click(); 
    //関数を呼び起こすことでも閉じれる
  });

}