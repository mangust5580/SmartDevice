var $contactsBtn = document.querySelector(".page-header__contacts-btn");
var $modal = document.querySelector(".modal");
var $modalCloseBtn = document.querySelector(".modal__header-btn-close");
var $navTitle = document.querySelector(".page-footer__nav-title");
var $navList = document.querySelector(".page-footer__nav-list");
var $aboutOfficeTitle = document.querySelector(".page-footer__about-office-title");
var $aboutOfficeList = document.querySelector(".page-footer__about-office-list");
var $modalName = document.querySelector(".modal__value--name");
var $modalTel = document.querySelector(".modal__value--tel");
var $modalQuestion = document.querySelector(".modal__question");
var $phoneMask = document.querySelector("#phone-mask");
var $modalPhoneMask = document.querySelector("#modal-phone-mask");
var $modalOverlay = document.querySelector(".modal__overlay");
var $modalOverlayShow = document.querySelector(".modal__overlay-show");

var storageName = localStorage.getItem("name");
var storageTel = localStorage.getItem("tel");
var storageQuestion = localStorage.getItem("question ");

$contactsBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  $modal.classList.toggle("modal-show");
  $modalOverlay.classList.toggle("modal__overlay-show");
  $modalName.focus();
  if (storageName) {
    $modalName.value = storageName;
  }
  if (storageTel) {
    $modalTel.value = storageTel;
  }
  if (storageQuestion) {
    $modalQuestion.value = storageQuestion;
  }
});

$modalCloseBtn.addEventListener("click", function () {
  $modal.classList.contains("modal-show");
  $modal.classList.remove("modal-show");
  $modalOverlay.classList.remove("modal__overlay-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if ($modal.classList.contains("modal-show")) {
      evt.preventDefault();
      $modal.classList.remove("modal-show");
      $modalOverlay.classList.remove("modal__overlay-show");
    }
  }
});

if (document.body.clientWidth <= 480) {
  $navTitle.addEventListener("click", function () {
    $navTitle.classList.toggle("page-footer__nav-title--close");
    $aboutOfficeTitle.classList.toggle("page-footer__about-office-title--close");
    $navList.classList.toggle("page-footer__nav-list--open");
    $aboutOfficeList.classList.toggle("page-footer__about-office-list--close");
  });

  $aboutOfficeTitle.addEventListener("click", function () {
    $aboutOfficeTitle.classList.toggle("page-footer__about-office-title--close");
    $navTitle.classList.toggle("page-footer__nav-title--close");
    $aboutOfficeList.classList.toggle("page-footer__about-office-list--close");
    $navList.classList.toggle("page-footer__nav-list--open");
  });
};

$modalOverlay.addEventListener("click", function () {
  $modal.classList.remove("modal-show");
  $modalOverlay.classList.remove("modal__overlay-show");
});

var phoneMask = IMask(
  $phoneMask, {
    mask: "+{7}(000)000-00-00"
  });

var phoneMask = IMask(
  $modalPhoneMask, {
    mask: "+{7}(000)000-00-00"
  });
