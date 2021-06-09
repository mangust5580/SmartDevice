"use strict";

var $accordionToggle = document.querySelectorAll('.accordion__toggle');
$accordionToggle.forEach(function (el) {
  el.addEventListener('click', function (e) {
    el.classList.contains('menu-info__block--hidden');
    el.parentNode.classList.toggle('menu-info__block--hidden');
    el.classList.contains('accordion__toggle--current');
    el.classList.toggle('accordion__toggle--current');
  });
});
"use strict";

var selector = document.querySelectorAll('input[type=tel]');
var im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);
"use strict";

var $modalCallback = document.querySelector('.modal-callback');
var $contactsBtn = document.querySelector('.contacts__btn');
var $modalCallbackClose = document.querySelector('.modal-callback__close');
var $siteContainer = document.querySelector('.site-container');
$contactsBtn.addEventListener('click', function () {
  $modalCallback.classList.add('modal-callback--visible');
  $siteContainer.classList.add('overlay');
});
$modalCallbackClose.addEventListener('click', function () {
  $modalCallback.classList.remove('modal-callback--visible');
  $siteContainer.classList.remove('overlay');
});
"use strict";
//# sourceMappingURL=main.js.map
