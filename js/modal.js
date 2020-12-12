'use strict';

{
  const open = document.getElementById('open')
  const close = document.getElementById('close')
  const modal = document.getElementById('modal')
  const mask = document.getElementById('mask')

  open.addEventListener('click', () => {
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