const $modalCallback = document.querySelector('.modal-callback');
const $contactsBtn = document.querySelector('.contacts__btn');
const $modalCallbackClose = document.querySelector('.modal-callback__close');
const $siteContainer = document.querySelector('.site-container');


 $contactsBtn.addEventListener('click', () => {
   $modalCallback.classList.add('modal-callback--visible');
   $siteContainer.classList.add('overlay');
 });

 $modalCallbackClose.addEventListener('click', () => {
   $modalCallback.classList.remove('modal-callback--visible');
 $siteContainer.classList.remove('overlay');
 });
